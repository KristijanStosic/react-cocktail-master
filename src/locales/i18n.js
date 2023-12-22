import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import global_en from './en/translation.json'
import global_srb from './srb/translation.json'

i18n
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false
    },
    lng: 'en',
    resources: {
      en: {
        translation: global_en
      },
      srb: {
        translation: global_srb
      }
    }
  });

export default i18n;