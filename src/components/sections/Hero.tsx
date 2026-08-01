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
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(/hero-blueprint.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Wireframe ilustrace — vpravo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[46%] max-w-[760px] h-[70%] z-0 pointer-events-none opacity-75 mix-blend-screen hidden lg:block">
        <img
          src="/hero-devices.png"
          alt=""
          className="w-full h-full object-contain object-right"
          aria-hidden="true"
        />
      </div>

      {/* Dekorativní kóty */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-8 md:left-16 top-1/3 bottom-1/4">
          <div className="dim-line-v h-full relative">
            <div className="dim-node absolute -top-1 -left-[3px]" />
            <div className="dim-node absolute -bottom-1 -left-[3px]" />
          </div>
        </div>
      </div>

      {/* Hlavní obsah */}
      <div className="max-w-6xl mx-auto px-6 w-full py-20 md:py-32 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
          <span className="dim-line-h w-10" />
          <span className="dim-node" />
          <p className="font-mono text-xs tracking-[0.2em] text-signal-orange">
            {HERO_EYEBROW}
          </p>
        </div>

        {/* H1 — tučný Fraunces */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-warm-white leading-[1.02] mb-8 max-w-3xl font-bold animate-fade-in-up animate-delay-1">
          {HERO_H1}
        </h1>

        {/* Subtitle */}
        <div className="flex items-start gap-5 mb-10 animate-fade-in-up animate-delay-2">
          <div className="flex flex-col items-center gap-1 pt-1.5">
            <span className="dim-node" />
            <span className="dim-line-v h-10" />
          </div>
          <p className="text-warm-white/90 text-base md:text-lg max-w-xl leading-relaxed font-medium">
            {HERO_SUBTITLE}
          </p>
        </div>

        {/* CTA + cena */}
        <div className="flex flex-wrap items-center gap-8 mb-20 animate-fade-in-up animate-delay-3">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-signal-orange text-white font-mono text-sm tracking-[0.12em] font-medium hover:bg-signal-orange/90 transition-all"
          >
            <span>{HERO_CTA_PRIMARY}</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          {/* Technická kóta ceny */}
          <div className="flex items-center gap-0">
            <span className="font-mono text-xs text-warm-white/55">├</span>
            <span className="dim-line-h w-5" />
            <span className="dim-node mx-0.5" />
            <span className="font-mono text-lg tracking-[0.1em] text-warm-white font-medium">
              {HERO_PRICE}
            </span>
            <span className="dim-node mx-0.5" />
            <span className="dim-line-h w-5" />
            <span className="font-mono text-xs text-warm-white/55">┤</span>
            <span className="ml-3 font-mono text-xs tracking-[0.15em] text-signal-orange/80 font-medium">
              KONEČNÁ
            </span>
          </div>
        </div>

        {/* KAPACITA */}
        <div className="font-mono text-xs animate-fade-in-up animate-delay-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="dim-node" />
            <span className="text-xs tracking-[0.15em] text-warm-white/65 font-medium">
              KAPACITA / {month.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-0 text-2xl tracking-[0.25em] ml-0.5">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className="flex items-center gap-0">
                {i > 0 && <span className="text-warm-white/25 mx-0.5">─</span>}
                <span
                  className={
                    i < occupied
                      ? "text-signal-orange capacity-active"
                      : "text-warm-white/35"
                  }
                >
                  ●
                </span>
              </span>
            ))}
          </div>
          <div className="flex gap-5 mt-2 ml-0.5 text-xs tracking-[0.12em]">
            {Array.from({ length: occupied }).map((_, i) => (
              <span key={i} className="text-warm-white/60">
                POZ.{i + 1}
              </span>
            ))}
            {free > 0 && (
              <span className="text-signal-orange font-medium">VOLNO</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2.5">
            <span className="text-xs text-warm-white/50">├</span>
            <span className="dim-line-h w-28" />
            <span className="text-xs text-warm-white/50">┤</span>
            <span className="text-xs text-warm-white/55 tracking-[0.1em]">
              max. {total} zakázky / měsíc
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
