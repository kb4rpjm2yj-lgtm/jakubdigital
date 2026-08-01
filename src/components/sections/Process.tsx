import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="jak-pracuji" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Jak pracuji
          </p>
          <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight">
            Jasný proces od prvního kontaktu
            <br />
            <span className="text-steel-grey">po předání hotového řešení.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-antique-brass/20" />
          {PROCESS.map((step) => (
            <div key={step.step} className="relative">
              <span className="text-4xl md:text-5xl text-antique-brass/20 font-display font-bold block mb-4">
                {step.step}
              </span>
              <h3 className="text-lg text-ink font-display mb-3">{step.title}</h3>
              <p className="text-sm text-steel-grey leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
