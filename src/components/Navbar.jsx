import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../images/logo1c.webp";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa";

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

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: t("navbar.siteName"),
          url: "https://www.csweb.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.csweb.ro/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      <nav className="bg-transparent backdrop-blur-md shadow fixed w-full z-10">
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
                {t("navbar.home")} <FaHome className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToAbout")}
              >
                {t("navbar.about")} <FaInfoCircle className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToServices")}
              >
                {t("navbar.services")} <FaCogs className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded flex items-center"
                aria-label={t("navbar.navigateToContact")}
              >
                {t("navbar.contact")} <FaEnvelope className="ml-1 text-custom-btn-hover" />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-700 ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
          <ul className="flex flex-col items-center space-y-4 py-6 text-custom-textMenu font-medium text-lg">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaHome className="mr-2 text-custom-btn" />
                {t("navbar.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaInfoCircle className="mr-2 text-custom-btn" />
                {t("navbar.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaCogs className="mr-2 text-custom-btn" />
                {t("navbar.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaEnvelope className="mr-2 text-custom-btn" />
                {t("navbar.contact")}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
