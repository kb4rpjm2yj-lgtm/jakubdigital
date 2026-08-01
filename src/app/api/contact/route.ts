export const runtime = "nodejs";

type ContactPayload = Record<string, unknown>;

const getText = (body: ContactPayload, key: string) =>
  typeof body[key] === "string" ? body[key].trim() : "";

function createMailto({ jmeno, email, telefon, profese, zprava }: Record<string, string>) {
  const body = [
    `Jméno: ${jmeno}`,
    `E-mail: ${email}`,
    `Telefon: ${telefon || "neuveden"}`,
    `Obor: ${profese || "neuveden"}`,
    "",
    "Co potřebuji:",
    zprava,
  ].join("\n");

  return `mailto:jakub@jakubdigital.cz?subject=${encodeURIComponent(`Nezávazná poptávka – ${jmeno}`)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  try {
    const rawBody: unknown = await request.json();
    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return Response.json({ error: "Neplatná data formuláře." }, { status: 400 });
    }

    const body = rawBody as ContactPayload;
    const jmeno = getText(body, "jmeno");
    const email = getText(body, "email");
    const telefon = getText(body, "telefon");
    const profese = getText(body, "profese");
    const zprava = getText(body, "zprava");
    const website = getText(body, "website");

    if (website) return Response.json({ success: true });
    if (jmeno.length < 2) return Response.json({ error: "Zadejte prosím jméno." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Zadejte platnou e-mailovou adresu." }, { status: 400 });
    }
    if (zprava.length < 10) {
      return Response.json({ error: "Napište prosím stručně, s čím potřebujete pomoci." }, { status: 400 });
    }

    const fallbackMailto = createMailto({ jmeno, email, telefon, profese, zprava });
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const recipient = process.env.CONTACT_TO || "jakub@jakubdigital.cz";

    if (!apiKey || !from) {
      return Response.json(
        { error: "Formulář zatím odesílá přes e-mailovou aplikaci.", fallbackMailto },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Nová poptávka od ${jmeno}`,
        text: `Jméno: ${jmeno}\nE-mail: ${email}\nTelefon: ${telefon || "neuveden"}\nObor: ${profese || "neuveden"}\n\nCo potřebuje:\n${zprava}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact e-mail delivery failed", response.status);
      return Response.json(
        { error: "E-mail se nepodařilo doručit. Otevřu vám připravenou zprávu.", fallbackMailto },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Zprávu se nepodařilo zpracovat." }, { status: 500 });
  }
}
