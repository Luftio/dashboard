import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import cs from "./locales/cs/translation.json";

const resources = {
  en: {
    translation: en,
  },
  cs: {
    translation: cs,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cs",
  fallbackLng: "en",
  keyseparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
