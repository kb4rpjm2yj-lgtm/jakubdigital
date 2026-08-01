import { ABOUT_BIO, ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section className="reveal scroll-mt-16 py-24 md:py-32 blueprint-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="dim-node" />
              <span className="dim-line-h w-12" />
              <p className="font-mono text-xs tracking-[0.18em] text-signal-orange font-medium">
                JAKUB
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-6 font-semibold">
              Člověk za tím
            </h2>

            <div className="space-y-4 text-warm-white/65 text-sm leading-relaxed">
              {ABOUT_BIO.split(". ").map((s, i) =>
                s ? (
                  <p key={i}>
                    {s.trim().endsWith(".") ? s.trim() : s.trim() + "."}
                  </p>
                ) : null
              )}
            </div>
          </div>

          <div className="space-y-4">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4 border-b border-grid-blue/15 pb-4">
                <div className="flex items-center gap-1 w-12 shrink-0">
                  <span className="font-mono text-xs text-callout/40">├</span>
                  <span className="dim-line-h w-6" />
                </div>
                <span className="font-display text-3xl text-warm-white w-20 font-semibold">
                  {s.value}
                </span>
                <span className="font-mono text-xs tracking-[0.1em] text-callout/60 font-medium">
                  {s.label}
                </span>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-2">
              <span className="font-mono text-xs text-callout/25">├</span>
              <span className="dim-line-h w-20" />
              <span className="font-mono text-xs text-callout/25">┤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
