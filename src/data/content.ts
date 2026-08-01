/**
 * Obsahová data — Jakub Digital, nová strategie (srpen 2026).
 * Server-side modul, žádný "use client".
 * Ceny konečné, nejsem plátce DPH. Žádné slovo "AI".
 */

export type Service = {
  id: string;
  title: string;
  desc: string;
  price: string;
  timeframe: string;
  features: string[];
  cta: string;
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Web",
    desc: "Sejdeme se nebo si zavoláme. Řeknete mi, co potřebujete a komu to má sloužit. Do dvou dnů máte písemně cenu a rozsah. Pak stavím.",
    price: "14 900 Kč",
    timeframe: "do 14 dnů · nedodržím → sleva 10 %",
    features: [
      "Návrh a stavba na míru, ne šablona",
      "Texty česky, podle vašeho rozhovoru",
      "Rychlé načítání a bezchybný mobil",
      "Formulář, mapa, odkazy na sítě",
      "Základní nastavení pro Google a Seznam",
      "Zaškolení, ať si zvládnete úpravy sami",
    ],
    cta: "Chci web",
  },
  {
    id: "obsah",
    title: "Obsah a sítě",
    desc: "Plán, texty a grafika na měsíc dopředu. Vy jen odsouhlasíte. Pravidelnost, kterou klienti vidí — bez vašich večerů.",
    price: "6 900 Kč/měsíc",
    timeframe: "bez závazku, výpověď kdykoli",
    features: [
      "Plán obsahu na měsíc dopředu",
      "Texty a grafika pro vaši profesi",
      "Publikování a odpovědi na dotazy",
      "Měsíční přehled, co funguje",
      "Žádná vázací smlouva",
    ],
    cta: "Chci spravovat obsah",
  },
  {
    id: "provoz",
    title: "Provoz",
    desc: "Web běží, já hlídám. Drobné úpravy do druhého dne, zálohy, přehledy. Jeden kontakt pro všechno.",
    price: "1 490 Kč/měsíc",
    timeframe: "úpravy do 2 pracovních dnů",
    features: [
      "Drobné úpravy textů a fotek",
      "Kontrola dostupnosti",
      "Aktualizace a zálohy",
      "Měsíční přehled návštěv",
      "Jeden kontakt pro všechno",
    ],
    cta: "Chci klid",
  },
];

export type Project = {
  name: string;
  href: string;
  description: string;
  own?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Kalendář alternativy",
    href: "https://kalendar-alternativy.cz",
    description:
      "Celostátní kalendář akcí s filtrováním podle krajů, mapou míst a katalogem osobností. Galerie fotek a videí, newsletter a statistiky. Vlastní administrace, kterou zvládne obsluhovat kdokoliv — bez nutnosti sahat na kód.",
    own: true,
  },
  {
    name: "Eva Kaprálová — krajská zastupitelka",
    href: "https://evakapralova.cz",
    description:
      "Web a průběžná správa obsahu pro krajskou zastupitelku. Od návrhu po pravidelnou správu sociálních sítí — plánování, texty, grafika a publikování bez její práce navíc.",
  },
  {
    name: "liberec.online",
    href: "https://liberec.online",
    description:
      "Vlastní projekt pro místní komunitu. Mapa, do které lidé zapisují problémy z blízké fabriky. Postaveno proto, že to nikdo jiný neřešil.",
    own: true,
  },
  {
    name: "JUDr. Rajchl — digitální podpora kampaně",
    href: "#",
    description:
      "Grafika pro sociální sítě a vedení podcastu během volební kampaně. Denní výstupy, jednotný vizuální styl, pravidelný kontakt s voliči.",
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
    title: "Konzultace",
    desc: "Třicet minut, osobně nebo online. Řeknete mi, co řešíte, já se zeptám na to podstatné. Bez závazku, bez tlaku.",
  },
  {
    step: "02",
    title: "Návrh do dvou dnů",
    desc: "Pošlu písemný návrh: co udělám, za kolik a do kdy. Upravujeme, dokud vám to nesedí.",
  },
  {
    step: "03",
    title: "Stavba",
    desc: "Pracuji a průběžně hlásím stav. Připomínky řešíme rovnou, ne až na konci.",
  },
  {
    step: "04",
    title: "Předání",
    desc: "Web předám s návodem a zaškolením. Pak se starám dál — o provoz, obsah i úpravy.",
  },
];

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQ: FaqItem[] = [
  {
    q: "Kolik to stojí a co za to?",
    a: "14 900 Kč konečná — návrh, texty, formulář, spuštění, zaškolení. Nejsem plátce DPH, k ceně se nic nepřidává. Přesný rozsah dostanete písemně do dvou dnů.",
  },
  {
    q: "Našel jsem web za devět tisíc. Proč vy?",
    a: "Za devět tisíc dostanete web. Ode mě dostanete web a člověka. Sejdeme se, texty píšu podle toho, co mi řeknete, a po předání máte moje číslo. Jestli hledáte nejnižší cenu, vezměte tu za devět — bez ironie.",
  },
  {
    q: "Kdy to bude?",
    a: "Do 14 dnů od odsouhlasení. Většinou to stihnu za sedm. Když termín nestihnu, srazím 10 %.",
  },
  {
    q: "Děláte to sám? Co když onemocníte?",
    a: "Ano, sám. Proto beru maximálně tři zakázky měsíčně. Web dostanete i s přístupy, takže nejste na mně závislí — po předání s ním můžete jít kamkoliv.",
  },
  {
    q: "Musím tomu rozumět?",
    a: "Ne. Ptám se česky, vysvětluji česky. Vy odsouhlasíte návrh, techniku zařídím já.",
  },
  {
    q: "Co když nebudu spokojený?",
    a: "Připomínky řešíme průběžně, ne až na konci. Platí se polovina předem, zbytek po předání — takže na konci máte páku vy.",
  },
  {
    q: "Máte hodně klientů?",
    a: "Ne. Jsem na začátku a beru tři zakázky měsíčně. To znamená, že vaše bude jedna ze tří, ne jedna z padesáti. První klienti dostávají moji plnou pozornost a férovou cenu — proto jsou první.",
  },
  {
    q: "Jak funguje platba?",
    a: "Polovina jako záloha, zbytek po předání. Cenu a termín potvrdím písemně. Konečná cena, žádné skryté náklady.",
  },
];

/* ─── Hero ─── */

export const HERO_EYEBROW = "JAKUB / WEBY · TEXTY · PROVOZ";
export const HERO_H1 = "Web, na který se dá zavolat";
export const HERO_SUBTITLE =
  "Jsem Jakub. Postavím web, napíšu texty a starám se dál. Jeden člověk, konečná cena, čtrnáct dnů.";
export const HERO_CTA_PRIMARY = "Napište mi";
export const HERO_PRICE = "14 900 Kč";

/* ─── Capacity ─── */

/** obsazeno: 0–3, max = 3 */
export const CAPACITY = { total: 3, occupied: 2, month: "srpen 2026" };

/* ─── O mně ─── */

export const ABOUT_BIO =
  "Vyrostl jsem v autoservisu AUTO IN. Tam jsem se naučil, že práce se dělá pořádně a že pravda se vždycky vyplatí. Deset let podnikám a stejná pravidla platí dodnes. Nejdřív se ptám, pak navrhnu — s jasnou cenou a termínem. Stavím weby a systémy pro lidi, kteří nemají čas řešit techniku. Rád vysvětluji, jak věci fungují, ať víte, co dostáváte. Za svou práci ručím jménem.";

export type AboutStat = {
  label: string;
  value: string;
};

export const ABOUT_STATS: AboutStat[] = [
  { value: "10 let", label: "podnikání" },
  { value: "14 dnů", label: "garantovaný termín" },
  { value: "3", label: "zakázky měsíčně max." },
  { value: "1", label: "člověk od začátku do konce" },
];

/* ─── Kontakt ─── */

export const CONTACT_HEADING = "Napište mi";
export const CONTACT_TEXT =
  "Napište, co řešíte. Ozvu se do jednoho pracovního dne a domluvíme třicet minut, kdy vám to vyhovuje. Bez závazku a bez technické mluvy.";

/** Telefon — zatím pouze e-mail, číslo doplnit až s novým číslem. Staré +420 777 068 493 je cizí (J&J Parts). */
// export const CONTACT_PHONE = "";

/* ─── Footer ─── */

export const FOOTER_TEXT =
  "Jakub Digital — weby, texty a provoz od člověka, kterému můžete zavolat.";
