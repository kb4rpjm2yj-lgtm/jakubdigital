import { FAQ } from "@/data/content";

/**
 * Strukturovaná data — nová strategie (srpen 2026).
 * Ceny: web 14 900, obsah 6 900/měs, provoz 1 490/měs.
 * Bez oborového omezení i bez "celá ČR".
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jakubdigital.cz/#organization",
    name: "Jakub Digital",
    description:
      "Weby, texty a provoz od člověka, kterému můžete zavolat. Jeden kontakt, konečná cena, jasný termín.",
    url: "https://jakubdigital.cz",
    email: "jakub@jakubdigital.cz",
    logo: "https://jakubdigital.cz/icon.svg",
    image: "https://jakubdigital.cz/opengraph-image",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressLocality: "Liberec",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Web",
        description:
          "Návrh, texty a spuštění webu na míru. Cena 14 900 Kč, do 14 dnů.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 14900,
          priceCurrency: "CZK",
        },
      },
      {
        "@type": "Offer",
        name: "Obsah a sítě",
        description:
          "Plán obsahu, texty, grafika a publikování. 6 900 Kč měsíčně, bez závazku.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 6900,
          priceCurrency: "CZK",
        },
      },
      {
        "@type": "Offer",
        name: "Provoz",
        description:
          "Drobné úpravy, zálohy, hlídání provozu. 1 490 Kč měsíčně.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 1490,
          priceCurrency: "CZK",
        },
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
