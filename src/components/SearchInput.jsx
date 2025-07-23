import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SearchInput() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [showOverlayInput, setShowOverlayInput] = useState(false);

  const sectionMap = {
    ro: { servicii: "services", despre: "about", contact: "contact", preturi: "pricing", blog: "blog" },
    en: { services: "services", about: "about", contact: "contact", pricing: "pricing", blog: "blog" },
    de: { dienstleistungen: "services", über: "about", kontakt: "contact", preise: "pricing", blog: "blog" },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const lang = i18n.language || "ro";
      const lowerQuery = query.toLowerCase();
      const sectionId = sectionMap[lang]?.[lowerQuery] || lowerQuery;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setShowOverlayInput(false); // închide overlay-ul după căutare
      } else {
        alert(`Nu am găsit secțiunea "${query}" pe pagină.`);
      }
    }
  };

  return (
    <div className="flex items-center relative">
      {/* 🔍 Icon mic pe mobil */}
      <div 
        onClick={() => setShowOverlayInput(true)}
        className="flex items-center justify-center w-12 h-8 border border-custom-btn rounded-full lg:hidden cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-custom-textMenu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </div>

      {/* 🔍 Input pe desktop */}
      <div className="hidden lg:block relative text-gray-600 focus-within:text-gray-900 w-80">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            md:w-36 py-2
            text-sm text-custom-textMenu bg-gray-100
            rounded-full pl-10 pr-4
            focus:outline-none focus:bg-white focus:shadow-md
            border border-custom-btn
          "
          placeholder={t("search.placeholder")}
          autoComplete="off"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* 🔍 Overlay input pe mobil/tabletă */}
      {showOverlayInput && (
        <div className="absolute top-0 right-8 px-2 w-80 z-50">
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => setShowOverlayInput(false)}
            className="
              w-full py-2 text-sm text-custom-textMenu bg-gray-100
              rounded-full pl-10 pr-4
              focus:outline-none focus:bg-white focus:shadow-md
              border border-custom-btn
              transition-all duration-300 ease-in-out
            "
            placeholder={t("search.placeholder")}
            autoComplete="off"
          />
        </div>
      )}
    </div>
  );
}
