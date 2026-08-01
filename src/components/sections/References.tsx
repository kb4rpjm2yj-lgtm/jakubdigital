import { PROJECTS } from "@/data/content";

export default function References() {
  return (
    <section id="reference" className="reveal scroll-mt-16 py-24 md:py-32 bg-warm-ivory bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Vybrané projekty
            </p>
            <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight">
              Řešení, která žijí i po předání.
            </h2>
          </div>
          <a href="#kontakt" className="text-sm text-antique-brass hover:text-antique-brass/80 transition-colors">
            Chci podobně funkční web →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-7 shadow-card-resting card-hover flex flex-col min-h-60"
            >
              <span className="text-antique-brass text-xs tracking-[0.2em] uppercase font-body mb-auto">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-12">
                <h3 className="text-2xl text-ink font-display mb-3 group-hover:text-antique-brass transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-steel-grey-strong mb-4">{project.description}</p>
                <p className="text-sm leading-relaxed text-ink/80 mb-5">
                  <span className="text-antique-brass">Co řešil:</span> {project.solved}
                </p>
                <span className="text-sm text-antique-brass">Otevřít projekt ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
