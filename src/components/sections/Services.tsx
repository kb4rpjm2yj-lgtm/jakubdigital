import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="sluzby" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Technické záhlaví */}
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-16" />
          <p className="font-mono text-[11px] tracking-[0.25em] text-callout/60">
            POZ. 01–0{SERVICES.length}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="blueprint-card group flex flex-col transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-full">
                {/* Číslo pozice */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-signal-orange/60">
                    POZ. 0{i + 1}
                  </span>
                  <span className="dim-line-h w-8" />
                </div>

                <h3 className="font-display text-2xl text-ink mb-3">
                  {s.title}
                </h3>

                <p className="text-ink/60 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 text-sm text-ink/70 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-signal-orange mt-1 shrink-0 font-mono text-[10px]">
                        ──
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Kótovaná cena */}
                <div className="pt-5 space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[10px] text-callout/40">├</span>
                    <span className="dim-line-h w-4" />
                    <span className="dim-node" />
                    <span className="font-display text-2xl text-ink ml-1">
                      {s.price}
                    </span>
                    <span className="dim-node" />
                    <span className="dim-line-h w-4" />
                    <span className="font-mono text-[10px] text-callout/40">┤</span>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-callout/50 ml-1">
                    {s.timeframe}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-signal-orange group-hover:text-ink/80 transition-colors"
                >
                  <span className="dim-node group-hover:bg-signal-orange transition-colors" />
                  <span>{s.cta} →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
