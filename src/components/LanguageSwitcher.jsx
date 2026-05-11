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

      i18n.changeLanguage(newLang);

      localStorage.setItem("i18nextLng", newLang);

      const newPath = location.pathname.replace(
        /^\/(ro|de|en)/,
        `/${newLang}`
      );

      navigate(newPath + location.search);

      setMenuOpen(false);
    },
    [i18n, location, navigate]
  );

  return (
    <div className="relative">
      {/* Floating trigger */}
      <div
        className="
          fixed
          top-28
          right-0
          sm:top-[10rem]
          md:top-32
          md:right-0
          rounded-tl-2xl
          rounded-bl-2xl
          p-3
          bg-white/55
          backdrop-blur-xl
          border border-white/40
          text-custom-btn
          shadow-xl
          transition-all duration-300
        "
        style={{ zIndex: 100 }}
      >
        {/* Translate icon */}
        <MdTranslate
          onClick={toggleMenu}
          className={`
            text-2xl
            cursor-pointer
            transition-all duration-300 ease-in-out
            hover:text-custom-btn-hover
            hover:scale-110
            ${menuOpen ? "rotate-180" : "rotate-0"}
          `}
          aria-label="Change Language"
        />

        {/* Dropdown */}
        <div
          className={`
            absolute
            right-0
            mt-3
            bg-white/50
            backdrop-blur-xl
            border border-white/40
            shadow-xl
            rounded-2xl
            p-3
            flex flex-col
            gap-5
            transition-all duration-300 ease-out
            ${
              menuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <button
            onClick={() => handleLanguageChange("ro")}
            aria-label="Set language to Romanian"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FlagIcon code="RO" size={30} />
          </button>

          <button
            onClick={() => handleLanguageChange("de")}
            aria-label="Set language to German"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FlagIcon code="DE" size={30} />
          </button>

          <button
            onClick={() => handleLanguageChange("en")}
            aria-label="Set language to English"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FlagIcon code="GB" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LanguageSwitcher);