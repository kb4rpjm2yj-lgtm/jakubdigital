import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="prace" className="reveal scroll-mt-16 py-24 md:py-32 bg-graphite">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section marker */}
        <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange mb-2">
          POZ. 04—07
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-4">
          Práce
        </h2>
        <p className="font-mono text-[10px] tracking-[0.15em] text-callout/60 mb-12">
          │ JEDNOTLIVÉ POLOžKY ─────────────────
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-grid-blue/20">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="bg-graphite p-8 group">
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-callout/50">
                  POZ. 0{i + 4}
                </span>
                {p.own && (
                  <span className="font-mono text-[9px] tracking-[0.15em] text-signal-orange/60 border border-signal-orange/20 px-2 py-0.5">
                    VLASTNÍ
                  </span>
                )}
              </div>

              {/* Name + link */}
              <h3 className="font-display text-xl text-warm-white mb-3">
                {p.href !== "#" ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal-orange transition-colors"
                  >
                    {p.name} ↗
                  </a>
                ) : (
                  p.name
                )}
              </h3>

              {/* Description */}
              <p className="text-warm-white/60 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
