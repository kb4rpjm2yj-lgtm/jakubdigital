import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakubdigital.cz"),
  title: "Jakub Digital | Weby, obsah a automatizace pro profesionály",
  description:
    "Weby, obsah a automatizace pro profesionály, kteří chtějí posílit svou reputaci a ušetřit čas. Osobně, na míru a s jasným plánem.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz" },
  openGraph: {
    title: "Jakub Digital | Weby, obsah a automatizace pro profesionály",
    description:
      "Digitální partner pro profesionály, kterým záleží na reputaci, čase a dlouhodobém výsledku.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className="scroll-smooth"
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&family=Inter:opsz,wght@14..32,100..900&display=swap"
        rel="stylesheet"
      />
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
