import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (sectionId, route = "/") => {
    navigate(route);
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
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
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToHome")}
              >
                <FaHome className="mr-2 text-custom-btn-hover" />
                {t("navbar.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToAbout")}
              >
                <FaInfoCircle className="mr-2 text-custom-btn-hover" />
                {t("navbar.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToServices")}
              >
                <FaCogs className="mr-2 text-custom-btn-hover" />
                {t("navbar.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
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
          className={`lg:hidden origin-top transform transition-all duration-500 overflow-hidden ${
            isMenuOpen
              ? "backdrop-blur-md max-h-screen scale-y-100 opacity-100"
              : "max-h-0 scale-y-0 opacity-0"
          }`}
          style={{
            transformOrigin: "top",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-custom-textMenu font-medium text-lg">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaHome className="mr-2 text-custom-btn" />
                {t("navbar.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaInfoCircle className="mr-2 text-custom-btn" />
                {t("navbar.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaCogs className="mr-2 text-custom-btn" />
                {t("navbar.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaEnvelope className="mr-2 text-custom-btn" />
                {t("navbar.contact")}
              </button>
            </li>
            <li>
              <a
                href="mailto:contact.csweb@gmail.com"
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaMailBulk className="mr-2 text-custom-btn" />
                contact.csweb@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+4915731871996"
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4"
              >
                <FaPhone className="mr-2 text-custom-btn" />
                +49 1573 187 1996
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/CSWEB/61572491164002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-custom-btn text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
