import i18next from 'i18next';

i18next.init({
  fallbackLng: 'hk',
  resources: {
    'hk': {
      translations: require('../locales/hk/translations.json')
    },
    en: {
      translations: require('../locales/en/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  react: {
    wait: true,
    transSupportBasicHtmlNodes: true
  },
});

i18next.languages = ['hk', 'en'];

export default i18next;