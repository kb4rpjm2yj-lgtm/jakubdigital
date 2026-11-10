/* Jakub Digital — Google Analytics 4 + Consent Mode v2 + cookie lišta
 *
 * Načítá se synchronně v <head> PŘED async gtag.js (viz snippet v každé stránce).
 * Bez souhlasu se neukládají žádné cookies (analytics_storage = denied).
 * Volba se pamatuje v localStorage pod klíčem "jd_cookie_consent".
 * Souhlas lze odvolat tlačítkem [data-jd-cookie-settings] (stránka /gdpr).
 */
(function () {
  'use strict';

  var MEASUREMENT_ID = 'G-L9LH3NKXZY';
  var STORAGE_KEY = 'jd_cookie_consent'; // 'granted' | 'denied'

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  // 1) Výchozí stav: bez souhlasu nic neukládáme (Consent Mode v2)
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  // 2) Odvolání / změna souhlasu — tlačítko [data-jd-cookie-settings] (viz /gdpr)
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-jd-cookie-settings]') : null;
    if (!el) return;
    e.preventDefault();
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) {}
    window.location.reload();
  });

  // 3) Uživatel už rozhodl → aplikuj volbu a lištu neukazuj
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (stored === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  if (stored === 'denied') return;

  // 4) První návštěva → zobraz lištu
  function decide(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    if (value === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    var bar = document.getElementById('cookie-bar');
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
  }

  function showBar() {
    var css = [
      '#cookie-bar{position:fixed;left:0;right:0;bottom:0;z-index:9999;',
      'background:#101310;color:#f5eddc;font-family:\'Inter\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif;',
      'font-size:12.5px;line-height:1.45;border-top:2px solid #ff5a1f;box-shadow:0 -8px 24px rgba(0,0,0,.28);}',
      '#cookie-bar .cb-inner{max-width:1120px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:9px 18px;}',
      '#cookie-bar .cb-text{margin:0;flex:1 1 340px;max-width:640px;color:#cfd0c4;}',
      '#cookie-bar .cb-actions{display:flex;gap:8px;flex-shrink:0;}',
      '#cookie-bar .cb-btn{font:700 10px/1 \'Inter\',sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer;padding:9px 13px;border:1px solid transparent;transition:background .15s,border-color .15s,color .15s;}',
      '#cookie-bar .cb-deny{background:transparent;color:#f5eddc;border-color:rgba(233,223,201,.35);}',
      '#cookie-bar .cb-deny:hover{border-color:rgba(233,223,201,.8);}',
      '#cookie-bar .cb-accept{background:#ff5a1f;color:#101310;}',
      '#cookie-bar .cb-accept:hover{background:#f5eddc;}',
      '#cookie-bar .cb-text a{color:#ff5a1f;text-decoration:underline;}',
      '#cookie-bar .cb-text a:hover{color:#f5eddc;}',
      '#cookie-bar .cb-btn:focus-visible{outline:2px solid #ff5a1f;outline-offset:2px;}',
      '@media(max-width:640px){#cookie-bar .cb-inner{padding:9px 12px;gap:8px;}#cookie-bar .cb-text{flex-basis:100%;}#cookie-bar .cb-actions{width:100%;gap:6px;}#cookie-bar .cb-btn{flex:1;padding:9px 10px;}}'
    ].join('');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'cookie-bar';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Souhlas s analytickými cookies');
    var text = 'Analytické cookies. Web funguje i bez nich. <a href="/gdpr">Detaily</a>';
    bar.innerHTML =
      '<div class="cb-inner">' +
        '<p class="cb-text">' + text + '</p>' +
        '<div class="cb-actions">' +
          '<button type="button" class="cb-btn cb-deny">Odmítnout</button>' +
          '<button type="button" class="cb-btn cb-accept">Přijmout</button>' +
        '</div>' +
      '</div>';

    bar.querySelector('.cb-deny').addEventListener('click', function () { decide('denied'); });
    bar.querySelector('.cb-accept').addEventListener('click', function () { decide('granted'); });
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBar);
  } else {
    showBar();
  }
})();
