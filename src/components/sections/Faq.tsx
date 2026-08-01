import { FAQ } from "@/data/content";

export default function Faq() {
  return (
    <section id="faq" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="dim-node" />
          <span className="dim-line-h w-12" />
          <p className="font-mono text-xs tracking-[0.18em] text-callout/65 font-medium">
            POZ. 12—{12 + FAQ.length - 1}
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12 font-semibold">
          Otázky
        </h2>

        <div className="space-y-px">
          {FAQ.map((item, i) => (
            <details key={i} className="group border border-ink/10 bg-white">
              <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-4 hover:bg-ink/[0.02] transition-colors">
                <span className="font-body text-sm text-ink/85 pr-4">
                  {item.q}
                </span>
                <span className="font-mono text-signal-orange text-base shrink-0 group-open:hidden font-medium">
                  +
                </span>
                <span className="font-mono text-signal-orange text-base shrink-0 hidden group-open:inline font-medium">
                  −
                </span>
              </summary>
              <div className="faq-answer">
                <div className="px-6 pb-5 text-ink/65 text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
