import { dictionaries, htmlLang, defaultLang, type Lang } from '../i18n';

const get = (lang: Lang, path: string): string | undefined => {
  const v = path.split('.').reduce<any>((o, k) => o?.[k], dictionaries[lang]);
  return typeof v === 'string' ? v : undefined;
};
const $$ = <T extends HTMLElement = HTMLElement>(s: string) => [...document.querySelectorAll<T>(s)];

let lang: Lang = defaultLang;
let langCount = 1; // 1 | 2 | 3 ngôn ngữ trong bảng giá

const money = (n: number) => n.toLocaleString('cs-CZ') + '\u00a0Kč';

function renderPrices() {
  $$('[data-prices]').forEach((el) => {
    const arr: number[] = JSON.parse(el.dataset.prices!);
    el.textContent = money(arr[langCount - 1]);
  });
  $$('[data-plang]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.plang) === langCount)));
}

function applyLang(next: Lang) {
  lang = next;
  document.documentElement.lang = htmlLang[lang];
  try { localStorage.setItem('lang', lang); } catch {}
  $$('[data-i18n]').forEach((el) => { const v = get(lang, el.dataset.i18n!); if (v) el.textContent = v; });
  $$('[data-i18n-html]').forEach((el) => { const v = get(lang, el.dataset.i18nHtml!); if (v) el.innerHTML = v; });
  $$<HTMLInputElement>('[data-i18n-ph]').forEach((el) => { const v = get(lang, el.dataset.i18nPh!); if (v) el.placeholder = v; });
  document.title = get(lang, 'meta.title') ?? document.title;
  document.querySelector('meta[name=description]')?.setAttribute('content', get(lang, 'meta.description') ?? '');
  $$('[data-lang-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));
}

$$('[data-lang-btn]').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.langBtn as Lang)));
$$('[data-plang]').forEach((b) => b.addEventListener('click', () => { langCount = Number(b.dataset.plang); renderPrices(); }));

// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');
burger?.addEventListener('click', () => {
  const open = menu!.classList.toggle('hidden') === false;
  burger.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { menu.classList.add('hidden'); burger?.setAttribute('aria-expanded', 'false'); }));

let saved: string | null = null;
try { saved = localStorage.getItem('lang'); } catch {}
applyLang(saved && saved in dictionaries ? (saved as Lang) : defaultLang);
renderPrices();
