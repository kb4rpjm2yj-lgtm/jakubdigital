import { ABOUT_BIO, ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section id="o-mne" className="reveal scroll-mt-16 py-24 md:py-32 bg-graphite">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange mb-4">
              JAKUB
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-6">
              Člověk za tím
            </h2>
            <div className="space-y-4 text-warm-white/70 text-sm leading-relaxed">
              {ABOUT_BIO.split(". ").map((s, i) =>
                s ? (
                  <p key={i}>{s.trim().endsWith(".") ? s.trim() : s.trim() + "."}</p>
                ) : null
              )}
            </div>
          </div>

          {/* Stats — kótované */}
          <div className="space-y-6">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 border-b border-grid-blue/20 pb-4">
                <span className="font-mono text-xs text-callout w-12 shrink-0">
                  ├──
                </span>
                <span className="font-display text-3xl text-warm-white">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-callout/60">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
