import { ABOUT_BIO, ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section id="kdo-jsem" className="reveal scroll-mt-16 py-24 md:py-32 bg-midnight-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Kdo jsem
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-display leading-tight mb-6">
              Jsem Jakub.
              <br />
              <span className="text-antique-brass">Digitálu rozumím.</span>
            </h2>
            <div className="w-12 h-px bg-antique-brass/40 mb-6" />
            <p className="text-steel-grey-light text-sm leading-relaxed mb-4">
              {ABOUT_BIO}
            </p>
          </div>
          <div className="md:col-span-3 bg-white/5 p-8 md:p-10 rounded-xl border border-white/10">
            <p className="text-antique-brass text-xs tracking-[0.2em] uppercase mb-6 font-body">
              Reference
            </p>
            <blockquote className="mb-8">
              <p className="text-white/90 text-lg font-display leading-relaxed mb-4">
                &bdquo;Potřebovala jsem založit profily na sociálních sítích a
                nastavit systém, který by mi šetřil čas. Jakub to zařídil rychle
                a profesionálně. Přesně to, co jsem hledala.&rdquo;
              </p>
              <footer className="text-steel-grey-light text-sm">
                <span className="text-white">Eva Kaprálová</span>
                &nbsp;&mdash;&nbsp;krajská zastupitelka
              </footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-6 text-sm">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="text-white font-display text-lg">{stat.value}</span>
                  <p className="text-steel-grey-light text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
