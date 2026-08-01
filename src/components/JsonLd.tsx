export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jakub Digital",
    description:
      "Weby, obsah a automatizace pro profesionály, kteří chtějí budovat důvěru a šetřit čas.",
    url: "https://jakubdigital.cz",
    email: "jakub@jakubdigital.cz",
    areaServed: { "@type": "Country", name: "CZ" },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
