/**
 * Obsahová data webu Jakub Digital.
 *
 * Server-side modul — žádný "use client". Sekce si data importují odtud.
 * Finální marketingové texty a ceny dle /tmp/jd-opus-strategy.md (Opus 5, 1. 8. 2026).
 * Žádný z textů neobsahuje slovo "AI".
 */

export type Service = {
  title: string;
  desc: string;
  price: string;
  timeframe: string;
  features: string[];
  cta: string;
  /** Volitelný badge zvýrazňující kartu (např. "Ušetříte 2 000 Kč" u Kompletu). */
  badge?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Web, který budí důvěru",
    desc: "Návrh, texty i spuštění v jednom. Stavím podle vaší profese, ne ze šablon. Cenu a termín dostanete písemně.",
    price: "od 19 900 Kč",
    timeframe: "5–7 pracovních dnů, termín písemně",
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
    title: "Sítě bez vaší práce",
    desc: "Plán, texty a grafika na měsíc dopředu. Vy jen odsouhlasíte. Pravidelnost, kterou klienti vidí — bez vašich večerů.",
    price: "od 5 000 Kč/měsíc",
    timeframe: "bez závazku, výpověď kdykoli",
    features: [
      "Plán obsahu na měsíc dopředu",
      "Texty a grafika pro vaši profesi",
      "Publikování a odpovědi na dotazy",
      "Měsíční přehled, co funguje",
      "Žádná vázací smlouva",
    ],
    cta: "Chci spravovat sítě",
  },
  {
    title: "Provoz bez starostí",
    desc: "Formuláře, přehledy, zálohy a odpovědi zařídí systém. Vy se věnujete klientům. Já hlídám, že vše běží.",
    price: "od 5 000 Kč/měsíc",
    timeframe: "nastavení do 2 týdnů",
    features: [
      "Nastavení a propojení nástrojů",
      "Automatické odpovědi a přehledy",
      "Zálohy, aktualizace, hlídání provozu",
      "Jednoduchá evidence bez přepisování",
      "Jeden kontakt pro všechno",
    ],
    cta: "Chci podporu provozu",
  },
  {
    title: "Komplet: web, sítě i provoz",
    desc: "Vše najednou: web, první měsíc sítí a podpory. Ušetříte 2 000 Kč a máte jednoho člověka na všechno.",
    price: "27 900 Kč",
    timeframe: "jednotlivě 29 900 Kč — ušetříte 2 000 Kč",
    features: [
      "Web na míru (hodnota od 19 900 Kč)",
      "První měsíc správy sociálních sítí",
      "První měsíc podpory provozu",
      "Úvodní analýza a nastavení v ceně",
      "Jeden člověk pro web, sítě i provoz",
    ],
    cta: "Domluvit konzultaci zdarma",
    badge: "Ušetříte 2 000 Kč",
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
    desc: "Klient si vaši kancelář ověří online dřív, než vám zavolá. Když tam najde šablonu, která nevypadá jako vy, zavolá konkurenci.",
    icon: "⚖️",
  },
  {
    title: "Realitní makléři",
    desc: "Inzerát prodá nemovitost, ale vy z něj nejste vidět. Bez webu a sítí vás klienti najdou jen náhodou — a pak zapomenou.",
    icon: "🏠",
  },
  {
    title: "Politici a veřejné osoby",
    desc: "Voliči vaše jméno googlí každý den. Když najdou jen staré profily a žádné odpovědi, věří méně — a volí někoho jiného.",
    icon: "🏛️",
  },
  {
    title: "OSVČ a malí podnikatelé",
    desc: "Večery u webu a sítí jsou večery, kdy nevyděláváte. Přitom stačí, aby to někdo převzal — a vy dělali svou práci.",
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
    q: "Kolik stojí web?",
    a: "Od 19 900 Kč: návrh, texty, formulář, spuštění. Přesnou cenu pošlu písemně do dvou dnů od konzultace. Většina webů se zaplatí jednou získanou zakázkou.",
  },
  {
    q: "Jak dlouho to trvá?",
    a: "5 až 7 pracovních dnů od odsouhlasení návrhu. Termín potvrdím písemně a držím ho. Když ho nedodržím, srazím 10 % z ceny.",
  },
  {
    q: "Musím rozumět technologiím?",
    a: "Ne. Mluvím česky, bez žargonu. Vy odsouhlasíte návrh, techniku zařídím já.",
  },
  {
    q: "Proč vy a ne agentura?",
    a: "U agentury mluvíte s account managerem, práci dělá někdo jiný. U mě mluvíte s tím, kdo web staví. Odpovídám za výsledek osobně.",
  },
  {
    q: "Co když nebudu spokojený?",
    a: "Konzultace je zdarma a nezávazná. Návrh dostanete písemně, i když si ho necháte udělat jinde. U realizace řešíme připomínky průběžně.",
  },
  {
    q: "Můžu služby kombinovat?",
    a: "Ano. Komplet: web, první měsíc sítí a první měsíc podpory za 27 900 Kč. Jednotlivě by to stálo 29 900 Kč.",
  },
  {
    q: "Jak probíhá konzultace?",
    a: "Třicet minut, osobně nebo online. Řeknete, co řešíte, já navrhnu, kde začít. Do dvou dnů dostanete návrh s cenou.",
  },
  {
    q: "Jak funguje platba?",
    a: "Polovina jako záloha, zbytek po předání. Cenu a termín potvrdím písemně. Žádné skryté náklady.",
  },
];

/* ---------- Hero ---------- */

export const HERO_EYEBROW = "Jakub Digital — weby, sítě a provoz";
export const HERO_H1 = "Vypadat dobře. Budit důvěru. Přinášet klienty.";
export const HERO_SUBTITLE =
  "Jsem Jakub Málek. Postavím web, který budí důvěru, a postarám se o sítě i provoz. Cena a termín předem, česky, konzultace zdarma.";
export const HERO_CTA_PRIMARY = "Domluvit konzultaci zdarma";
export const HERO_CTA_SECONDARY = "Podívat se na ceny";
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
  { value: "3", label: "aplikace v App Store" },
  { value: "5 dní", label: "od zadání po spuštění" },
  { value: "25–30 h", label: "týdně na vývoj" },
];

/* ---------- Kontakt a patička ---------- */

export const CONTACT_HEADING = "Domluvte si konzultaci zdarma";
export const CONTACT_TEXT =
  "Napište, co řešíte. Ozvu se do jednoho pracovního dne a domluvíme třicet minut, kdy vám to vyhovuje. Bez závazku a bez technické mluvy.";
export const CONTACT_SUCCESS =
  "Děkuji, zpráva dorazila. Ozvu se vám do jednoho pracovního dne — na e-mail nebo telefon, jak preferujete.";
export const FOOTER_TEXT =
  "Jakub Digital — digitální servis pro profesionály. Web, sociální sítě a podpora provozu od jednoho člověka.";
