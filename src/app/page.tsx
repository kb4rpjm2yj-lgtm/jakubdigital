import SparkParticles from "@/components/SparkParticles";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    title: "Web, který buduje důvěru",
    desc: "Promyšlená prezentace, která jasně říká, proč si vybrat právě vás. Od struktury a textů po spuštění — bez přehazování mezi grafikem, copywriterem a vývojářem.",
    price: "od 29 900 Kč",
    timeframe: "obvykle 2–4 týdny",
    features: [
      "Strategie, struktura a texty na míru",
      "Design pro mobil i počítač",
      "Technické SEO a měření poptávek",
      "Kontaktní formulář a jasné výzvy k akci",
      "Předání, zaškolení a následná podpora",
    ],
  },
  {
    title: "Obsah, který drží směr",
    desc: "Vaše komunikace bude rozpoznatelná, věcná a pravidelná. Z vašich zkušeností vytvořím obsah, který podporuje reputaci a otevírá správné rozhovory.",
    price: "od 7 900 Kč / měsíc",
    timeframe: "minimálně na 3 měsíce",
    features: [
      "Audit a nastavení komunikačního směru",
      "Měsíční obsahový plán",
      "Texty a grafické podklady pro příspěvky",
      "Publikace na vybraných kanálech",
      "Měsíční vyhodnocení a další doporučení",
    ],
  },
  {
    title: "Automatizace, která vrací čas",
    desc: "Nastavím malé, užitečné systémy pro dotazy, schůzky a přehledy. Ne technologii pro technologii — jen věci, které vám každý týden reálně ušetří práci.",
    price: "od 14 900 Kč",
    timeframe: "podle rozsahu řešení",
    features: [
      "Mapa míst, kde zbytečně ztrácíte čas",
      "Automatické odpovědi a třídění dotazů",
      "Rezervace, potvrzení a připomínky",
      "Přehledy, které máte po ruce",
      "Návazná podpora bez závislosti na agentuře",
    ],
  },
];

const AUDIENCES = [
  {
    title: "Právní a poradenské služby",
    desc: "Důvěra se rozhoduje dřív než při prvním hovoru. Web a komunikaci postavím tak, aby odpovídaly vaší odbornosti, diskrétnosti a úrovni služby.",
    icon: "⚖️",
  },
  {
    title: "Reality a finance",
    desc: "Poptávka nesmí zapadnout a značka musí působit jistě. Pomůžu vám s prezentací, obsahem i drobnými automatizacemi kolem klientské komunikace.",
    icon: "🏠",
  },
  {
    title: "Veřejné osobnosti",
    desc: "Když je každý výstup vidět, záleží na tónu i systému. Nastavím digitální prezentaci a obsah tak, abyste měli klid, přehled a kontrolu.",
    icon: "🏛️",
  },
  {
    title: "Menší odborné firmy",
    desc: "Potřebujete, aby digitál pracoval, i když jste s klienty. Vytvořím jasnou online prezentaci a procesy, které vás nezahltí další administrativou.",
    icon: "💼",
  },
];

const PROJECTS = [
  {
    name: "Eva Kaprálová",
    type: "Web a digitální komunikace",
    href: "https://evakapralova.cz",
    description: "Osobní prezentace, obsah a dlouhodobá digitální podpora.",
  },
  {
    name: "liberec.online",
    type: "Občanská platforma",
    href: "https://liberec.online",
    description: "Webová platforma, která dává lidem jednoduchý prostor upozornit na místní problémy.",
  },
  {
    name: "AlphaCreator",
    type: "Autorský digitální projekt",
    href: "https://alphacreator.cz",
    description: "Vlastní online projekt propojující obsah, technologii a srozumitelnou prezentaci.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Konzultace zdarma a nezávazně",
    desc: "30 minut osobně nebo online. Povíte mi o sobě a své práci. Já řeknu, kde vidím prostor pro zlepšení, a navrhnu řešení.",
  },
  {
    step: "02",
    title: "Návrh s konkrétní cenou",
    desc: "Do 2 dnů vám pošlu návrh s přesnou cenou a termínem. Nic jinde, nic víc. Žádné skryté náklady.",
  },
  {
    step: "03",
    title: "Realizace bez starostí",
    desc: "Postarám se o tvorbu webu, nastavení služeb a testování. Každý krok vám dám vědět, ať máte přehled.",
  },
  {
    step: "04",
    title: "Předání a další podpora",
    desc: "Ukážu vám, jak spravovat to nejdůležitější (zbytek za vás budu řešit já). A pak jsem vždycky k dispozici.",
  },
];

const FAQ = [
  {
    q: "Musím rozumět technologiím?",
    a: "Vůbec ne. Já se starám o technickou stránku, vy se staráte o svou práci. Všechno, co na webu a sociálních sítích vidíte, za vás nastavím já. Vám stačí občas krátce zkontrolovat a říct, co se vám líbí a co ne. Technický žargon u mě neuslyšíte — vysvětlím vše lidsky.",
  },
  {
    q: "Kolik času mi spolupráce zabere?",
    a: "Minimum. Po prvotním nastavení funguje většina věcí sama. U webu: schválíte návrh, pak se jen podíváte na výsledek. U sociálních sítí: jednou měsíčně projdete obsah, který jsem připravil. U automatických procesů: jednou za čas zkontrolujete přehledy. Moje služba je postavená na tom, abych vám čas šetřil, ne bral.",
  },
  {
    q: "Čím se lišíte od agentury?",
    a: "Jsem jeden člověk. U agentury si nikdy nejste jistí, kdo právě řeší váš projekt — account manager se může změnit, programátor taky. Já jsem tu pro vás osobně, česky a dlouhodobě. Zvednu telefon, když potřebujete. A za svou práci si stojím.",
  },
  {
    q: "Co když nebudu spokojený?",
    a: "První konzultace je vždy nezávazná — za nic neplatíte, nic neriskujete. Pokud po ní zjistíte, že to není pro vás, je to v pořádku. Když se rozhodnete spolupracovat, a časem něco nebude fungovat podle představ, společně to napravíme. Stavím na dlouhodobé spolupráci, ne na jednorázových zakázkách.",
  },
  {
    q: "Mám starý web, který potřebuji předělat. Zvládnete to?",
    a: "Ano. Podívám se na stávající web, udělám analýzu a řeknu vám: co funguje a co ne, co má smysl zachovat a co je lépe předělat. Pokud chcete, můžeme obsah ze starého webu přesunout do nového. Dostanete konkrétní návrh, cenu a termín.",
  },
  {
    q: "Mohu služby kombinovat?",
    a: "Ano, právě v kombinaci je největší síla. Web + sociální sítě + chytré procesy se doplňují a fungují jako jeden systém, který se o vás stará nepřetržitě. A když si objednáte více služeb najednou, domluvíme se na výhodnějších podmínkách.",
  },
  {
    q: "Jak probíhá první konzultace?",
    a: "Domluvíme se na 30 minut — buď osobně u kávy, nebo přes videohovor. Povíte mi o své práci, cílech a tom, co vás trápí. Já řeknu, kde vidím prostor pro zlepšení, a navrhnu řešení. K ničemu se nezavazujete.",
  },
  {
    q: "Jste dostupný i po dokončení webu?",
    a: "Samozřejmě. Po předání webu mi můžete kdykoliv napsat nebo zavolat. Potřebujete něco změnit? Doplníme. Něco nefunguje? Opravím. Nejde o jednorázovou službu, ale o dlouhodobou spolupráci.",
  },
];

function Hero() {
  return (
    <section className="hero-surface relative min-h-screen bg-midnight-teal flex items-center overflow-hidden">
      <SparkParticles />
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-28 md:py-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-6 font-body animate-fade-in-up">
              Digitální partner pro profesionály
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display leading-[1.1] mb-8 animate-fade-in-up animate-delay-1">
              Vaše odbornost
              <br />
              <span className="text-antique-brass">si zaslouží být vidět.</span>
            </h1>
            <p className="text-lg md:text-xl text-steel-grey leading-relaxed max-w-xl mb-10 animate-fade-in-up animate-delay-2">
              Web, obsah a automatizace pro lidi, kterým záleží na reputaci,
              čase a dlouhodobém výsledku. Jedna odpovědná osoba. Žádné technické kolečko navíc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-antique-brass text-white font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 transition-all duration-300"
              >
                Probrat svůj projekt
              </a>
              <a
                href="#reference"
                className="inline-flex items-center justify-center px-8 py-4 border border-antique-brass/40 text-antique-brass font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:border-antique-brass/80 transition-all duration-300"
              >
                Prohlédnout realizace
              </a>
            </div>
          </div>
          <aside className="hidden lg:block hero-panel animate-fade-in-up animate-delay-3" aria-label="Co získáte spoluprací">
            <p className="text-antique-brass text-xs tracking-[0.2em] uppercase font-body mb-8">Digitál, který má řád</p>
            <div className="space-y-6">
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Důvěra</p>
                <p className="text-steel-grey text-sm leading-relaxed">Prezentace, která odpovídá kvalitě vaší práce.</p>
              </div>
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Viditelnost</p>
                <p className="text-steel-grey text-sm leading-relaxed">Obsah, který má jasný směr a nepůsobí jako výplň.</p>
              </div>
              <div className="border-l border-antique-brass/60 pl-5">
                <p className="text-white font-display text-xl mb-1">Čas</p>
                <p className="text-steel-grey text-sm leading-relaxed">Systémy, které zjednoduší rutinu místo přidávání práce.</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-14 pt-7 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-sm text-steel-grey animate-fade-in-up animate-delay-4">
          <span><span className="text-antique-brass">01.</span> Úvodní konzultace bez závazku</span>
          <span><span className="text-antique-brass">02.</span> Cena a rozsah vždy předem</span>
          <span><span className="text-antique-brass">03.</span> Osobní spolupráce od začátku do konce</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
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
          {SERVICES.map((service, i) => (
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
                  Probrat řešení →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
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

function Process() {
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

function Projects() {
  return (
    <section id="reference" className="reveal py-24 md:py-32 bg-warm-ivory bg-dot-pattern">
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
              rel="noreferrer"
              className="group bg-white rounded-xl p-7 shadow-card-resting card-hover flex flex-col min-h-60"
            >
              <span className="text-antique-brass text-xs tracking-[0.2em] uppercase font-body mb-auto">
                {String(index + 1).padStart(2, "0")} · {project.type}
              </span>
              <div className="pt-12">
                <h3 className="text-2xl text-ink font-display mb-3 group-hover:text-antique-brass transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-steel-grey mb-5">{project.description}</p>
                <span className="text-sm text-antique-brass">Otevřít projekt ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="kdo-jsem" className="reveal py-24 md:py-32 bg-midnight-teal">
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
            <p className="text-steel-grey text-sm leading-relaxed mb-4">
              Dlouhodobě se pohybuji v průsečíku technologií, marketingu
              a byznysu. Za tu dobu jsem zjistil, že většina profesionálů
              potřebuje někoho, kdo převezme starosti s jejich online
              světem — a oni se mohou soustředit na svou práci.
            </p>
            <p className="text-steel-grey text-sm leading-relaxed mb-4">
              Přesně to dělám.
            </p>
            <p className="text-steel-grey text-sm leading-relaxed mb-4">
              Nejsem agentura s account managery, kteří se střídají.
              Jsem jeden člověk, který si stojí za svou prací.
              Osobně, česky a dlouhodobě.
            </p>
            <p className="text-steel-grey text-sm leading-relaxed mb-4">
              Díky chytrým procesům zvládám dodat výsledky včas
              a za cenu, která dává smysl. Za tím, co dělám, si stojím.
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
              <footer className="text-steel-grey text-sm">
                <span className="text-white">Eva Kaprálová</span>
                &nbsp;&mdash;&nbsp;krajská zastupitelka
              </footer>
            </blockquote>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-white font-display text-lg">1:1</span>
                <p className="text-steel-grey text-xs mt-1">osobní spolupráce</p>
              </div>
              <div>
                <span className="text-white font-display text-lg">Na míru</span>
                <p className="text-steel-grey text-xs mt-1">žádné šablonové řešení</p>
              </div>
              <div>
                <span className="text-white font-display text-lg">Jasně</span>
                <p className="text-steel-grey text-xs mt-1">cena i termín dopředu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="reveal py-24 md:py-32 bg-warm-ivory bg-dot-pattern">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
              <summary className="flex items-center justify-between cursor-pointer text-ink font-display text-lg list-none">
                {item.q}
                <span className="text-antique-brass text-2xl font-light leading-none group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <p className="mt-4 text-steel-grey text-sm leading-relaxed pr-8">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight mb-6">
              Pojďme zjistit,
              <br />
              <span className="text-steel-grey">co vašemu digitálu chybí.</span>
            </h2>
            <p className="text-steel-grey text-sm leading-relaxed mb-8">
              Během krátké úvodní konzultace si ujasníme cíl, rozsah i priority.
              Pokud to bude dávat smysl, pošlu vám konkrétní návrh, cenu a termín.
            </p>
            <div className="space-y-4 text-sm">
              <a href="mailto:jakub@jakubdigital.cz" className="inline-flex items-center gap-3 text-ink hover:text-antique-brass transition-colors">
                <span className="text-antique-brass">→</span>
                <span>jakub@jakubdigital.cz</span>
              </a>
              <p className="flex items-center gap-3 text-steel-grey">
                <span className="text-antique-brass">→</span>
                Odpověď zpravidla do jednoho pracovního dne.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-midnight-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-steel-grey text-sm">
            Máte otázku? Napište mi na{" "}
            <a href="mailto:jakub@jakubdigital.cz" className="text-antique-brass hover:text-antique-brass/80 transition-colors duration-300">
              jakub@jakubdigital.cz
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-antique-brass/10">
          <p className="text-white text-lg font-display tracking-tight">
            <span className="text-antique-brass">Jakub</span>{" "}
            <span className="font-light">Digital</span>
          </p>
          <p className="text-steel-grey text-xs">
            &copy; {new Date().getFullYear()} Jakub Digital. Všechna práva vyhrazena.
          </p>
          <p className="text-steel-grey text-xs">Digitální servis pro profesionály</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Audience />
        <Process />
        <Projects />
        <About />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
