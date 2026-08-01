import {
  HERO_EYEBROW,
  HERO_H1,
  HERO_SUBTITLE,
  HERO_CTA_PRIMARY,
  HERO_PRICE,
  CAPACITY,
} from "@/data/content";

export default function Hero() {
  const { total, occupied, month } = CAPACITY;
  const free = total - occupied;

  return (
    <section className="hero-surface min-h-screen flex items-center pt-16 overflow-hidden relative">
      {/* Generované blueprint pozadí */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(/hero-blueprint.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Dekorativní kóty */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-12 md:left-24 top-1/3 bottom-1/4">
          <div className="dim-line-v h-full relative">
            <div className="dim-node absolute -top-1 -left-[3px]" />
            <div className="dim-node absolute -bottom-1 -left-[3px]" />
          </div>
          <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[9px] tracking-[0.2em] text-callout/20 whitespace-nowrap">
            VÝŠKA NENÍ PODSTATNÁ
          </span>
        </div>
        <div className="absolute top-16 md:top-24 left-1/4 right-12 md:right-24">
          <div className="dim-line-h w-full relative">
            <div className="dim-node absolute -top-[3px] -left-1" />
            <div className="dim-node absolute -top-[3px] -right-1" />
          </div>
        </div>
      </div>

      {/* Hlavní obsah */}
      <div className="max-w-6xl mx-auto px-6 w-full py-20 md:py-32 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
          <span className="dim-line-h w-12" />
          <span className="dim-node" />
          <p className="font-mono text-[11px] tracking-[0.28em] text-signal-orange">
            {HERO_EYEBROW}
          </p>
        </div>

        {/* H1 */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-white leading-[1.02] mb-8 max-w-5xl animate-fade-in-up animate-delay-1">
          {HERO_H1}
        </h1>

        {/* Subtitle + kóta */}
        <div className="flex items-start gap-6 mb-10 animate-fade-in-up animate-delay-2">
          <div className="flex flex-col items-center gap-1 pt-1">
            <span className="dim-node" />
            <span className="dim-line-v h-12" />
          </div>
          <p className="text-warm-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            {HERO_SUBTITLE}
          </p>
        </div>

        {/* CTA + cena */}
        <div className="flex flex-wrap items-center gap-8 mb-20 animate-fade-in-up animate-delay-3">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-signal-orange text-white font-mono text-xs tracking-[0.15em] hover:bg-signal-orange/90 transition-all"
          >
            <span>{HERO_CTA_PRIMARY}</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <div className="flex items-center gap-0">
            <span className="font-mono text-[10px] text-callout/50">├</span>
            <span className="dim-line-h w-6" />
            <span className="dim-node mx-1" />
            <span className="font-mono text-base tracking-[0.12em] text-warm-white/80">
              {HERO_PRICE}
            </span>
            <span className="dim-node mx-1" />
            <span className="dim-line-h w-6" />
            <span className="font-mono text-[10px] text-callout/50">┤</span>
            <span className="ml-3 font-mono text-[9px] tracking-[0.2em] text-signal-orange/70">
              KONEČNÁ
            </span>
          </div>
        </div>

        {/* KAPACITA */}
        <div className="font-mono text-xs animate-fade-in-up animate-delay-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="dim-node" />
            <span className="text-[10px] tracking-[0.2em] text-callout/60">
              KAPACITA / {month.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-0 text-2xl tracking-[0.3em] ml-1">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className="flex items-center gap-0">
                {i > 0 && <span className="text-callout/20 mx-0.5">─</span>}
                <span
                  className={
                    i < occupied
                      ? "text-signal-orange capacity-active"
                      : "text-callout/25"
                  }
                >
                  ●
                </span>
              </span>
            ))}
          </div>
          <div className="flex gap-6 mt-2 ml-1 text-[9px] tracking-[0.18em]">
            {Array.from({ length: occupied }).map((_, i) => (
              <span key={i} className="text-callout/50">
                POZ.{i + 1}
              </span>
            ))}
            {free > 0 && (
              <span className="text-signal-orange">VOLNO</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[9px] text-callout/30">├</span>
            <span className="dim-line-h w-32" />
            <span className="text-[9px] text-callout/30">┤</span>
            <span className="text-[9px] text-callout/40 tracking-[0.12em]">
              max. {total} zakázky / měsíc
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
