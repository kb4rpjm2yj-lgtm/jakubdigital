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
      <div
        className="bg-card border border-accent/25 rounded-2xl p-8 text-center shadow-card"
        role="status"
      >
        <p className="text-accent font-display text-xl mb-2 font-semibold">
          Děkuji za zprávu.
        </p>
        <p className="text-ink/60 text-sm leading-relaxed">
          Ozvu se do jednoho pracovního dne — na e-mail nebo telefon, jak
          preferujete.
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
          className="block text-xs font-medium text-ink/70 mb-1.5"
        >
          Jméno
        </label>
        <input
          type="text"
          id="jmeno"
          name="jmeno"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-card border border-ink/15 rounded-xl text-ink text-sm placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors"
          placeholder="např. Jan Novák"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-ink/70 mb-1.5"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-card border border-ink/15 rounded-xl text-ink text-sm placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors"
          placeholder="jan@novak.cz"
        />
      </div>

      <div>
        <label
          htmlFor="telefon"
          className="block text-xs font-medium text-ink/70 mb-1.5"
        >
          Telefon{" "}
          <span className="text-ink/40 font-normal">(nepovinné)</span>
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          autoComplete="tel"
          className="w-full px-4 py-3 bg-card border border-ink/15 rounded-xl text-ink text-sm placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors"
          placeholder="+420 777 123 456"
        />
      </div>

      <div>
        <label
          htmlFor="profese"
          className="block text-xs font-medium text-ink/70 mb-1.5"
        >
          Obor
        </label>
        <select
          id="profese"
          name="profese"
          className="w-full px-4 py-3 bg-card border border-ink/15 rounded-xl text-ink text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
        >
          <option value="">Vyberte...</option>
          <option value="Právní a poradenské služby">
            Právní a poradenské služby
          </option>
          <option value="Reality a finance">Reality a finance</option>
          <option value="Veřejná komunikace">Veřejná komunikace</option>
          <option value="Odborná firma">Odborná firma</option>
          <option value="Jiný obor">Jiný obor</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="zprava"
          className="block text-xs font-medium text-ink/70 mb-1.5"
        >
          S čím pomoci
        </label>
        <textarea
          id="zprava"
          name="zprava"
          required
          minLength={10}
          rows={5}
          className="w-full px-4 py-3 bg-card border border-ink/15 rounded-xl text-ink text-sm placeholder:text-ink/35 focus:outline-none focus:border-accent transition-colors resize-y"
          placeholder="Například: Potřebuji nový web pro svou kancelář a rád bych věděl, jak by mohl fungovat."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/55 leading-relaxed">
        <input type="checkbox" required className="mt-0.5 accent-accent" />
        Údaje použiji jen pro odpověď a domluvení konzultace
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? "Odesílám…" : "Odeslat poptávku"}
      </button>

      {status === "fallback" && (
        <p className="text-xs text-ink/50" role="status">
          Neotevřela se e-mailová aplikace?{" "}
          <a
            href={mailto}
            className="text-accent hover:text-accent/70"
          >
            Otevřít připravený e-mail
          </a>
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
