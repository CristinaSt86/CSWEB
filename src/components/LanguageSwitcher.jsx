import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";
import { MdTranslate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleLanguageChange = useCallback(
    (newLang) => {
      if (!["ro", "de", "en"].includes(newLang)) return;

      // Update limba în i18n și localStorage
      i18n.changeLanguage(newLang);
      localStorage.setItem("i18nextLng", newLang);

      // Înlocuiește limba din URL cu cea nouă
      const newPath = location.pathname.replace(/^\/(ro|de|en)/, `/${newLang}`);
      navigate(newPath + location.search);

      setMenuOpen(false);
    },
    [i18n, location, navigate]
  );

  return (
    <div className="relative">
      <div
        className={`fixed top-28 right-0 sm:top-[10rem] md:top-32 md:right-0 rounded-tl p-2 bg-white/70 text-custom-btn shadow-lg transition-opacity duration-500 ease-in-out transform`}
        style={{ zIndex: 100 }}
      >
        <MdTranslate
          onClick={toggleMenu}
          className={`text-xl cursor-pointer hover:text-custom-btn-hover transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-180" : "rotate-0"}`}
          aria-label="Change Language"
        />

        <div
          className={`absolute right-0 mt-2 bg-white/70 shadow-lg rounded-bl p-2 pt-4 flex flex-col gap-5 transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-100 gap-6 scale-100" : "opacity-0 scale-95 pointer-events-none"
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

export default React.memo(LanguageSwitcher);
