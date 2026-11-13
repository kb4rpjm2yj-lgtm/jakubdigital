// Cloudflare Pages Function — kontaktní formulář.
// Přijme JSON z webu, ověří ho a předá službě FormSubmit, která doručí e-mail na jakub@jakubdigital.cz.
// FormSubmit při prvním odeslání pošle na příjemce aktivační e-mail; poté už zprávy doručuje přímo.

const RECIPIENT = 'jakub@jakubdigital.cz';
const MAX_BODY = 20_000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    }
  });

export async function onRequestPost(context) {
  const { request } = context;

  const len = Number(request.headers.get('content-length') || 0);
  if (len > MAX_BODY) return json({ ok: false, error: 'too_large' }, 413);

  let payload;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      payload = await request.json();
    } else {
      const fd = await request.formData();
      payload = Object.fromEntries(fd.entries());
    }
  } catch {
    return json({ ok: false, error: 'invalid_body' }, 400);
  }

  const clean = (v, max) => String(v ?? '').replace(/\u0000/g, '').trim().slice(0, max);
  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120);
  const message = clean(payload.message, 5000);
  const honey = clean(payload.website, 200);

  // Honeypot: robot vyplní skryté pole. Tváříme se, že je odesláno.
  if (honey) return json({ ok: true });

  if (name.length < 2 || message.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  const body = new URLSearchParams({
    name,
    email,
    message,
    _replyto: email,
    _subject: `Poptávka z jakubdigital.cz — ${name}`,
    _template: 'table',
    _captcha: 'false'
  });

  let upstream;
  try {
    upstream = await fetch(`https://formsubmit.co/${RECIPIENT}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        origin: 'https://jakubdigital.cz',
        referer: 'https://jakubdigital.cz/',
        accept: 'text/html,application/xhtml+xml'
      },
      body
    });
  } catch (err) {
    console.error('contact upstream network error', err && err.message);
    return json({ ok: false, error: 'network' }, 502);
  }

  const text = await upstream.text();

  if (!upstream.ok) {
    console.error('contact upstream status', upstream.status);
    return json({ ok: false, error: 'upstream' }, 502);
  }

  // FormSubmit při první zprávě vyžaduje aktivaci e-mailem. Zprávu považujeme za přijatou;
  // Jakub dostane aktivační e-mail a po kliknutí už další zprávy chodí přímo.
  if (/needs Activation|Activate Form|activation/i.test(text)) {
    return json({ ok: true, activation: true });
  }

  return json({ ok: true });
}
