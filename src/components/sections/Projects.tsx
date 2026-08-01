import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="prace" className="reveal scroll-mt-16 py-24 md:py-32 blueprint-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Technické záhlaví */}
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-16" />
          <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange">
            POZ. 04—0{3 + PROJECTS.length}
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-3">
          Práce
        </h2>
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[9px] text-callout/30">│</span>
          <span className="dim-line-h w-48" />
          <span className="font-mono text-[10px] tracking-[0.15em] text-callout/40">
            JEDNOTLIVÉ POLOŽKY
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-0.5 bg-grid-blue/10">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="bg-graphite p-8 group relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(30,58,95,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(30,58,95,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "8px 8px",
              }}
            >
              {/* Kóta vlevo nahoře */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-callout/40">
                  POZ. 0{i + 4}
                </span>
                <span className="dim-line-h w-6" />
                {p.own && (
                  <span className="font-mono text-[8px] tracking-[0.15em] text-signal-orange/60 border border-signal-orange/20 px-2 py-0.5">
                    VLASTNÍ
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl text-warm-white mb-3">
                {p.href !== "#" ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    {p.name}
                    <span className="text-signal-orange/50 text-sm">↗</span>
                  </a>
                ) : (
                  p.name
                )}
              </h3>

              <p className="text-warm-white/55 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
