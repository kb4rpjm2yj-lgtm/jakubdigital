import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

/**
 * Self-hostované fonty přes next/font (build-time download, žádný Google Fonts
 * <link> v runtime). Obě písma jsou variable:
 *
 * - weight: "variable" — stejný payload jako úzce ořezaný rozsah vah (Google
 *   Fonts servíruje jeden variable woff2 soubor bez ohledu na počet vah) a
 *   zachovává věrné renderování vah, které design skutečně používá:
 *   300 (font-light v logu patičky a ikoně "+" FAQ), 400, 500, 700.
 * - axes: ["opsz"] — optické škálování (Fraunces 9..144, Inter 14..32),
 *   odpovídá původnímu Google Fonts CSS.
 * - subsets: latin + latin-ext — latin-ext je nutný pro českou diakritiku
 *   (š, č, ř, ž, ě, ů…), jinak by glyfy spadly na fallback font.
 */
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
  title: "Jakub Digital | Weby, obsah a automatizace pro profesionály",
  description:
    "Web, obsah a podpora provozu na míru pro advokáty, realitní makléře, politiky a OSVČ. Transparentní ceny, jasné termíny, konzultace zdarma.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz" },
  openGraph: {
    title: "Jakub Digital | Weby, obsah a automatizace pro profesionály",
    description:
      "Web, obsah a podpora provozu na míru pro advokáty, realitní makléře, politiky a OSVČ. Transparentní ceny, jasné termíny, konzultace zdarma.",
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
