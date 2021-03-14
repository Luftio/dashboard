import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import cs from "./cs.json";

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
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;