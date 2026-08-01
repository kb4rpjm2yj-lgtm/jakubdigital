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
      "Správcem osobních údajů je Jakub Málek, IČO [IČO], provozovatel webu jakubdigital.cz. Veškeré dotazy týkající se ochrany osobních údajů směřujte na e-mail jakub@jakubdigital.cz.",
      // IČO placeholder — Kuba doplní
    ],
  },
  {
    title: "Jaké údaje zpracováváme",
    paragraphs: [
      "Prostřednictvím kontaktního formuláře od vás získáváme pouze údaje, které nám sami poskytnete: jméno a příjmení, e-mailovou adresu, telefon (nepovinný), obor a obsah vaší zprávy.",
      "Osobní údaje třetích osob do formuláře nezadávejte.",
    ],
  },
  {
    title: "Proč údaje zpracováváme",
    paragraphs: [
      "Údaje používáme výhradně pro odpověď na vaši poptávku a domluvení úvodní konzultace. Právním základem zpracování je plnění opatření přijímaných před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR) a oprávněný zájem správce na dalším zodpovězení vašich dotazů (čl. 6 odst. 1 písm. f) GDPR).",
      "Údaje nevyužíváme k automatizovanému rozhodování ani profilování a nepředáváme je třetím stranám pro jejich vlastní marketingové účely.",
    ],
  },
  {
    title: "Komu údaje předáváme",
    paragraphs: [
      "K doručení e-mailů s vaší poptávkou využíváme e-mailovou službu Resend (společnost Resend, Inc.), která vystupuje jako zpracovatel. Web je hostován na platformě Vercel, Inc., která taktéž zpracovává technické údaje v nezbytném rozsahu.",
      "S oběma zpracovateli máme uzavřeny odpovídající smlouvy o zpracování osobních údajů; k předávání údajů mimo Evropský hospodářský prostor dochází pouze v rozsahu a za podmínek stanovených GDPR.",
    ],
  },
  {
    title: "Jak dlouho údaje uchováváme",
    paragraphs: [
      "Údaje z kontaktního formuláře uchováváme po dobu vyřízení vaší poptávky a nejdéle 12 měsíců od poslední komunikace. V případě navázání spolupráce se údaje uchovávají po dobu trvání spolupráce a dále po dobu stanovenou právními předpisy.",
    ],
  },
  {
    title: "Vaše práva",
    paragraphs: [
      "V souvislosti se zpracováním osobních údajů máte právo na přístup k údajům, jejich opravu, výmaz („právo být zapomenut“), omezení zpracování, námitku proti zpracování a právo na přenositelnost údajů.",
      "Práva můžete uplatnit e-mailem na adrese jakub@jakubdigital.cz. Odpovíme vám bez zbytečného odkladu, nejpozději do jednoho měsíce. Máte rovněž právo podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů (www.uoou.cz).",
    ],
  },
];

export default function GdprPage() {
  return (
    <>
      <Nav />
      <main className="bg-warm-ivory">
        <section className="bg-midnight-teal pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
              GDPR
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-display leading-tight mb-6">
              Ochrana osobních údajů
            </h1>
            <p className="text-steel-grey-light text-sm leading-relaxed">
              Informace o tom, jak nakládáme s osobními údaji na webu
              jakubdigital.cz. Platné od 1. 8. 2026.
            </p>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-12">
              {SECTIONS.map((section, i) => (
                <div key={section.title}>
                  <h2 className="text-2xl text-ink font-display leading-tight mb-4">
                    <span className="text-antique-brass mr-3">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-sm text-steel-grey-strong leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-white rounded-xl shadow-card-resting">
              <p className="text-antique-brass text-xs tracking-[0.2em] uppercase mb-4 font-body">
                Kontakt
              </p>
              <p className="text-sm text-steel-grey-strong leading-relaxed mb-4">
                Máte dotaz ke zpracování osobních údajů? Napište mi:
              </p>
              <a
                href="mailto:jakub@jakubdigital.cz"
                className="inline-flex items-center gap-3 text-ink hover:text-antique-brass transition-colors"
              >
                <span className="text-antique-brass">→</span>
                <span>jakub@jakubdigital.cz</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
