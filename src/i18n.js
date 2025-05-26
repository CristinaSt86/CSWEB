import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import roTranslation from "./locales/ro.json";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";

import blogRo from "./locales/blog-ro.json";
import blogEn from "./locales/blog-en.json";
import blogDe from "./locales/blog-de.json";

// Verificăm dacă limba există deja în localStorage
const storedLanguage = localStorage.getItem("i18nextLng") || "ro"; // Limba implicită este 'ro'

i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: roTranslation,
      blog: blogRo,
    },
    en: {
      translation: enTranslation,
      blog: blogEn,
    },
    de: {
      translation: deTranslation,
      blog: blogDe,
    },
  },
  lng: storedLanguage, // Folosim limba salvată sau limba implicită
  fallbackLng: "ro",
  ns: ["translation", "blog"], // Înregistrăm namespace-ul blog
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
