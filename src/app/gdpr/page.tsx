import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Jakub Digital",
  description:
    "Informace o zpracování osobních údajů na webu jakubdigital.cz — jaké údaje zpracováváme, proč a jaká máte práva.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz/gdpr" },
};

const SECTIONS = [
  {
    title: "Kdo zpracovává vaše údaje",
    paragraphs: [
      "Správcem osobních údajů je Jakub Málek, IČO [doplňte], provozovatel webu jakubdigital.cz. Veškeré dotazy směřujte na jakub@jakubdigital.cz.",
    ],
  },
  {
    title: "Jaké údaje zpracováváme",
    paragraphs: [
      "Kontaktním formulářem získáváme pouze údaje, které sami poskytnete: jméno a příjmení, e-mail, telefon (nepovinný), obor a obsah zprávy. Údaje třetích osob do formuláře nezadávejte.",
    ],
  },
  {
    title: "Proč údaje zpracováváme",
    paragraphs: [
      "Údaje používáme výhradně pro odpověď na poptávku a domluvení konzultace. Právní základ: plnění opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR) a oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR).",
      "Údaje nepoužíváme k automatizovanému rozhodování ani profilování a nepředáváme je třetím stranám pro jejich marketing.",
    ],
  },
  {
    title: "Komu údaje předáváme",
    paragraphs: [
      "K doručení e-mailů využíváme službu Resend (Resend, Inc.) jako zpracovatele. Web je hostován na platformě Cloudflare Pages.",
    ],
  },
  {
    title: "Jak dlouho údaje uchováváme",
    paragraphs: [
      "Údaje z formuláře uchováváme po dobu vyřízení poptávky, nejdéle 12 měsíců od poslední komunikace. Při navázání spolupráce po dobu trvání vztahu a dle právních předpisů.",
    ],
  },
  {
    title: "Vaše práva",
    paragraphs: [
      "Máte právo na přístup, opravu, výmaz, omezení zpracování, námitku a přenositelnost údajů. Uplatněte je na jakub@jakubdigital.cz — odpovíme do měsíce. Můžete též podat stížnost u ÚOOÚ (www.uoou.cz).",
    ],
  },
];

export default function GdprPage() {
  return (
    <>
      <Nav />
      <main className="bg-warm-white">
        <section className="hero-surface pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange mb-4">
              GDPR
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-warm-white mb-6">
              Ochrana osobních údajů
            </h1>
            <p className="text-warm-white/60 text-sm">
              Jak nakládáme s údaji na jakubdigital.cz. Platné od 1. 8. 2026.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-12">
              {SECTIONS.map((s, i) => (
                <div key={s.title}>
                  <h2 className="font-display text-xl text-ink mb-3 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-signal-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-ink/60 text-sm leading-relaxed mb-2">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-16 border border-ink/10 p-8">
              <p className="font-mono text-[10px] tracking-[0.15em] text-callout mb-4">
                KONTAKT
              </p>
              <p className="text-ink/60 text-sm mb-4">
                Máte dotaz ke zpracování údajů?
              </p>
              <a
                href="mailto:jakub@jakubdigital.cz"
                className="font-mono text-xs tracking-[0.12em] text-signal-orange hover:text-signal-orange/70 transition-colors"
              >
                jakub@jakubdigital.cz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
