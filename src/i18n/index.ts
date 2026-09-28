import cs from './cs.json';
import vn from './vn.json';
import en from './en.json';

export const dictionaries = { cs, vn, en } as const;
export type Lang = keyof typeof dictionaries;
export const defaultLang: Lang = 'cs';
export const htmlLang: Record<Lang, string> = { cs: 'cs', vn: 'vi', en: 'en' };

/** Lấy chuỗi theo đường dẫn, vd: t('hero.title') hoặc t('pricing.plans.0.name') */
export function t(path: string, lang: Lang = defaultLang): string {
  const v = path.split('.').reduce<any>((o, k) => o?.[k], dictionaries[lang]);
  return typeof v === 'string' ? v : path;
}
