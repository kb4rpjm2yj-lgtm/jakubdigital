// Cloudflare Pages Function — kontaktní formulář.
// Odešle e-mail přes iCloud SMTP (smtp.mail.me.com:587, STARTTLS) přímo na CONTACT_TO.
// Přihlašovací údaje jsou v Pages env: SMTP_USER, SMTP_PASS; adresy CONTACT_TO, CONTACT_FROM.

import { connect } from 'cloudflare:sockets';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    }
  });

const clean = (v, max) => String(v ?? '').replace(/[\u0000\r\n]/g, ' ').trim().slice(0, max);
const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));

function responseReader(socket) {
  const reader = socket.readable.getReader();
  const decoder = new TextDecoder();
  return {
    async read(timeout = 10000) {
      let buffer = '';
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline) {
        const left = Math.max(1, deadline - Date.now());
        const result = await Promise.race([
          reader.read(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('smtp_timeout')), left))
        ]);
        if (result.done) break;
        buffer += decoder.decode(result.value, { stream: true });
        if (/(^|\r?\n)\d{3} /.test(buffer)) return buffer;
      }
      throw new Error('smtp_timeout');
    },
    release() {
      try { reader.releaseLock(); } catch {}
    }
  };
}

async function sendCommand(writer, read, command, expect) {
  await writer.write(new TextEncoder().encode(command + '\r\n'));
  const res = await read();
  if (expect && !res.startsWith(expect)) {
    throw new Error('smtp_unexpected:' + res.slice(0, 80));
  }
  return res;
}

async function sendMail(env, data) {
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;
  const to = env.CONTACT_TO || 'jakub@jakubdigital.cz';
  const from = env.CONTACT_FROM || `Jakub Digital <${user}>`;
  if (!user || !pass) throw new Error('smtp_not_configured');

  let socket = connect({ hostname: 'smtp.mail.me.com', port: 587 }, { secureTransport: 'starttls' });
  try {
    let stream = responseReader(socket);
    let writer = socket.writable.getWriter();
    await stream.read(); // 220
    await sendCommand(writer, stream.read, 'EHLO jakubdigital.cz', '250');
    await sendCommand(writer, stream.read, 'STARTTLS', '220');

    stream.release();
    try { writer.releaseLock(); } catch {}
    socket = socket.startTls();
    stream = responseReader(socket);
    writer = socket.writable.getWriter();
    await sendCommand(writer, stream.read, 'EHLO jakubdigital.cz', '250');
    await sendCommand(writer, stream.read, 'AUTH LOGIN', '334');
    await sendCommand(writer, stream.read, b64(user), '334');
    await sendCommand(writer, stream.read, b64(pass), '235');

    await sendCommand(writer, stream.read, `MAIL FROM:<${user}>`, '250');
    await sendCommand(writer, stream.read, `RCPT TO:<${to}>`, '250');
    await sendCommand(writer, stream.read, 'DATA', '354');

    const subject = `Poptávka z jakubdigital.cz — ${data.name}`;
    const headers = [
      `From: ${from}`,
      `To: ${to}`,
      `Reply-To: ${data.email}`,
      `Subject: =?UTF-8?B?${b64(subject)}?=`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit'
    ].join('\r\n');
    const body = [
      `Jméno: ${data.name}`,
      `E-mail: ${data.email}`,
      '',
      data.message,
      '',
      '---',
      'Odesláno z formuláře na jakubdigital.cz'
    ].join('\r\n');
    const raw = (headers + '\r\n\r\n' + body)
      .split('\r\n')
      .map((line) => (line.startsWith('.') ? '.' + line : line))
      .join('\r\n');
    await writer.write(new TextEncoder().encode(raw + '\r\n.\r\n'));
    const done = await stream.read();
    if (!done.startsWith('250')) throw new Error('smtp_data_failed');
    await sendCommand(writer, stream.read, 'QUIT', '221').catch(() => {});
    try { await writer.close(); } catch {}
    try { await socket.close(); } catch {}
  } catch (err) {
    try { await socket.close(); } catch {}
    throw err;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const len = Number(request.headers.get('content-length') || 0);
  if (len > 20000) return json({ ok: false, error: 'too_large' }, 413);

  const origin = request.headers.get('origin') || '';
  const allowed = ['https://jakubdigital.cz', 'https://www.jakubdigital.cz'];
  if (origin && !allowed.includes(origin) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
    return json({ ok: false, error: 'forbidden' }, 403);
  }

  let payload;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) payload = await request.json();
    else payload = Object.fromEntries((await request.formData()).entries());
  } catch {
    return json({ ok: false, error: 'invalid_body' }, 400);
  }

  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120);
  const message = String(payload.message ?? '').replace(/\u0000/g, '').trim().slice(0, 5000);
  const honey = clean(payload.website, 200);
  if (honey) return json({ ok: true });
  if (name.length < 2 || message.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  // Jednoduchý rate limit proti burstům (per IP, 60 s).
  try {
    const ip = request.headers.get('cf-connecting-ip');
    if (ip && typeof caches !== 'undefined' && caches.default) {
      const key = new Request(`https://rate.jakubdigital.cz/${encodeURIComponent(ip)}`);
      if (await caches.default.match(key)) return json({ ok: false, error: 'rate_limited' }, 429);
      await caches.default.put(key, new Response('1', { headers: { 'cache-control': 'max-age=60' } }));
    }
  } catch {}

  try {
    await sendMail(env, { name, email, message });
    return json({ ok: true });
  } catch (err) {
    console.error('contact send failed', err && err.message);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
}
