# Jakub Digital — web

Osobní web Jakuba Málka (jakubdigital.cz) — digitální servis pro profesionály.

**Technologie:** statický HTML + CSS + vanilla JS (žádný build, žádné frameworky)
**Nasazení:** Cloudflare Pages (repo → Pages → statický web)

## Struktura

- `index.html` — one-page web (služby, reference, ceník, kontakt)
- `rezervace-a-portaly.html` — rezervace a portály pro autoservisy, spolky a wellness
- `obsah-a-site.html`, `geo.html`, `tvorba-webu-liberec.html`, `o-mne.html` — obsahové stránky
- `reference-*.html`, `clanky/` — reference a články
- `analytics.js` — GA4 (G-L9LH3NKXZY) + Consent Mode v2 + cookie lišta; snippet v `<head>` každé stránky

## Analytika

Google Analytics 4 přes Consent Mode v2 — cookies se ukládají až po kliknutí na „Přijmout“ v liště.
Bez souhlasu posílá GA jen cookieless signál. CSP v `_headers` musí povolovat `googletagmanager.com`
a `google-analytics.com`, jinak se GA zablokuje. Volba se pamatuje v `localStorage` (`jd_cookie_consent`).

## Lokální spuštění

Stačí otevřít `index.html` v prohlížeči, nebo:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Služby a ceny

- Jednostránkový web na míru — 18 900 Kč
- Web na míru 3–5 stránek — 26 900 Kč
- Web pro profesionály 5–7 stránek — 36 900 Kč
- GEO audit (viditelnost v AI) — 6 900 Kč
- Péče o web — 1 900 / 3 900 / 6 900 Kč měsíčně
- GEO monitoring — 2 900 Kč měsíčně
- Obsah a sociální sítě — Start 6 900 Kč/měs, Plus 9 900 Kč/měs
- Kompletní péče — 12 900 Kč/měs
- Focení a vizuály — 3 900–5 900 Kč
- Rezervace — nastavení 4 900–9 900 Kč + 1 900 Kč/měs
- Portál pro autoservisy — 19 900 Kč + 1 900 Kč/měs (pilot 14 900 Kč)
- Portál pro spolky a kluby — 19 900 Kč + 1 900 Kč/měs (pilot 14 900 Kč)

Nedělám e-shopy, rozsáhlé aplikace, PPC, IT sítě a správu serverů, redesigny starých webů se zachováním všeho ani neprodávám autodíly. Ceny jsou konečné (neplátce DPH). Na obsahu a provozu spolupracuji s malou podporou.

## Vizuální systém

- Hlavní stránka: `assets/css/style.css` (tmavá „grafická dílna“)
- Obsahové stránky: `assets/css/content.css` (papírová varianta stejné značky)
- Skript obsahu: `assets/js/content.js` (mobilní menu, FAQ)
- Cookie lišta: `analytics.js`

© 2026 Jakub Digital · Liberec
