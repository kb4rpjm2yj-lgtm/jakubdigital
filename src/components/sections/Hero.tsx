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
    <section className="hero-surface min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full py-20 md:py-32">
        {/* Eyebrow — mono, tracking */}
        <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange mb-8 animate-fade-in-up">
          {HERO_EYEBROW}
        </p>

        {/* H1 */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-white leading-[1.05] mb-8 max-w-4xl animate-fade-in-up animate-delay-1">
          {HERO_H1}
        </h1>

        {/* Subtitle */}
        <p className="text-warm-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-12 animate-fade-in-up animate-delay-2">
          {HERO_SUBTITLE}
        </p>

        {/* CTA + kótovaná cena */}
        <div className="flex flex-wrap items-center gap-6 mb-16 animate-fade-in-up animate-delay-3">
          <a
            href="#kontakt"
            className="inline-flex items-center px-6 py-3.5 bg-signal-orange text-white font-mono text-xs tracking-[0.15em] hover:bg-signal-orange/90 transition-colors"
          >
            {HERO_CTA_PRIMARY}
          </a>

          {/* Kótovaná cena */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.15em] text-callout">
              ├──
            </span>
            <span className="font-mono text-sm tracking-[0.1em] text-warm-white/80">
              {HERO_PRICE}
            </span>
            <span className="font-mono text-xs tracking-[0.15em] text-callout">
              ──┤
            </span>
            <span className="font-mono text-[10px] text-callout tracking-[0.12em]">
              KONEČNÁ
            </span>
          </div>
        </div>

        {/* KAPACITA — kótovaný diagram */}
        <div className="font-mono text-xs tracking-[0.12em] text-callout animate-fade-in-up animate-delay-3">
          <div className="mb-1.5">
            KAPACITA / {month.toUpperCase()}
          </div>
          <div className="flex items-center gap-1 text-lg">
            <span className="text-callout">├</span>
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className="flex items-center gap-1">
                <span
                  className={
                    i < occupied
                      ? "text-signal-orange"
                      : "text-callout/40"
                  }
                >
                  ●
                </span>
                {i < total - 1 && (
                  <span className="text-callout/30">─</span>
                )}
              </span>
            ))}
            <span className="text-callout">┤</span>
          </div>
          {/* Popisky pod diagramem */}
          <div className="flex gap-6 mt-1.5 text-[10px]">
            {Array.from({ length: occupied }).map((_, i) => (
              <span key={i} className="text-callout">
                POZ.{i + 1}
              </span>
            ))}
            {free > 0 && (
              <span className="text-signal-orange">VOLNO</span>
            )}
          </div>
          <div className="text-[10px] text-callout/50 mt-1">
            max. {total} zakázky / měsíc
          </div>
        </div>
      </div>
    </section>
  );
}
