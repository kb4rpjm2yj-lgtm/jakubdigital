import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="prace" className="reveal scroll-mt-16 py-24 md:py-32 blueprint-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-12" />
          <p className="font-mono text-xs tracking-[0.18em] text-signal-orange font-medium">
            POZ. 04—0{3 + PROJECTS.length}
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-3 font-semibold">
          Práce
        </h2>
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-xs text-callout/40">│</span>
          <span className="dim-line-h w-40" />
          <span className="font-mono text-xs tracking-[0.12em] text-callout/50 font-medium">
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
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs tracking-[0.15em] text-callout/50 font-medium">
                  POZ. 0{i + 4}
                </span>
                <span className="dim-line-h w-5" />
                {p.own && (
                  <span className="font-mono text-[10px] tracking-[0.12em] text-signal-orange/65 border border-signal-orange/25 px-2 py-0.5 font-medium">
                    VLASTNÍ
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl text-warm-white mb-3 font-semibold">
                {p.href !== "#" ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    {p.name}
                    <span className="text-signal-orange/60 text-sm">↗</span>
                  </a>
                ) : (
                  p.name
                )}
              </h3>

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
