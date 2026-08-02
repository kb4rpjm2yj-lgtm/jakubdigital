import { ABOUT_BIO, ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section className="reveal scroll-mt-16 py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-accent font-medium tracking-wide text-sm mb-3">
              Kdo jsem
            </p>

            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 font-semibold">
              Člověk, ne agentura
            </h2>

            <div className="space-y-4 text-ink/70 text-base leading-relaxed">
              {ABOUT_BIO.split(". ").map((s, i) =>
                s ? (
                  <p key={i}>
                    {s.trim().endsWith(".") ? s.trim() : s.trim() + "."}
                  </p>
                ) : null
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-ink/10 rounded-2xl p-6 shadow-card"
              >
                <p className="font-display text-3xl text-accent mb-1 font-semibold">
                  {s.value}
                </p>
                <p className="text-sm text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
