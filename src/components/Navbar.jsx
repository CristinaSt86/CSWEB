import React, { useState } from "react";
import Logo from "../images/logo1c.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              onClick={() => scrollToSection("home")}
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
                onClick={() => scrollToSection("home")}
                className="text-custom-textMenu hover:text-custom-btn-hover hover:underline"
                aria-label="Navighează la secțiunea Acasă"
                aria-current="page"
              >
                Acasă
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline"
                aria-label="Navighează la secțiunea Despre CS|Web"
              >
                Despre CS|Web
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline"
                aria-label="Navighează la secțiunea Servicii"
              >
                Servicii
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-custom-btn-hover hover:underline"
                aria-label="Navighează la secțiunea Contact"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Meniul pentru mobil */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center space-y-4 py-4 text-custom-textMenu">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className=" hover:text-custom-btn-hover"
              >
                Acasă
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className=" hover:text-custom-btn-hover"
              >
                Despre CS|Web
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className=" hover:text-custom-btn-hover"
              >
                Servicii
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className=" hover:text-custom-btn-hover"
              >
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
