import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo1c.webp";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Importă hook-ul

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();  // Folosește useTranslation pentru a obține funcția t

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (sectionId, route = "/") => {
    navigate(route);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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

        <button
          className="lg:hidden flex flex-col justify-center items-center space-y-1"
          onClick={toggleMenu}
          aria-label={t("navbar.openMenu")}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-4 h-0.5 bg-black"></span>
          <span className="block w-2 h-0.5 bg-black"></span>
        </button>

        <ul className="hidden lg:flex space-x-6 text-custom-textMenu font-semibold text-lg">
          <li>
            <button
              onClick={() => handleMenuClick("home")}
              className="text-custom-textMenu hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded"
            >
              {t("navbar.home")} <FaHome className="ml-1 text-custom-btn-hover inline-block" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuClick("about")}
              className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded"
            >
              {t("navbar.about")} <FaInfoCircle className="ml-1 text-custom-btn-hover inline-block" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuClick("services")}
              className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded"
            >
              {t("navbar.services")} <FaCogs className="ml-1 text-custom-btn-hover inline-block" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuClick("contact")}
              className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded"
            >
              {t("navbar.contact")} <FaEnvelope className="ml-1 text-custom-btn-hover inline-block" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
