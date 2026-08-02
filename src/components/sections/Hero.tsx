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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-paper">
      {/* Jemný teplý podtón — místo blueprint mřížky */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 85% 10%, rgba(180,85,45,0.10), transparent), radial-gradient(ellipse 600px 400px at 5% 90%, rgba(180,85,45,0.06), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow — lidský, ne kóta */}
          <p className="text-accent font-medium tracking-wide text-sm mb-6">
            {HERO_EYEBROW}
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] mb-6 font-bold">
            {HERO_H1}
          </h1>

          <p className="text-ink/75 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {HERO_SUBTITLE}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-base font-medium rounded-full hover:bg-accent/90 transition-all shadow-soft"
            >
              {HERO_CTA_PRIMARY}
              <span aria-hidden="true">→</span>
            </a>

            {/* Cena — jednoduše, ne jako kóta */}
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-ink font-semibold">
                {HERO_PRICE}
              </span>
              <span className="text-ink-soft text-sm">konečná cena</span>
            </div>
          </div>

          {/* Kapacita — lidská věta, ne tečky */}
          <div className="mt-14 inline-flex items-center gap-3 bg-card border border-ink/10 rounded-full px-5 py-3 shadow-card">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <p className="text-sm text-ink/80">
              {month.charAt(0).toUpperCase() + month.slice(1)}:{" "}
              {free > 0 ? (
                <>
                  volno ještě{" "}
                  <strong className="text-accent font-semibold">
                    {free} {free === 1 ? "místo" : "místa"}
                  </strong>{" "}
                  ze {total}
                </>
              ) : (
                "obsazeno — ale ozvěte se, domluvíme se"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
