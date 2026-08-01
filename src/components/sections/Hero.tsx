import SparkParticles from "@/components/SparkParticles";
import {
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
  HERO_EYEBROW,
  HERO_H1,
  HERO_IMAGE_SRC,
  HERO_SUBTITLE,
} from "@/data/content";

/**
 * HERO_H1 má dvě věty oddělené ". " — první věta bílá, druhá mosazná.
 * Pokud se formát textu změní, upravit i rozdělení níže.
 */
const [h1First, h1Second] = HERO_H1.split(". ");

export default function Hero() {
  return (
    <section className="hero-surface relative min-h-screen bg-midnight-teal flex items-center overflow-hidden">
      {/* Dekorativní pozadí — pod SparkParticles (canvas má z-10, obsah z-20).
          Nízká opacita (0.2) drží text čitelný — obrázek je tmavý, stačí jako textura. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${HERO_IMAGE_SRC})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <SparkParticles />
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-28 md:py-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-6 font-body animate-fade-in-up">
              {HERO_EYEBROW}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display leading-[1.1] mb-8 animate-fade-in-up animate-delay-1">
              {h1First}.
              <br />
              <span className="text-antique-brass">{h1Second}</span>
            </h1>
            <p className="text-lg md:text-xl text-steel-grey-light leading-relaxed max-w-xl mb-10 animate-fade-in-up animate-delay-2">
              {HERO_SUBTITLE}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 transition-all duration-300"
              >
                {HERO_CTA_PRIMARY}
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center justify-center px-8 py-4 border border-antique-brass/40 text-antique-brass font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:border-antique-brass/80 transition-all duration-300"
              >
                {HERO_CTA_SECONDARY}
              </a>
            </div>
          </div>
          <aside className="hidden lg:block hero-panel animate-fade-in-up animate-delay-3" aria-label="Co získáte spoluprací">
            <p className="text-antique-brass text-xs tracking-[0.2em] uppercase font-body mb-8">Digitál, který má řád</p>
            <div className="space-y-6">
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Důvěra</p>
                <p className="text-steel-grey-light text-sm leading-relaxed">Prezentace, která odpovídá kvalitě vaší práce.</p>
              </div>
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Viditelnost</p>
                <p className="text-steel-grey-light text-sm leading-relaxed">Obsah, který má jasný směr a nepůsobí jako výplň.</p>
              </div>
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Čas</p>
                <p className="text-steel-grey-light text-sm leading-relaxed">Systémy, které zjednoduší rutinu místo přidávání práce.</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-14 pt-7 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-sm text-steel-grey-light animate-fade-in-up animate-delay-4">
          <span><span className="text-antique-brass">01.</span> Úvodní konzultace bez závazku</span>
          <span><span className="text-antique-brass">02.</span> Cena a rozsah vždy předem</span>
          <span><span className="text-antique-brass">03.</span> Osobní spolupráce od začátku do konce</span>
        </div>
      </div>
    </section>
  );
}
