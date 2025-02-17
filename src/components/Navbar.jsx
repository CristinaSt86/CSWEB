import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../images/logo1c.webp";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup pentru a reseta overflow-ul când componenta este demontată
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CSWeb", // Numele site-ului tău
          url: "https://www.csweb.ro", // URL-ul site-ului tău
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.csweb.ro/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          inLanguage: ["ro", "en", "de"], // Limbile disponibile pe site-ul tău
          alternateName: {
            ro: "CSWeb - Română",
            en: "CSWeb - English",
            de: "CSWeb - Deutsch",
          },
        })}
      </script>

      <nav className="bg-transparent backdrop-blur-md shadow fixed  w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" aria-label={t("navbar.navigateToHome")}>
            <img
              src={Logo}
              alt={t("navbar.logoAlt")}
              onClick={handleLogoClick}
              className="h-16 cursor-pointer rounded"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1"
            onClick={toggleMenu}
            aria-label={t("navbar.openMenu")}
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-4 h-0.5 bg-black"></span>
            <span className="block w-2 h-0.5 bg-black"></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-custom-textMenu font-semibold text-lg">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="text-custom-textMenu hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToHome")}
              >
                {t("navbar.home")}{" "}
                <FaHome className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToAbout")}
              >
                {t("navbar.about")}{" "}
                <FaInfoCircle className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToServices")}
              >
                {t("navbar.services")}{" "}
                <FaCogs className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToContact")}
              >
                {t("navbar.contact")}{" "}
                <FaEnvelope className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden h-screen shadow-lg transition-all duration-700 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-90"
          } overflow-hidden`}
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
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-4 "
              >
                <FaFacebook className="mr-2 text-custom-btn text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
