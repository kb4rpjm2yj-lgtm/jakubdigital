import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jakubdigital.cz"),
  title: "Jakub Digital | Web, na který se dá zavolat",
  description:
    "Jsem Jakub. Postavím web, napíšu texty a starám se dál. Jeden člověk, konečná cena, čtrnáct dnů.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz" },
  openGraph: {
    title: "Jakub Digital | Web, na který se dá zavolat",
    description:
      "Web, texty a provoz od člověka, kterému můžete zavolat. Jsem Jakub — konečná cena, jasný termín, jeden kontakt.",
    locale: "cs_CZ",
    type: "website",
    siteName: "Jakub Digital",
    url: "https://jakubdigital.cz",
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
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
