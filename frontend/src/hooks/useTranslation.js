import es from '../i18n/es.json';

const translations = es;

export function useTranslation() {
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    if (typeof value !== 'string') return key;
    
    return value.replace(/\{(\w+)\}/g, (_, paramKey) => params[paramKey] ?? `{${paramKey}}`);
  };

  return { t };
}
