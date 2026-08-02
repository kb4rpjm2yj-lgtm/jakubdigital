import { SERVICES } from "@/data/content";

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
              <h3 className="font-display text-2xl text-ink mb-3 font-semibold">
                {s.title}
              </h3>

              <p className="text-ink/65 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-ink/75 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-ink/10 space-y-2">
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
