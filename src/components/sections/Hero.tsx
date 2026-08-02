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
      {/* Jemný teplý podtón */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 85% 10%, rgba(180,85,45,0.10), transparent), radial-gradient(ellipse 600px 400px at 5% 90%, rgba(180,85,45,0.06), transparent)",
        }}
      />

      {/* Vizuální kotva — jemná ilustrace vpravo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[42%] max-w-[640px] z-0 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 520" fill="none" className="w-full h-auto" aria-hidden="true">
          {/* teplé kruhy */}
          <circle cx="300" cy="260" r="200" stroke="#B4552D" strokeOpacity="0.14" strokeWidth="1.5" />
          <circle cx="300" cy="260" r="150" stroke="#B4552D" strokeOpacity="0.10" strokeWidth="1.5" />
          <circle cx="300" cy="260" r="100" stroke="#B4552D" strokeOpacity="0.07" strokeWidth="1.5" />
          {/* „vizitka" */}
          <rect x="150" y="150" width="300" height="220" rx="20" fill="#FFFFFF" stroke="#B4552D" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="205" cy="205" r="18" fill="#E8D5C7" />
          <text x="205" y="211" textAnchor="middle" fill="#B4552D" fontSize="18" fontFamily="Georgia, serif" fontWeight="600">J</text>
          <rect x="235" y="193" width="150" height="10" rx="5" fill="#2E2822" fillOpacity="0.75" />
          <rect x="235" y="212" width="100" height="8" rx="4" fill="#2E2822" fillOpacity="0.35" />
          <rect x="185" y="255" width="230" height="7" rx="3.5" fill="#2E2822" fillOpacity="0.18" />
          <rect x="185" y="275" width="200" height="7" rx="3.5" fill="#2E2822" fillOpacity="0.18" />
          <rect x="185" y="295" width="215" height="7" rx="3.5" fill="#2E2822" fillOpacity="0.18" />
          <rect x="185" y="325" width="120" height="30" rx="15" fill="#B4552D" />
          {/* tečky okolo */}
          <circle cx="90" cy="120" r="4" fill="#B4552D" fillOpacity="0.25" />
          <circle cx="510" cy="100" r="5" fill="#B4552D" fillOpacity="0.18" />
          <circle cx="520" cy="430" r="3.5" fill="#B4552D" fillOpacity="0.22" />
          <circle cx="80" cy="420" r="6" fill="#B4552D" fillOpacity="0.12" />
          <circle cx="140" cy="60" r="3" fill="#B4552D" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-wide text-sm mb-6">
            {HERO_EYEBROW}
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] mb-6 font-bold">
            {HERO_H1}
          </h1>

          <p className="text-ink/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
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

            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-ink font-semibold">
                {HERO_PRICE}
              </span>
              <span className="inline-flex items-center bg-card border border-ink/10 rounded-full px-3 py-1 text-xs text-ink-soft font-medium shadow-card">
                konečná cena
              </span>
            </div>
          </div>

          {/* Kapacita — výraznější badge */}
          <div className="mt-14 inline-flex items-center gap-3 bg-card border border-accent/25 rounded-full px-5 py-3 shadow-card">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <p className="text-sm text-ink/85">
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
