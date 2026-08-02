import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="proces" className="reveal scroll-mt-16 py-24 md:py-32 bg-paper-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-accent font-medium tracking-wide text-sm mb-3">
            Jak to probíhá
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Od prvního hovoru po předání
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="bg-card border border-ink/10 rounded-2xl p-6 shadow-card"
            >
              <p className="font-display text-4xl text-accent/30 mb-3 font-semibold">
                {p.step}
              </p>
              <h3 className="font-display text-lg text-ink mb-2 font-semibold">
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
