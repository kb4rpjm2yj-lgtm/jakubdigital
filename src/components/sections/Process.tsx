import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="proces" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-16" />
          <p className="font-mono text-[11px] tracking-[0.25em] text-callout/60">
            POZ. 08—{7 + PROCESS.length}
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Jak to jde
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="group relative">
              {/* Kóta */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-sm text-signal-orange">{p.step}</span>
                <span className="dim-line-h w-8" />
              </div>
              <h3 className="font-display text-lg text-ink mb-2">
                {p.title}
              </h3>
              <p className="text-ink/55 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
