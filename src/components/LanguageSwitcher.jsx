import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import { FlagIcon } from "react-flag-kit";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Optimized effect to delay the appearance of the button
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout); // Clean up
  }, []);

  // ✅ Prevents unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleLanguageChange = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      setMenuOpen(false);
    },
    [i18n]
  );

  return (
    <div className="relative">
      {/* Language Button */}
      <div
        className={`fixed top-32 right-0 sm:top-[10rem] md:top-32 md:right-0 rounded-tl md:rounded-tl transform -translate-y-1/2 p-2 bg-custom-btn text-white shadow-lg transition-all duration-500 will-change-transform ${
          isVisible ? "right-0 opacity-100" : "right-[-200px] opacity-0"
        }`}
        style={{ zIndex: 9999 }}
      >
        <FaGlobe
          onClick={toggleMenu}
          className={`text-2xl cursor-pointer hover:text-gray-300 transition-transform duration-500 ${
            menuOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-label="Change Language"
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 bg-custom-btn shadow-lg rounded-bl p-2 flex flex-col gap-4 transition-all duration-500 ease-in-out overflow-hidden will-change-transform ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <button onClick={() => handleLanguageChange("ro")} aria-label="Set language to Romanian">
            <FlagIcon code="RO" size={30} />
          </button>
          <button onClick={() => handleLanguageChange("de")} aria-label="Set language to German">
            <FlagIcon code="DE" size={30} />
          </button>
          <button onClick={() => handleLanguageChange("en")} aria-label="Set language to English">
            <FlagIcon code="GB" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LanguageSwitcher); // ✅ Memoized component to prevent unnecessary re-renders
