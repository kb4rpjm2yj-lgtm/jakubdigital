import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="proces" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.25em] text-callout mb-2">
          POZ. 08—11
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Jak to jde
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((p) => (
            <div key={p.step} className="group">
              <span className="font-mono text-xl text-signal-orange block mb-3">
                {p.step}
              </span>
              <h3 className="font-display text-lg text-ink mb-2">
                {p.title}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
