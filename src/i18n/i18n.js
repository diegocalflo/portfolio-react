import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import esTranslation from '../locales/es.json';

const storedLanguage = localStorage.getItem('portfolio-language');
const browserLanguage = navigator.language?.startsWith('en') ? 'en' : 'es';

const updateDocumentLanguage = (language) => {
  document.documentElement.lang = language;
  localStorage.setItem('portfolio-language', language);
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: storedLanguage || browserLanguage,
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

updateDocumentLanguage(i18n.resolvedLanguage || 'es');
i18n.on('languageChanged', updateDocumentLanguage);

export default i18n;
