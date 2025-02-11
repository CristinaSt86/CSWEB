import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importăm hook-ul pentru traducere

const CookieBanner = () => {
  const { t } = useTranslation(); // Folosim traducerea
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("userConsent", "true");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("userConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 text-center">
      <p>
        {t("cookieBanner.message")}
        <a
          href="/privacy-policy"
          className="text-green-400 underline ml-2 hover:text-green-700"
        >
          {t("cookieBanner.learnMore")}
        </a>
      </p>
      <div className="mt-4">
        <button
          onClick={acceptCookies}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded ml-4 transition"
        >
          {t("cookieBanner.accept")}
        </button>
        <button
          onClick={declineCookies}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded ml-4 transition"
        >
          {t("cookieBanner.decline")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
