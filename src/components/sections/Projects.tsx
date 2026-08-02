import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="prace" className="reveal scroll-mt-16 py-24 md:py-32 bg-paper-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-accent font-medium tracking-wide text-sm mb-3">
            Reference
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 font-semibold">
            Práce, na kterou se dá podívat
          </h2>
          <p className="text-ink/65 text-base leading-relaxed">
            Webové projekty a dlouhodobá spolupráce — vlastní i pro klienty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="bg-card border border-ink/10 rounded-2xl p-8 shadow-card group hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                {p.own && (
                  <span className="text-[11px] tracking-wide text-accent bg-accent-soft/50 border border-accent/20 px-2.5 py-0.5 rounded-full font-medium">
                    Vlastní projekt
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl text-ink mb-3 font-semibold">
                {p.href !== "#" ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    {p.name}
                    <span className="text-accent/60 text-sm" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  p.name
                )}
              </h3>

              <p className="text-ink/60 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
