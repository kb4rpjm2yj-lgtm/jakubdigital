export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jakub Digital",
    description:
      "Digitální servis pro profesionály - weby, sociální sítě a automatizace",
    url: "https://jakubdigital.cz",
    email: "jakub@jakubdigital.cz",
    areaServed: { "@type": "Country", name: "CZ" },
    priceRange: "15 000 - 50 000 Kč",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
