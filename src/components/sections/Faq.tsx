import { FAQ } from "@/data/content";

export default function Faq() {
  return (
    <section id="faq" className="reveal scroll-mt-16 py-24 md:py-32 bg-paper">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-accent font-medium tracking-wide text-sm mb-3 text-center">
          Časté otázky
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12 font-semibold text-center">
          Co vás zajímá
        </h2>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group bg-card border border-ink/10 rounded-2xl overflow-hidden shadow-card"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-4 hover:bg-accent-soft/30 transition-colors">
                <span className="font-body text-sm text-ink/85 pr-4 font-medium">
                  {item.q}
                </span>
                <span
                  className="text-accent text-xl shrink-0 transition-transform duration-300 group-open:rotate-45 font-medium"
                  aria-hidden="true"
                >
                  +
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
