import { FAQ } from "@/data/content";

export default function Faq() {
  return (
    <section id="faq" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-[11px] tracking-[0.25em] text-callout mb-2">
          POZ. 12—{12 + FAQ.length - 1}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Otázky
        </h2>

        <div className="space-y-px">
          {FAQ.map((item, i) => (
            <details key={i} className="group border border-ink/10 bg-white">
              <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-4 hover:bg-ink/[0.02] transition-colors">
                <span className="font-body text-sm text-ink pr-4">
                  {item.q}
                </span>
                <span className="font-mono text-signal-orange text-sm shrink-0 group-open:hidden">
                  +
                </span>
                <span className="font-mono text-signal-orange text-sm shrink-0 hidden group-open:inline">
                  −
                </span>
              </summary>
              <div className="faq-answer">
                <div className="px-6 pb-5 text-ink/60 text-sm leading-relaxed">
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
