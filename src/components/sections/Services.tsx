import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="sluzby" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Monospace section marker */}
        <p className="font-mono text-[11px] tracking-[0.25em] text-callout mb-4">
          POZ. 01–0{SERVICES.length}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="group border border-ink/10 bg-white p-8 flex flex-col card-hover"
            >
              {/* Position number */}
              <span className="font-mono text-[10px] tracking-[0.2em] text-callout/50 mb-6">
                POZ. 0{i + 1}
              </span>

              <h3 className="font-display text-2xl text-ink mb-3">
                {s.title}
              </h3>

              <p className="text-ink/60 text-sm leading-relaxed mb-6 flex-1">
                {s.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 text-sm text-ink/70 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-signal-orange mt-0.5 shrink-0">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Kótovaná cena */}
              <div className="border-t border-ink/10 pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-callout">├─</span>
                  <span className="font-display text-2xl text-ink">
                    {s.price}
                  </span>
                  <span className="font-mono text-[10px] text-callout">─┤</span>
                </div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-callout/60">
                  {s.timeframe}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className="mt-6 inline-flex items-center font-mono text-[11px] tracking-[0.15em] text-signal-orange hover:text-signal-orange/70 transition-colors"
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
