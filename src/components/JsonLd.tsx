import { FAQ } from "@/data/content";

/**
 * Strukturovaná data dle /tmp/jd-seo-final.md (1. 8. 2026):
 * - ProfessionalService (sekce 3) — včetně 4 nabídek s cenami a areaServed.
 * - FAQPage (sekce 4) — generuje se ze stejného pole FAQ jako accordion,
 *   otázky přesně dle copywritera (bez slova "AI").
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jakubdigital.cz/#organization",
    name: "Jakub Digital",
    description:
      "Digitální servis pro profesionály: webové stránky na míru, správa sociálních sítí a podpora provozu. Osobní spolupráce, transparentní ceny a jasné termíny pro advokáty, realitní makléře, politiky a OSVČ po celé České republice.",
    url: "https://jakubdigital.cz",
    email: "jakub@jakubdigital.cz",
    // telephone: "+420...", // volitelné — doplnit, až Kuba dodá číslo
    logo: "https://jakubdigital.cz/icon.svg",
    image: "https://jakubdigital.cz/opengraph-image",
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Česká republika" },
    address: { "@type": "PostalAddress", addressCountry: "CZ" },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Webové stránky na míru",
        description:
          "Promyšlená prezentace od struktury a textů po spuštění a předání. Cena od 19 900 Kč, termín předem.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 19900,
          priceCurrency: "CZK",
        },
        areaServed: { "@type": "Country", name: "Česká republika" },
      },
      {
        "@type": "Offer",
        name: "Správa sociálních sítí",
        description:
          "Obsahový plán, texty a grafické podklady, publikace na vybraných kanálech. Cena od 3 000 Kč měsíčně.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 3000,
          priceCurrency: "CZK",
        },
        areaServed: { "@type": "Country", name: "Česká republika" },
      },
      {
        "@type": "Offer",
        name: "Podpora provozu",
        description:
          "Drobné systémy pro dotazy, schůzky a přehledy, které šetří čas. Cena od 5 000 Kč měsíčně.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 5000,
          priceCurrency: "CZK",
        },
        areaServed: { "@type": "Country", name: "Česká republika" },
      },
      {
        "@type": "Offer",
        name: "Kompletní digitální servis (balíček)",
        description:
          "Web na míru + první měsíc správy sociálních sítí + první měsíc podpory provozu za 27 900 Kč.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 27900,
          priceCurrency: "CZK",
        },
        areaServed: { "@type": "Country", name: "Česká republika" },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
