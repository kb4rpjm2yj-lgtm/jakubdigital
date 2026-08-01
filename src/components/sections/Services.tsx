import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="sluzby" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-12" />
          <p className="font-mono text-xs tracking-[0.18em] text-callout/65 font-medium">
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
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-mono text-xs tracking-[0.15em] text-signal-orange/65 font-medium">
                    POZ. 0{i + 1}
                  </span>
                  <span className="dim-line-h w-6" />
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
                      <span className="text-signal-orange mt-1 shrink-0 font-mono text-xs">
                        ──
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs text-callout/45">├</span>
                    <span className="dim-line-h w-3" />
                    <span className="dim-node" />
                    <span className="font-display text-2xl text-ink ml-1 font-semibold">
                      {s.price}
                    </span>
                    <span className="dim-node" />
                    <span className="dim-line-h w-3" />
                    <span className="font-mono text-xs text-callout/45">┤</span>
                  </div>
                  <p className="font-mono text-xs tracking-[0.1em] text-callout/55 ml-1 font-medium">
                    {s.timeframe}
                  </p>
                </div>

                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-signal-orange group-hover:text-ink/80 transition-colors font-medium"
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
