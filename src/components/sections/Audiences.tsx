import { AUDIENCES } from "@/data/content";

export default function Audiences() {
  return (
    <section id="pro-koho" className="reveal py-24 md:py-32 bg-warm-ivory bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Pro koho
          </p>
          <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight">
            Každá profese má svá specifika.
            <br />
            <span className="text-steel-grey">Respektuji je.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="flex gap-5 p-6 bg-white rounded-xl shadow-card-resting card-hover group"
            >
              <span className="text-2xl shrink-0 mt-1">{a.icon}</span>
              <div>
                <h3 className="text-lg text-ink font-display mb-2">{a.title}</h3>
                <p className="text-sm text-steel-grey leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
