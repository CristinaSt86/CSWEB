import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo1c.webp";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle menu state
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (sectionId, route = "/") => {
    navigate(route);
    scrollToSection(sectionId); // Navighează la secțiunea dorită
    setIsMenuOpen(false); // Închide meniul
  };

  const handleLogoClick = () => {
    navigate("/");
    scrollToSection("home");
  };

  const handleOutsideClick = (event) => {
    const menu = document.querySelector("nav"); // Selectează navbar-ul
    if (menu && !menu.contains(event.target)) {
      setIsMenuOpen(false); // Închide meniul
    }
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick); // Curățare
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Schema markup pentru Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CS|WEB",
          url: "https://www.csweb.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.csweb.ro/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      <nav
        className="bg-transparent backdrop-blur-md shadow fixed w-full z-10"
        aria-label="Principală navigare a site-ului"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" aria-label="Mergi la secțiunea Acasă">
            <img
              src={Logo}
              alt="CS|WEB Logo - Soluții digitale pentru afacerea ta"
              onClick={handleLogoClick}
              className="h-16 cursor-pointer rounded"
            />
          </a>

          {/* Butonul hamburger pentru mobil */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1"
            onClick={toggleMenu}
            aria-label="Deschide meniul mobil"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-4 h-0.5 bg-black"></span>
            <span className="block w-2 h-0.5 bg-black"></span>
          </button>

          {/* Meniul pentru desktop */}
          <ul
            className={`hidden lg:flex space-x-6 text-custom-textMenu font-semibold text-lg`}
          >
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="text-custom-textMenu hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded md:flex md:flex-row md:items-center md:justify-center"
                aria-label="Navighează la secțiunea Acasă"
                aria-current="page"
              >
                Acasă{" "}
                <FaHome className="ml-1 text-custom-btn-hover inline-block " />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded md:flex md:flex-row md:items-center md:justify-center"
                aria-label="Navighează la secțiunea Despre CS|Web"
              >
                Despre CS|Web{" "}
                <FaInfoCircle className="ml-1 text-custom-btn-hover inline-block" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded md:flex md:flex-row md:items-center md:justify-center"
                aria-label="Navighează la secțiunea Servicii"
              >
                Servicii{" "}
                <FaCogs className="ml-1 text-custom-btn-hover inline-block" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline bg-gray-100 px-3 py-1 rounded md:flex md:flex-row md:items-center md:justify-center"
                aria-label="Navighează la secțiunea Contact"
              >
                Contact{" "}
                <FaEnvelope className="ml-1 text-custom-btn-hover inline-block" />
              </button>
            </li>
          </ul>
        </div>

        {/* Meniul pentru mobil */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center space-y-4 py-6 text-custom-textMenu font-medium text-lg ">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaHome className="mr-2 text-custom-btn" />
                Acasă
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaInfoCircle className="mr-2 text-custom-btn" />
                Despre CS|Web
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaCogs className="mr-2 text-custom-btn" />
                Servicii
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className="flex items-center hover:text-custom-btn-hover hover:underline pb-6"
              >
                <FaEnvelope className="mr-2 text-custom-btn" />
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
