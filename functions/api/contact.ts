/**
 * Cloudflare Pages Function — kontaktní formulář
 * POST /api/contact  →  odešle e-mail přes Resend, fallback na mailto:
 */

interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM: string;
  CONTACT_TO: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body: Record<string, unknown> = await context.request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Neplatná data formuláře." }, { status: 400 });
    }

    const jmeno = String(body.jmeno ?? "").trim();
    const email = String(body.email ?? "").trim();
    const telefon = String(body.telefon ?? "").trim();
    const profese = String(body.profese ?? "").trim();
    const zprava = String(body.zprava ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Honeypot
    if (website) return Response.json({ success: true });
    if (jmeno.length < 2) return Response.json({ error: "Zadejte jméno." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Zadejte platný e-mail." }, { status: 400 });
    }
    if (zprava.length < 10) {
      return Response.json({ error: "Napište stručně, s čím pomoci." }, { status: 400 });
    }

    const fallbackMailto = createMailto({ jmeno, email, telefon, profese, zprava });
    const apiKey = context.env.RESEND_API_KEY;
    const from = context.env.CONTACT_FROM;
    const recipient = context.env.CONTACT_TO || "jakub@jakubdigital.cz";

    if (!apiKey || !from) {
      return Response.json(
        { error: "Formulář odesílá přes e-mail.", fallbackMailto },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Poptávka od ${jmeno}`,
        text: `Jméno: ${jmeno}\nE-mail: ${email}\nTelefon: ${telefon || "neuveden"}\nObor: ${profese || "neuveden"}\n\nCo potřebuje:\n${zprava}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact e-mail failed", response.status);
      return Response.json(
        { error: "E-mail se nepodařilo doručit.", fallbackMailto },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error", err);
    return Response.json(
      { error: "Zprávu se nepodařilo zpracovat." },
      { status: 500 },
    );
  }
};

function createMailto(data: Record<string, string>) {
  const body = [
    `Jméno: ${data.jmeno}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.telefon || "neuveden"}`,
    `Obor: ${data.profese || "neuveden"}`,
    "",
    "Co potřebuji:",
    data.zprava,
  ].join("\n");

  return `mailto:jakub@jakubdigital.cz?subject=${encodeURIComponent(
    `Nezávazná poptávka – ${data.jmeno}`,
  )}&body=${encodeURIComponent(body)}`;
}
