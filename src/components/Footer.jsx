import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18n for translations

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook

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
      className="bg-transparent backdrop-blur-md shadow-2xl text-center py-4 text-custom-textMenu min-h-[50px] sm:min-h-[80px]"
      aria-labelledby="footer-heading"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <h2 id="footer-heading" className="sr-only">
        Secțiunea de drepturi de autor
      </h2>

      <div className="container mx-auto px-4">
        <div className="z-10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=61572491164002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={32} className="w-8 h-8" color="#372a25" />
            </a>
          </div>

          <div>
            <p className="text-xs p-4  min-h-[20px]">
              {" "}
              {t("footer.copyright") || "© 2025 CS|WEB"}
            </p>
          </div>

          {/* Link-uri către secțiuni */}
          <div className="flex space-x-4 text-xs sm:mt-4 md:mt-0 items-center justify-center p-2 border-2 border-custom-btn rounded text-custom-textMenu">
            <button
              onClick={() => handleNavigation("home")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              {t("footer.home")}
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              {t("footer.about")}
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              {t("footer.services")}
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className=" hover:text-custom-btn-hover hover:underline transition-colors"
            >
              {t("footer.contact")}
            </button>
          </div>

          <div className="flex flex-col gap-4 md:flex-row space-x-4 text-xs mt-4 sm:mt-0">
            <Link
              to="/terms-and-conditions"
              className="hover:text-custom-btn-hover hover:underline transition-colors"
              aria-label="Read our Terms and Conditions"
            >
              {t("footer.termsAndConditions")}
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-custom-btn-hover hover:underline transition-colors"
              aria-label="Read our Privacy Policy"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              to="/impressum"
              className="hover:text-custom-btn-hover hover:underline transition-colors"
              aria-label="Read our Privacy Policy"
            >
              {t("footer.impressum")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
