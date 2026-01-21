import React, { useEffect, useMemo, useState } from "react";
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
  const lng =
    pathParts[1] ||
    localStorage.getItem("i18nextLng") ||
    i18n.language ||
    "ro";

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // scroll-mt în Tailwind ajută mult; dar facem și fallback cu offset
    const yOffset = -110; // înălțime header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleMenuClick = (sectionId) => {
    // dacă ești deja pe /{lng}, doar scroll
    const onSamePage = location.pathname === `/${lng}` || location.pathname === `/${lng}/`;
    if (onSamePage) {
      scrollToSection(sectionId);
    } else {
      navigate(`/${lng}`);
      setTimeout(() => scrollToSection(sectionId), 250);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    const currentLang =
      localStorage.getItem("i18nextLng") || i18n.language || "ro";

    const onSamePage =
      location.pathname === `/${currentLang}` ||
      location.pathname === `/${currentLang}/`;

    if (onSamePage) {
      scrollToSection("home");
    } else {
      navigate(`/${currentLang}`);
      setTimeout(() => scrollToSection("home"), 250);
    }
  };

  // ===== Active section (dot) =====
  const sectionIds = useMemo(() => ["home", "about", "services", "contact"], []);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let observer;

    const setup = () => {
      const els = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!els.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
            )[0];

          if (visible?.target?.id) setActiveSection(visible.target.id);
        },
        {
          // ajustează după header (fixed)
          root: null,
          rootMargin: "-45% 0px -45% 0px",
          threshold: [0.05, 0.15, 0.3, 0.45],
        }
      );

      els.forEach((el) => observer.observe(el));
    };

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(setup);
      return () => cancelAnimationFrame(raf2);
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (observer) observer.disconnect();
    };
  }, [sectionIds, location.pathname]);

  // ===== lock scroll on mobile menu =====
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const navBtnClass = (id) => {
    const isActive = activeSection === id;
    return `
      group relative inline-flex items-center gap-2
      px-3 py-2 rounded-lg
      text-base font-semibold
      transition-all duration-200
      ${isActive ? "text-custom-btn" : "text-slate-900/90 hover:text-custom-btn"}
      hover:bg-white/50
      focus:outline-none
    `;
  };

  const dotClass = (id) => {
    const isActive = activeSection === id;
    return `
      pointer-events-none
      absolute left-1/2 -translate-x-1/2 -bottom-[8px]
      h-2 w-2 rounded-full bg-custom-btn
      transition-all duration-200
      ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-60"}
    `;
  };

  return (
    <>
      <nav className="bg-white/30 backdrop-blur-md shadow fixed w-full z-50">
        {/* MOBILE: logo centru (mx-auto), hamburger stânga (absolute) */}
        {/* DESKTOP: logo stânga, meniu dreapta */}
        <div className="container mx-auto px-4 py-4 relative flex items-center justify-center lg:justify-between">
          {/* Hamburger left on mobile (NU schimbăm) */}
          <button
            className="flex lg:hidden flex-col justify-center items-center space-y-1 absolute left-4 top-1/2 -translate-y-1/2"
            onClick={toggleMenu}
            aria-label={t("navbar.openMenu")}
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-4 h-0.5 bg-black"></span>
            <span className="block w-2 h-0.5 bg-black"></span>
          </button>

          {/* LOGO: centru pe mobil / STÂNGA pe desktop */}
          <a
            href="#home"
            aria-label={t("navbar.navigateToHome")}
            onClick={handleLogoClick}
            className="mx-auto lg:mx-0 lg:order-1"
          >
            <img
              src="/images/logo1c.webp"
              alt={t("navbar.logoAlt")}
              width="64"
              height="64"
              className="h-16 w-16 cursor-pointer rounded shadow-lg bg-slate-200"
            />
          </a>

          {/* Desktop Menu: DREAPTA */}
          <ul className="hidden lg:flex items-center gap-2 text-custom-textMenu font-semibold text-lg whitespace-nowrap lg:order-2">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className={navBtnClass("home")}
                aria-current={activeSection === "home" ? "page" : undefined}
              >
                <FaHome className="text-custom-btn-hover group-hover:text-custom-btn" />
                {t("navbar.home")}
                <span className={dotClass("home")} />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMenuClick("about")}
                className={navBtnClass("about")}
                aria-current={activeSection === "about" ? "page" : undefined}
              >
                <FaInfoCircle className="text-custom-btn-hover group-hover:text-custom-btn" />
                {t("navbar.about")}
                <span className={dotClass("about")} />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMenuClick("services")}
                className={navBtnClass("services")}
                aria-current={activeSection === "services" ? "page" : undefined}
              >
                <FaCogs className="text-custom-btn-hover group-hover:text-custom-btn" />
                {t("navbar.services")}
                <span className={dotClass("services")} />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMenuClick("contact")}
                className={navBtnClass("contact")}
                aria-current={activeSection === "contact" ? "page" : undefined}
              >
                <FaEnvelope className="text-custom-btn-hover group-hover:text-custom-btn" />
                {t("navbar.contact")}
                <span className={dotClass("contact")} />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (NU umblăm la logică/layout: listă verticală) */}
        <div
          className={`lg:hidden origin-top transform transition-all duration-500 text-custom-textMenu overflow-hidden ${
            isMenuOpen
              ? "backdrop-blur-md max-h-screen scale-y-100 opacity-100"
              : "max-h-0 scale-y-0 opacity-0"
          }`}
        >
          <div className="flex flex-row w-full px-6 py-10">
            <div className="w-[1px] bg-custom-btn rounded self-stretch mr-6" />

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

              <hr className="w-full border-t border-gray-300 my-4" />

              <li>
                <a
                  href="mailto:contact.csweb@gmail.com"
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
                >
                  <FaMailBulk className="mr-2 text-custom-btn" />
                  contact.csweb@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+4915738171996"
                  className="flex items-center hover:text-custom-btn-hover hover:underline pb-2"
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
