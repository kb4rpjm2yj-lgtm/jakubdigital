import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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


export const metadata: Metadata = {
  metadataBase: new URL("https://jakubdigital.cz"),
  title: "Jakub Digital | Web, který po spuštění nekončí",
  description:
    "Jsem Jakub. Postavím web, napíšu texty a starám se dál. 14 900 Kč konečná. Do 14 dnů.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz" },
  openGraph: {
    title: "Jakub Digital | Web, který po spuštění nekončí",
    description:
      "Jsem Jakub. Postavím web, napíšu texty a když je potřeba, starám se dál. 14 900 Kč konečná. Do 14 dnů.",
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
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
