import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-2xl">
            <p className="text-accent text-sm tracking-wide uppercase mb-6 font-medium">
              Chyba 404
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-ink font-display leading-tight mb-6">
              Tato stránka
              <br />
              <span className="text-accent">neexistuje.</span>
            </h1>
            <p className="text-lg text-ink/65 leading-relaxed max-w-xl mb-10">
              Adresa, kterou jste zadali, na tomto webu není — nebo byla
              přesunuta. Zkuste se vrátit na úvodní stránku, nebo mi napište,
              a já vám poradím.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium text-sm rounded-full hover:bg-accent/90 transition-all duration-300"
              >
                Zpět na úvodní stránku
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border border-accent/40 text-accent font-medium text-sm rounded-full hover:border-accent/80 transition-all duration-300"
              >
                Napsat zprávu
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
