import { SERVICES } from "@/data/content";

const ICONS: Record<string, React.ReactNode> = {
  web: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  obsah: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h10" />
      <circle cx="18" cy="18" r="3" />
      <path d="M18 16.5v1.5l1 1" />
    </svg>
  ),
  provoz: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="7.5" opacity="0.35" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="sluzby" className="reveal scroll-mt-16 py-24 md:py-32 bg-paper-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-accent font-medium tracking-wide text-sm mb-3">
            Co dělám
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Služby, které spolu sedí
          </h2>
          <p className="text-ink/65 text-base leading-relaxed">
            Web je začátek. Většina lidí ale potřebuje víc — a já se o to
            postarám dál, ať to nemusíte řešit jinde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="blueprint-card group flex flex-col p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-soft/60 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {ICONS[s.id]}
              </div>

              <h3 className="font-display text-2xl text-ink mb-3 font-semibold">
                {s.title}
              </h3>

              <p className="text-ink/65 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-ink/75 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-ink/10 space-y-1.5">
                <p className="font-display text-2xl text-ink font-semibold">
                  {s.price}
                </p>
                <p className="text-sm text-ink-soft">{s.timeframe}</p>
              </div>

              <a
                href="#kontakt"
                className="mt-5 inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-ink/80 transition-colors"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
