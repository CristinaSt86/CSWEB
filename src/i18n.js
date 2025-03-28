import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import roTranslation from "./locales/ro.json";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";

import blogRo from "./locales/blog-ro.json";
import blogEn from "./locales/blog-en.json";
import blogDe from "./locales/blog-de.json";

i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: roTranslation,
      blog: blogRo
    },
    en: {
      translation: enTranslation,
      blog: blogEn
    },
    de: {
      translation: deTranslation,
      blog: blogDe
    }
  },
  lng: "de",
  fallbackLng: "en",
  ns: ["translation", "blog"], // 👈 înregistrăm namespace-ul blog
  defaultNS: "translation",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
