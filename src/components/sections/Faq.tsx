import { FAQ } from "@/data/content";

export default function Faq() {
  return (
    <section className="reveal py-24 md:py-32 bg-warm-ivory bg-dot-pattern">
      <div className="max-w-3xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight">
            Často kladené otázky
          </h2>
        </div>
        <div className="space-y-0 divide-y divide-antique-brass/10">
          {FAQ.map((item, i) => (
            <details key={i} className="group py-5 open:pb-8">
              <summary className="flex items-center justify-between gap-6 cursor-pointer text-ink font-display text-lg list-none">
                {item.q}
                <span className="text-antique-brass text-2xl font-light leading-none shrink-0 group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <div>
                  <p className="pt-4 text-steel-grey text-sm leading-relaxed pr-8">
                    {item.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
