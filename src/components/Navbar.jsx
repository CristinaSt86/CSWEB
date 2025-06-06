import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaPhone,
  FaMailBulk,
  FaFacebook,
} from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lng = pathParts[1];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (sectionId) => {
    navigate(`/${lng}`);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Obține limba salvată în localStorage sau limba activă din i18next
    const currentLang =
      localStorage.getItem("i18nextLng") || i18n.language || "ro"; // Limba implicită: 'ro'

    // Navighează la homepage cu limba aleasă
    navigate(`/${currentLang}`);
    scrollToSection("home");
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <>
      {/* ✅ Fixed Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CSWeb",
          url: "https://www.csweb.ro",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.csweb.ro/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          inLanguage: ["ro", "en", "de"],
          alternateName: [
            "CSWeb - Română",
            "CSWeb - English",
            "CSWeb - Deutsch",
          ],
        })}
      </script>

      <nav className="bg-white/30 backdrop-blur-md shadow fixed  w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" aria-label={t("navbar.navigateToHome")}>
            <img
              src="/images/logo1c.webp"
              alt={t("navbar.logoAlt")}
              onClick={handleLogoClick}
              width="64"
              height="64" // ✅ Prevents CLS
              className="h-16 w-16 cursor-pointer rounded shadow-lg bg-slate-200"
            />
          </a>

          {/* ✅ Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1"
            onClick={toggleMenu}
            aria-label={t("navbar.openMenu")}
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-4 h-0.5 bg-black"></span>
            <span className="block w-2 h-0.5 bg-black"></span>
          </button>

          {/* ✅ Desktop Menu (With FA Icons) */}
          <ul className="hidden lg:flex space-x-6 text-custom-textMenu font-semibold text-lg">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className=" hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToHome")}
              >
                <FaHome className="mr-2 text-custom-btn-hover" />
                {t("navbar.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className=" hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToAbout")}
              >
                <FaInfoCircle className="mr-2 text-custom-btn-hover" />
                {t("navbar.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className=" hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToServices")}
              >
                <FaCogs className="mr-2 text-custom-btn-hover" />
                {t("navbar.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className=" hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToContact")}
              >
                <FaEnvelope className="mr-2 text-custom-btn-hover" />
                {t("navbar.contact")}
              </button>
            </li>
          </ul>
        </div>

      {/* ✅ Optimized Mobile Menu */}
<div
  className={`lg:hidden origin-top transform transition-all duration-500 text-custom-textMenu overflow-hidden ${
    isMenuOpen
      ? "backdrop-blur-md max-h-screen scale-y-100 opacity-100"
      : "max-h-0 scale-y-0 opacity-0"
  }`}
>

          <div className="flex flex-row w-full px-6 py-10">
            {/* 🔸 Linie verticală subțire */}
            <div className="w-[1px] bg-custom-btn rounded self-stretch mr-6" />

            {/* 🔹 Meniul */}
              <ul className="flex flex-col items-start space-y-4 text-custom-textMenu font-medium text-lg pl-1">
              <li>
                <button
                  onClick={() => handleMenuClick("home")}
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaHome className="mr-2 text-custom-btn" />
                  {t("navbar.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("about")}
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaInfoCircle className="mr-2 text-custom-btn" />
                  {t("navbar.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("services")}
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaCogs className="mr-2 text-custom-btn" />
                  {t("navbar.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick("contact")}
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaEnvelope className="mr-2 text-custom-btn" />
                  {t("navbar.contact")}
                </button>
              </li>

              {/* 🔸 Separator */}
              <hr className="w-full border-t border-gray-300 my-4" />

              {/* 🔹 Email */}
              <li>
                <a
                  href="mailto:contact.csweb@gmail.com"
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaMailBulk className="mr-2 text-custom-btn" />
                  contact.csweb@gmail.com
                </a>
              </li>

              {/* 🔹 Telefon */}
              <li>
                <a
                  href="tel:+4915731871996"
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaPhone className="mr-2 text-custom-btn" />
                  +49 1573 187 1996
                </a>
              </li>

              {/* 🔹 Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/people/CSWEB/61572491164002/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-custom-btn text-2xl hover:text-custom-btn-hover" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
