/**
 * Obsahová data webu Jakub Digital.
 *
 * Server-side modul — žádný "use client". Sekce si data importují odtud.
 * Finální marketingové texty dle /tmp/jd-copy-final.md (copywriter, 1. 8. 2026).
 * Žádný z textů neobsahuje slovo "AI".
 */

export type Service = {
  title: string;
  desc: string;
  price: string;
  timeframe: string;
  features: string[];
  cta: string;
};

export const SERVICES: Service[] = [
  {
    title: "Web na míru",
    desc: "Prezentační web, který vypadá dobře a hlavně funguje. Navrhnu ho podle vaší profese, napíšu texty a spustím v jasném termínu.",
    price: "od 19 900 Kč",
    timeframe: "5–7 pracovních dnů od odsouhlasení návrhu",
    features: [
      "Vlastní návrh na míru vaší profesi",
      "Texty česky, srozumitelně, bez vaty",
      "Rychlé načítání a bezchybný mobilní vzhled",
      "Napojení formuláře, mapy a odkazů na sítě",
      "Základní úpravy pro vyhledávače v ceně",
    ],
    cta: "Chci web na míru",
  },
  {
    title: "Správa sociálních sítí",
    desc: "Pravidelný obsah, na kterém vám záleží — bez toho, abyste u něj trávili večery. Připravím plán, texty i grafiku a vy jen odsouhlasíte.",
    price: "od 3 000 Kč/měsíc",
    timeframe: "první výstupy do týdne od odsouhlasení plánu",
    features: [
      "Plán obsahu na měsíc dopředu",
      "Texty a grafika pro vaši profesi (LinkedIn, Facebook, Instagram)",
      "Publikování a odpovědi na dotazy",
      "Měsíční přehled, co funguje a co ne",
      "Žádná vázací smlouva, spolupráci lze kdykoli ukončit",
    ],
    cta: "Chci spravovat sítě",
  },
  {
    title: "Chytrá podpora provozu",
    desc: "Provoz, který běží bez dohledu: e-maily, zálohy, formuláře, propojení nástrojů. Systém za vás udělá opakující se práci, vy se věnujete klientům.",
    price: "od 5 000 Kč/měsíc",
    timeframe: "nastavení do 2 týdnů, poté běžný provoz měsíčně",
    features: [
      "Nastavení a propojení nástrojů (e-mail, kalendář, formuláře)",
      "Automatické odpovědi, připomínky a přehledy",
      "Zálohy, aktualizace a hlídání provozu",
      "Jednoduchá evidence bez ručního přepisování",
      "Jeden kontakt pro všechno",
    ],
    cta: "Chci podporu provozu",
  },
  {
    title: "Komplet: web, sítě a podpora",
    desc: "Rozjezd celého digitálního servisu najednou: web, první měsíc sociálních sítí a první měsíc podpory provozu. Jeden kontakt, jedna cena.",
    price: "27 900 Kč",
    timeframe: "web za 5–7 dnů, sítě a podpora běží hned po spuštění",
    features: [
      "Web na míru (hodnota od 19 900 Kč)",
      "První měsíc správy sociálních sítí",
      "První měsíc podpory provozu",
      "Úvodní analýza a nastavení v ceně",
      "Jeden člověk pro web, sítě i provoz",
    ],
    cta: "Domluvit konzultaci zdarma",
  },
];

export type Audience = {
  title: string;
  desc: string;
  icon: string;
};

export const AUDIENCES: Audience[] = [
  {
    title: "Advokáti a notáři",
    desc: "Váš web je první dojem, který o vás klient má. Postavím prezentaci, která působí důvěryhodně a přehledně. Správa LinkedIn vám ušetří čas, který patří klientům.",
    icon: "⚖️",
  },
  {
    title: "Realitní makléři",
    desc: "Zakázky přicházejí přes důvěru a doporučení. Web a sítě drží vaše nabídky na očích — a systém publikování zajistí pravidelnost bez večerní práce.",
    icon: "🏠",
  },
  {
    title: "Politici a veřejné osoby",
    desc: "Lidé si ověřují online, koho volí. Připravím prezentaci i obsah, kterému rozumíte, a odpovědi na dotazy vyřídím za vás.",
    icon: "🏛️",
  },
  {
    title: "OSVČ a malí podnikatelé",
    desc: "Máte řemeslo, ne čas na techniku. Převezmu web, sítě i provoz, aby vám zbyl čas na práci — a vše vysvětlím česky.",
    icon: "💼",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Konzultace zdarma",
    desc: "Třicet minut, online nebo telefonicky. Řeknete mi, co řešíte, já se zeptám na to podstatné. Bez závazku a bez prodejního tlaku.",
  },
  {
    step: "02",
    title: "Návrh s cenou do 2 dnů",
    desc: "Pošlu písemný návrh: co udělám, za kolik a do kdy. Změny probíráme, dokud vám to nesedí.",
  },
  {
    step: "03",
    title: "Realizace",
    desc: "Pracuji a průběžně hlásím stav. Máte připomínky? Řešíme je rovnou, ne až na konci.",
  },
  {
    step: "04",
    title: "Předání a podpora",
    desc: "Web nebo systém předám s návodem a zaškolením. Pak se starám dál, pokud chcete — o provoz, obsah i úpravy.",
  },
];

export type Project = {
  name: string;
  solved: string;
  href: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Eva Kaprálová — krajská zastupitelka (KHK)",
    solved: "online prezentace a pravidelný obsah pro veřejné působení",
    href: "https://evakapralova.cz",
    description:
      "Potřebovala prezentaci pro veřejné působení, které rozumí a kterou zvládne sama. Postavil jsem web a připravil obsah pro sociální sítě — od plánu po publikování.",
  },
  {
    name: "liberec.online",
    solved: "web od návrhu po spuštění a provoz",
    href: "https://liberec.online",
    description:
      "Webový projekt, který měl být rychlý, přehledný a spolehlivý. Od návrhu po nasazení jsem měl vše na starosti, včetně provozu a záloh.",
  },
  {
    name: "AlphaCreator",
    solved: "vývoj aplikace od návrhu po publikaci v App Store",
    href: "https://alphacreator.cz",
    description:
      "Aplikace pro iOS, která prošla celým procesem — od nápadu po publikaci v App Store. Dnes běží samostatně, s pravidelnými aktualizacemi.",
  },
];

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQ: FaqItem[] = [
  {
    q: "Kolik stojí webové stránky?",
    a: "Web na míru začíná na 19 900 Kč. V ceně je návrh, texty, napojení formuláře a spuštění. Přesnou cenu dostanete písemně před začátkem práce.",
  },
  {
    q: "Jak dlouho trvá realizace?",
    a: "Standardně 5 až 7 pracovních dnů od odsouhlasení návrhu. Termín si písemně potvrdíme a držíme se ho. U větších zakázek se domluvíme individuálně.",
  },
  {
    q: "Musím rozumět technologiím?",
    a: "Ne. Vše vysvětlím česky a bez zbytečné technické mluvy. Vy se staráte o svou profesi, já o web, sítě a provoz.",
  },
  {
    q: "Proč jeden člověk místo agentury?",
    a: "U agentury komunikujete s jedním člověkem a práci dělá někdo jiný. U mě mluvíte přímo s tím, kdo váš web staví. Rychlejší domluva a jasná odpovědnost.",
  },
  {
    q: "Co se děje po spuštění webu?",
    a: "Web předám s návodem a zaškolením. Můžete ho spravovat sami, nebo se o něj starám v rámci podpory provozu — aktualizace, zálohy, úpravy.",
  },
  {
    q: "Budu muset obsah řešit sám?",
    a: "Nechcete-li, nemusíte. V rámci správy sociálních sítí připravím plán, texty i grafiku. Vy jen odsouhlasíte, co se publikuje.",
  },
  {
    q: "Jak probíhá konzultace?",
    a: "Třicet minut, online nebo telefonicky. Zeptám se, co potřebujete a co vám dnes chybí. Na konci víte, co dál — a nemusíte nic kupovat.",
  },
  {
    q: "Jak funguje platba?",
    a: "Polovina ceny jako záloha, zbytek po předání. Cenu a termín potvrdím písemně předem. Žádné skryté náklady.",
  },
];

/* ---------- Hero ---------- */

export const HERO_EYEBROW = "Jakub Digital — digitální servis pro profesionály";
export const HERO_H1 =
  "Váš web, sociální sítě a provoz. Jeden člověk, jasný termín.";
export const HERO_SUBTITLE =
  "Jsem Jakub Málek. Postavím web, který působí důvěryhodně, a postarám se o sítě i provoz. Vše česky, s jasnou cenou předem a konzultací zdarma.";
export const HERO_CTA_PRIMARY = "Domluvit konzultaci zdarma";
export const HERO_CTA_SECONDARY = "Zobrazit služby";
export const HERO_IMAGE_SRC = "/hero-bg.jpg";

/* ---------- O mně ---------- */

export const ABOUT_BIO =
  "Vyrostl jsem v autoservisu AUTO IN. Tam jsem se naučil dvě věci: dělat práci pořádně a říkat pravdu. Deset let podnikám a stejná pravidla platí dodnes. Nejdřív se ptám, co potřebujete, pak navrhnu řešení s jasnou cenou a termínem. Stavím weby a systémy pro lidi, kteří nemají čas řešit techniku. Nestavím ze šablon, ale na míru — jeden člověk od začátku do konce, bez zbytečných mezičlánků. Rád vysvětluji, jak věci fungují, ať víte, co dostáváte. Za svou práci ručím jménem.";

export type AboutStat = {
  label: string;
  value: string;
};

export const ABOUT_STATS: AboutStat[] = [
  { value: "10 let", label: "podnikání" },
  { value: "3 aplikace", label: "v App Store" },
  { value: "5 dní", label: "nejrychlejší realizace webu od zadání po spuštění" },
  { value: "25–30 hodin", label: "týdně na vývoj a vlastní projekty" },
];

/* ---------- Kontakt a patička ---------- */

export const CONTACT_HEADING = "Domluvte si konzultaci zdarma";
export const CONTACT_TEXT =
  "Napište, co řešíte. Ozvu se do jednoho pracovního dne a domluvíme třicet minut, kdy vám to vyhovuje. Bez závazku a bez technické mluvy.";
export const CONTACT_SUCCESS =
  "Děkuji, zpráva dorazila. Ozvu se vám do jednoho pracovního dne — na e-mail nebo telefon, jak preferujete.";
export const FOOTER_TEXT =
  "Jakub Digital — digitální servis pro profesionály. Web, sociální sítě a podpora provozu od jednoho člověka.";
