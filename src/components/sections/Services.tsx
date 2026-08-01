import { SERVICES } from "@/data/content";

export default function Services() {
  const cards = SERVICES.slice(0, 3);
  const bundle = SERVICES[3];

  return (
    <section id="sluzby" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Služby
          </p>
          <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight">
            Digitál, který pracuje
            <br />
            <span className="text-steel-grey">pro vaši pověst i váš čas.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((service, i) => (
            <div
              key={service.title}
              className="group bg-warm-ivory p-8 flex flex-col rounded-xl shadow-card-resting card-hover hover:bg-white"
            >
              <span className="text-steel-grey text-xs tracking-[0.2em] uppercase mb-2 font-body">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl text-ink font-display mb-3">
                {service.title}
              </h3>
              <p className="text-steel-grey text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-ink/80 flex items-start gap-3">
                    <span className="text-antique-brass mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-antique-brass/10">
                <p className="text-2xl text-antique-brass font-display mb-1">
                  {service.price}
                </p>
                <p className="text-xs text-steel-grey mb-4">{service.timeframe}</p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm text-antique-brass hover:text-antique-brass/80 transition-colors duration-300"
                >
                  {service.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
        {bundle && (
          <div className="mt-10 rounded-xl bg-midnight-teal p-8 md:p-12 grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-start relative overflow-hidden">
            <div>
              <p className="text-antique-brass text-xs tracking-[0.2em] uppercase font-body mb-3">
                Zvýrazněná varianta
              </p>
              <h3 className="text-2xl md:text-3xl text-white font-display mb-4">
                {bundle.title}
              </h3>
              <p className="text-steel-grey text-sm leading-relaxed mb-6">
                {bundle.desc}
              </p>
              <ul className="space-y-2.5">
                {bundle.features.map((f) => (
                  <li key={f} className="text-sm text-white/80 flex items-start gap-3">
                    <span className="text-antique-brass mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-10 md:border-l md:border-white/10">
              <p className="text-3xl text-antique-brass font-display mb-1">
                {bundle.price}
              </p>
              <p className="text-xs text-steel-grey mb-8">{bundle.timeframe}</p>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 transition-all duration-300"
              >
                {bundle.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
