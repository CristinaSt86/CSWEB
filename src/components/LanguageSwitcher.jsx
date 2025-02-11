// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { FaGlobe } from "react-icons/fa";
// import Flag from "react-world-flags";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Show icon after a few seconds for the entry effect
//     setTimeout(() => setIsVisible(true), 500);
//   }, []);

//   const handleLanguageChange = () => {
//     // Toggle between 'ro' and 'en' languages
//     const newLang = i18n.language === "ro" ? "en" : "ro";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <>
//       <div
//         className={`fixed top-32 right-0 sm:top-[10rem] md:top-32 md:right-0 md:rounded-s-lg transform -translate-y-1/2 p-2 bg-custom-btn text-white rounded-s-xl shadow-lg transition-all duration-500 ${
//           isVisible ? "right-0 opacity-100" : "right-[-200px] opacity-0"
//         }`}
//         style={{ zIndex: 9999 }}
//       >
//         {/* Language switcher icon */}
//         <FaGlobe
//           onClick={handleLanguageChange}
//           className="text-2xl cursor-pointer hover:text-gray-300 transition-all duration-300"
//         />
//       </div>
//       <menu>
//         <Flag code="RO" alt="Romania" style={{ width: 50, height: 30 }} />
//         <Flag code="DE" alt="Germany" style={{ width: 50, height: 30 }} />
//         <Flag code="GB" alt="English" style={{ width: 50, height: 30 }} />
//       </menu>
//     </>
//   );
// };

// export default LanguageSwitcher;


import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // 🔄 Schimbă limba site-ului
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-32 right-0 sm:top-[10rem] md:top-32 md:right-0 rounded-tl md:rounded-tl transform -translate-y-1/2 p-2 bg-custom-btn text-white  shadow-lg transition-all duration-500 ${
          isVisible ? "right-0 opacity-100" : "right-[-200px] opacity-0"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Iconița de schimbare a limbii cu animație */}
        <FaGlobe
          onClick={toggleMenu}
          className={`text-2xl cursor-pointer hover:text-gray-300 transition-transform duration-500 ${
            menuOpen ? "rotate-180" : "rotate-0"
          }`}
        />

        {/* Submeniu animat */}
        <div
          className={`absolute right-0 mt-2 bg-custom-btn shadow-lg rounded-bl  p-2 flex flex-col gap-2 transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <button onClick={() => handleLanguageChange("ro")}>
            <Flag code="RO" alt="Romania" style={{ width: 50, height: 30 }} />
          </button>
          <button onClick={() => handleLanguageChange("de")}>
            <Flag code="DE" alt="Germany" style={{ width: 50, height: 30 }} />
          </button>
          <button onClick={() => handleLanguageChange("en")}>
            <Flag code="GB" alt="English" style={{ width: 50, height: 30 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
