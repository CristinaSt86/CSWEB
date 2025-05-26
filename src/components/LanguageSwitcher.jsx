import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";
import { MdTranslate } from "react-icons/md";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleLanguageChange = useCallback(
    (lang) => {
      i18n.changeLanguage(lang); // Schimbă limba
      localStorage.setItem("i18nextLng", lang); // Salvează limba în localStorage
      setMenuOpen(false);
    },
    [i18n]
  );

  return (
    <div className="relative">
      {/* Language Button */}
      <div
        className={`fixed top-28 right-0 sm:top-[10rem] md:top-32 md:right-0 rounded-tl md:rounded-tl p-2 bg-custom-btn text-white shadow-lg transition-opacity duration-500 ease-in-out transform`}
        style={{ zIndex: 100 }}
      >
        <MdTranslate
          onClick={toggleMenu}
          className={`text-2xl cursor-pointer hover:text-gray-200 transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180" : "rotate-0"}`}
          aria-label="Change Language"
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 bg-custom-btn shadow-lg rounded-bl p-2 flex flex-col gap-5 transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-100 gap-6 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
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

export default React.memo(LanguageSwitcher);
