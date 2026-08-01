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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "fallback" | "error"
  >("idle");
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

      setError(
        result.error ||
          "Zprávu se nepodařilo odeslat. Zkuste to prosím později."
      );
      setStatus("error");
    } catch {
      setError("Zprávu se nepodařilo odeslat. Zkuste to prosím později.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-graphite border border-grid-blue/20 p-8 text-center" role="status">
        <p className="font-mono text-sm tracking-[0.15em] text-signal-orange mb-2">
          Děkuji za zprávu.
        </p>
        <p className="text-warm-white/60 text-sm">
          Ozvu se do jednoho pracovního dne — na e-mail nebo telefon, jak preferujete.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Web</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="jmeno"
          className="block font-mono text-[10px] tracking-[0.15em] text-callout mb-1.5"
        >
          JMÉNO
        </label>
        <input
          type="text"
          id="jmeno"
          name="jmeno"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-graphite border border-grid-blue/30 text-warm-white text-sm focus:outline-none focus:border-signal-orange transition-colors"
          placeholder="např. Jan Novák"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-[10px] tracking-[0.15em] text-callout mb-1.5"
        >
          E-MAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-graphite border border-grid-blue/30 text-warm-white text-sm focus:outline-none focus:border-signal-orange transition-colors"
          placeholder="jan@novak.cz"
        />
      </div>

      <div>
        <label
          htmlFor="telefon"
          className="block font-mono text-[10px] tracking-[0.15em] text-callout mb-1.5"
        >
          TELEFON <span className="text-callout/40">(nepovinné)</span>
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          autoComplete="tel"
          className="w-full px-4 py-3 bg-graphite border border-grid-blue/30 text-warm-white text-sm focus:outline-none focus:border-signal-orange transition-colors"
          placeholder="+420 777 123 456"
        />
      </div>

      <div>
        <label
          htmlFor="profese"
          className="block font-mono text-[10px] tracking-[0.15em] text-callout mb-1.5"
        >
          OBOR
        </label>
        <select
          id="profese"
          name="profese"
          className="w-full px-4 py-3 bg-graphite border border-grid-blue/30 text-warm-white text-sm focus:outline-none focus:border-signal-orange transition-colors appearance-none"
        >
          <option value="">Vyberte...</option>
          <option value="Právní a poradenské služby">Právní a poradenské služby</option>
          <option value="Reality a finance">Reality a finance</option>
          <option value="Veřejná komunikace">Veřejná komunikace</option>
          <option value="Odborná firma">Odborná firma</option>
          <option value="Jiný obor">Jiný obor</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="zprava"
          className="block font-mono text-[10px] tracking-[0.15em] text-callout mb-1.5"
        >
          S ČÍM POMOCI
        </label>
        <textarea
          id="zprava"
          name="zprava"
          required
          minLength={10}
          rows={5}
          className="w-full px-4 py-3 bg-graphite border border-grid-blue/30 text-warm-white text-sm focus:outline-none focus:border-signal-orange transition-colors resize-y"
          placeholder="Například: Potřebuji nový web pro svou kancelář a rád bych věděl, jak by mohl fungovat."
        />
      </div>

      <label className="flex items-start gap-3 text-[10px] text-callout/60 font-mono tracking-[0.08em]">
        <input
          type="checkbox"
          required
          className="mt-0.5 accent-signal-orange"
        />
        ÚDAJE POUŽIJI JEN PRO ODPOVĚĎ A DOMLUVENÍ KONZULTACE
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-signal-orange text-white font-mono text-xs tracking-[0.15em] hover:bg-signal-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? "ODESÍLÁM…" : "ODESLAT POPTÁVKU"}
      </button>

      {status === "fallback" && (
        <p className="font-mono text-[9px] text-callout/50" role="status">
          Neotevřela se e-mailová aplikace?{" "}
          <a href={mailto} className="text-signal-orange hover:text-signal-orange/70">
            Otevřít připravený e-mail
          </a>
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-[9px] text-red-400" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
