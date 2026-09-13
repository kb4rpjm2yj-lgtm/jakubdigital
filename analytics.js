/* Jakub Digital — Google Analytics 4 + Consent Mode v2 + cookie lišta
 *
 * Načítá se synchronně v <head> PŘED async gtag.js (viz snippet v každé stránce).
 * Bez souhlasu se neukládají žádné cookies (analytics_storage = denied).
 * Volba se pamatuje v localStorage pod klíčem "jd_cookie_consent".
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

  // 2) Uživatel už rozhodl → aplikuj volbu a lištu neukazuj
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (stored === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  if (stored === 'denied') return;

  // 3) První návštěva → zobraz lištu
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
      'background:#14212E;color:#FAF8F5;font-family:\'Inter\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif;',
      'font-size:14px;line-height:1.5;padding:16px 20px;box-shadow:0 -6px 24px rgba(0,0,0,.18);}',
      '#cookie-bar .cb-inner{max-width:1080px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}',
      '#cookie-bar .cb-text{margin:0;max-width:640px;color:rgba(250,248,245,.85);}',
      '#cookie-bar .cb-actions{display:flex;gap:10px;flex-shrink:0;}',
      '#cookie-bar .cb-btn{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:10px 18px;border:1px solid transparent;transition:background .15s,border-color .15s;}',
      '#cookie-bar .cb-deny{background:transparent;color:#FAF8F5;border-color:rgba(250,248,245,.35);}',
      '#cookie-bar .cb-deny:hover{border-color:rgba(250,248,245,.75);}',
      '#cookie-bar .cb-accept{background:#E85D26;color:#fff;}',
      '#cookie-bar .cb-accept:hover{background:#C73C05;}',
      '#cookie-bar .cb-btn:focus-visible{outline:2px solid #E85D26;outline-offset:2px;}',
      '@media(max-width:640px){#cookie-bar .cb-actions{width:100%;}#cookie-bar .cb-btn{flex:1;}}'
    ].join('');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'cookie-bar';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Souhlas s analytickými cookies');
    bar.innerHTML =
      '<div class="cb-inner">' +
        '<p class="cb-text">Používám Google Analytics, abych věděl, co na webu funguje. ' +
        'Cookies se ukládají jen s vaším souhlasem a nic tím neztratíte — web funguje i bez něj.</p>' +
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
