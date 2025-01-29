import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Importă useNavigate
import { Link as ScrollLink } from "react-scroll"; // Importă Link din react-scroll

const Footer = () => {
  const navigate = useNavigate();

  // Funcție care gestionează scroll-ul și navigarea
  const handleNavigation = (sectionId) => {
    navigate("/"); // Navighează către LandingPage
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll lin la secțiunea respectivă
      }
    }, 100); // Așteaptă ca DOM-ul să fie actualizat
  };

  return (
    <footer
      className="bg-transparent backdrop-blur-md shadow-2xl text-center py-4 text-custom-textMenu"
      aria-labelledby="footer-heading"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <h2 id="footer-heading" className="sr-only">
        Secțiunea de drepturi de autor
      </h2>

      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="mb-4 sm:mb-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={32} color="#372a25" />
            </a>
          </div>

          <div>
            <p className="text-xs p-4">
              &copy; 2025 <span itemProp="name">CS|WEB</span>. Toate drepturile
              rezervate.
            </p>
          </div>

          {/* Link-uri către secțiuni */}
          <div className="flex space-x-4 text-xs sm:mt-4 md:mt-0 items-center justify-center p-2 border-2 border-custom-btn rounded text-custom-textMenu">
            <button
              onClick={() => handleNavigation("home")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Acasă
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Despre
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Servicii
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex space-x-4 text-xs mt-4 sm:mt-0">
            <Link
              to="/terms-and-conditions"
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Termeni si condiții
            </Link>
            <Link
              to="/privacy-policy"
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              Politica de confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
