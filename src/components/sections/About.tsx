import { ABOUT_BIO, ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section className="reveal scroll-mt-16 py-24 md:py-32 blueprint-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Levá */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="dim-node" />
              <span className="dim-line-h w-16" />
              <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange">
                JAKUB
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-6">
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

          {/* Pravá — technické specifikace */}
          <div className="space-y-4">
            {ABOUT_STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 border-b border-grid-blue/15 pb-4">
                <div className="flex items-center gap-1 w-14 shrink-0">
                  <span className="font-mono text-[9px] text-callout/30">├</span>
                  <span className="dim-line-h w-8" />
                </div>
                <span className="font-display text-3xl text-warm-white w-20">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-callout/50">
                  {s.label}
                </span>
              </div>
            ))}

            {/* Spodní kóta */}
            <div className="flex items-center gap-2 pt-2">
              <span className="font-mono text-[9px] text-callout/20">├</span>
              <span className="dim-line-h w-24" />
              <span className="font-mono text-[9px] text-callout/20">┤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
