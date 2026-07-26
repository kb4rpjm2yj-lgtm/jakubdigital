"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      jmeno: (form.jmeno as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      telefon: (form.telefon as HTMLInputElement).value,
      profese: (form.profese as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || "Zprávu se nepodařilo odeslat.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Zprávu se nepodařilo odeslat. Zkuste to prosím později.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-warm-ivory p-8 text-center rounded-xl" role="alert" aria-live="polite">
        <p className="text-antique-brass font-display text-xl mb-2">Děkuji za zprávu!</p>
        <p className="text-steel-grey text-sm">Ozvů se vám do 24 hodin.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="jmeno" className="block text-sm text-ink mb-1.5">
          Jméno a příjmení
        </label>
        <input
          type="text"
          id="jmeno"
          name="jmeno"
          required
          className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300"
          placeholder="např. Jan Novák"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-ink mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300"
          placeholder="jan@novak.cz"
        />
      </div>
      <div>
        <label htmlFor="telefon" className="block text-sm text-ink mb-1.5">
          Telefon (nepovinné)
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300"
          placeholder="+420 777 123 456"
        />
      </div>
      <div>
        <label htmlFor="profese" className="block text-sm text-ink mb-1.5">
          Vaše profese
        </label>
        <select
          id="profese"
          name="profese"
          className="w-full px-4 py-3 bg-white border border-ink/15 rounded-lg text-ink text-sm focus:outline-none focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/20 transition-all duration-300"
        >
          <option value="">Vyberte...</option>
          <option value="advokat">Advokát / notář</option>
          <option value="realtor">Realitní makléř</option>
          <option value="politik">Politik / veřejná osoba</option>
          <option value="podnikatel">Malý podnikatel</option>
          <option value="jine">Jiné</option>
        </select>
      </div>
      <label className="flex items-start gap-3 text-xs text-steel-grey">
        <input type="checkbox" required className="mt-0.5 accent-antique-brass" />
        Odesláním souhlasíte se zpracováním osobních údajů pro účely domluvení konzultace.
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {status === "loading" ? "Odesílám…" : "Domluvit konzultaci zdarma"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs" role="alert">{errorMsg}</p>
      )}
    </form>
  );
}
