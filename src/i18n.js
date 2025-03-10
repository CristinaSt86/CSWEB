import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import roTranslation from "./locales/ro.json"; // Calea corectă pentru fișierul ro.json
import enTranslation from "./locales/en.json"; // Calea corectă pentru fișierul en.json
import deTranslation from "./locales/de.json"; // Calea corectă pentru fișierul de.json

i18n
  .use(initReactI18next) // Legătura cu react-i18next
  .init({
    resources: {
      ro: { translation: roTranslation },
      en: { translation: enTranslation },
      de: { translation: deTranslation }, // Adăugarea limbii germane
    },
    lng: "en", // Limba implicită
    fallbackLng: "en", // Limba fallback
    interpolation: {
      escapeValue: false, // React nu necesită escapare a valorilor
    },
  });

export default i18n;
