import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show icon after a few seconds for the entry effect
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const handleLanguageChange = () => {
    // Toggle between 'ro' and 'en' languages
    const newLang = i18n.language === "ro" ? "en" : "ro";
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      className={`fixed top-32 right-0 sm:top-[10rem] md:top-32 md:right-0 md:rounded-s-lg transform -translate-y-1/2 p-2 bg-custom-btn text-white rounded-s-xl shadow-lg transition-all duration-500 ${
        isVisible ? "right-0 opacity-100" : "right-[-200px] opacity-0"
      }`}
      style={{ zIndex: 9999 }}
    >
      {/* Language switcher icon */}
      <FaGlobe
        onClick={handleLanguageChange}
        className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-300"
      />
    </div>
  );
};

export default LanguageSwitcher;
