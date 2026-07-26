export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jmeno, email, telefon, profese } = body;

    if (!jmeno || jmeno.length < 2) {
      return Response.json({ error: "Jméno je povinné (min. 2 znaky)." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Zadejte platnou e-mailovou adresu." }, { status: 400 });
    }

    console.log("--- Formulář odeslán ---");
    console.log({ jmeno, email, telefon, profese });
    console.log("TODO: napojit na Resend (RESEND_API_KEY + jakub@jakubdigital.cz)");

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Zprávu se nepodařilo odeslat." }, { status: 500 });
  }
}
