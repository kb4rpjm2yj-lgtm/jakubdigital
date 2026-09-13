# Jakub Digital — web

Osobní web Jakuba Málka (jakubdigital.cz) — digitální servis pro profesionály.

**Technologie:** statický HTML + CSS + vanilla JS (žádný build, žádné frameworky)
**Nasazení:** Cloudflare Pages (repo → Pages → statický web)

## Struktura

- `index.html` — celý one-page web (služby, reference, ceník, kontakt)
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

## Služby

- Web na míru (12 000–20 000 Kč)
- Správa sociálních sítí (4 000–6 000 Kč/měsíc)
- Údržba webu (1 500 Kč/měsíc)
- Viditelnost pro AI / GEO (3 000–5 000 Kč)
- Automatizace (individuálně)

© 2026 Jakub Digital · Liberec
