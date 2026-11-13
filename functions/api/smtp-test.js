import { connect } from 'cloudflare:sockets';

export async function onRequestGet() {
  let socket;
  try {
    socket = connect({ hostname: 'smtp.mail.me.com', port: 587 }, { secureTransport: 'starttls' });
    const reader = socket.readable.getReader();
    const writer = socket.writable.getWriter();
    const dec = new TextDecoder();
    const enc = new TextEncoder();
    const read = async () => {
      const { value, done } = await reader.read();
      return done ? '' : dec.decode(value);
    };
    const greet = await read();
    await writer.write(enc.encode('EHLO jakubdigital.cz\r\n'));
    const ehlo = await read();
    await writer.write(enc.encode('QUIT\r\n'));
    try { await writer.close(); } catch {}
    try { await reader.cancel(); } catch {}
    return new Response(JSON.stringify({ ok: true, greet: greet.slice(0, 80), ehlo: ehlo.slice(0, 200) }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (e) {
    try { socket && socket.close(); } catch {}
    return new Response(JSON.stringify({ ok: false, error: String(e && e.message || e).slice(0, 300) }), {
      status: 500, headers: { 'content-type': 'application/json' }
    });
  }
}
