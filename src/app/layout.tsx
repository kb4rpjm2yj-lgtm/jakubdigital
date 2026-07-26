import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakubdigital.cz"),
  title: "Jakub Digital | Digitální servis pro profesionály",
  description:
    "Weby, sociální sítě a chytré procesy pro advokáty, realitní makléře, politiky a malé podnikatele. Česky, na míru a bez technických starostí.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jakubdigital.cz" },
  openGraph: {
    title: "Jakub Digital | Digitální servis pro profesionály",
    description:
      "Weby, sociální sítě a chytré procesy pro advokáty, realitní makléře, politiky a malé podnikatele.",
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
