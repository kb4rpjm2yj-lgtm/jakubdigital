"use client";

import { useState } from "react";

type FormData = {
  jmeno: string;
  email: string;
  telefon: string;
  profese: string;
  zprava: string;
  website: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fallback" | "error">("idle");
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data: FormData = {
      jmeno: (form.elements.namedItem("jmeno") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      profese: (form.elements.namedItem("profese") as HTMLSelectElement).value,
      zprava: (form.elements.namedItem("zprava") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      if (result.fallbackMailto) {
        setMailto(result.fallbackMailto);
        setStatus("fallback");
        window.location.assign(result.fallbackMailto);
        return;
      }

      setError(result.error || "Zprávu se nepodařilo odeslat. Zkuste to prosím později.");
      setStatus("error");
    } catch {
      setError("Zprávu se nepodařilo odeslat. Zkuste to prosím později.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-warm-ivory p-8 text-center rounded-xl" role="status" aria-live="polite">
        <p className="text-antique-brass font-display text-xl mb-2">Děkuji za zprávu.</p>
        <p className="text-steel-grey text-sm">Ozvu se vám zpravidla do jednoho pracovního dne.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="jmeno" className="block text-sm text-ink mb-1.5">Jméno a příjmení</label>
        <input type="text" id="jmeno" name="jmeno" required autoComplete="name" className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300" placeholder="např. Jan Novák" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-ink mb-1.5">E-mail</label>
        <input type="email" id="email" name="email" required autoComplete="email" className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300" placeholder="jan@novak.cz" />
      </div>
      <div>
        <label htmlFor="telefon" className="block text-sm text-ink mb-1.5">Telefon <span className="text-steel-grey">(nepovinné)</span></label>
        <input type="tel" id="telefon" name="telefon" autoComplete="tel" className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300" placeholder="+420 777 123 456" />
      </div>
      <div>
        <label htmlFor="profese" className="block text-sm text-ink mb-1.5">Obor</label>
        <select id="profese" name="profese" className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300">
          <option value="">Vyberte...</option>
          <option value="Právní a poradenské služby">Právní a poradenské služby</option>
          <option value="Reality a finance">Reality a finance</option>
          <option value="Veřejná komunikace">Veřejná komunikace</option>
          <option value="Odborná firma">Odborná firma</option>
          <option value="Jiný obor">Jiný obor</option>
        </select>
      </div>
      <div>
        <label htmlFor="zprava" className="block text-sm text-ink mb-1.5">S čím potřebujete pomoci?</label>
        <textarea id="zprava" name="zprava" required minLength={10} rows={5} className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300 resize-y" placeholder="Například: Potřebuji nový web pro svou kancelář a rád bych věděl, jak by mohl fungovat." />
      </div>
      <label className="flex items-start gap-3 text-xs text-steel-grey">
        <input type="checkbox" required className="mt-0.5 accent-antique-brass" />
        Údaje použiji jen pro odpověď na váš dotaz a domluvení konzultace.
      </label>
      <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
        {status === "loading" ? "Odesílám…" : "Odeslat nezávaznou poptávku"}
      </button>
      {status === "fallback" && (
        <p className="text-xs text-steel-grey" role="status">
          Neotevřela se vám e-mailová aplikace? <a href={mailto} className="text-antique-brass hover:text-antique-brass/80">Otevřít připravený e-mail</a>
        </p>
      )}
      {status === "error" && <p className="text-red-600 text-xs" role="alert">{error}</p>}
    </form>
  );
}
