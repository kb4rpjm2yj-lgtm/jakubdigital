import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-midnight-teal flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-2xl">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Chyba 404
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-display leading-none mb-6">
              Tato stránka
              <br />
              <span className="text-antique-brass">neexistuje.</span>
            </h1>
            <p className="text-lg text-steel-grey-light leading-relaxed max-w-xl mb-10">
              Adresa, kterou jste zadali, na tomto webu není — nebo byla
              přesunuta. Zkuste se vrátit na úvodní stránku, nebo mi napište,
              a já vám poradím.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 transition-all duration-300"
              >
                Zpět na úvodní stránku
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border border-antique-brass/40 text-antique-brass font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:border-antique-brass/80 transition-all duration-300"
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
