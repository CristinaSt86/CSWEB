import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import i18n for translations
import Form from "../components/Form";
import { Helmet } from "react-helmet";
import HeadMetaTags from "../components/HeadMetaTags";

const ContactSection = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const formRef = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Activates when 30% of the element is in the viewport
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(document.getElementById("contact-section"));

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.focusNameInput();
    }
  };

  return (
    <section
      id="contact-section"
      className="min-h-screen bg-contact-bg bg-center bg-scroll md:bg-fixed bg-cover bg-no-repeat text-gray-700 flex items-center justify-center px-4 md:px-8 transition-all duration-1000"
      aria-labelledby="contact-heading"
    >
      <Helmet>
        {/* Structured Data Schema for ContactPage */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "headline": "${t("contact.heading")}",
          "description": "Vrei mai multe informații? Suntem la un mesaj distanță.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Adresa companiei",
            "addressLocality": "București, România",
            "postalCode": "Codul poștal al locației",
            "addressCountry": "RO"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+40 736 690 118",
            "email": "mailto:contact.csweb@gmail.com",
           "availableLanguage": ["ro", "en", "de"]
          },
          "url": "https://www.csweb.pro/contact",
          "mainEntityOfPage": "https://www.csweb.pro/contact",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Acasă",
                "item": "https://www.csweb.pro"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "${t("contact.heading")}",
                "item": "https://www.csweb.pro/contact"
              }
            ]
          }
        }
        `}
        </script>
        <HeadMetaTags />
      </Helmet>

      <div
        className={`flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto gap-8 px-4 mt-24 md:mt-48 mb-24 md:mb-48 ${
          isInView
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        } transition-all duration-1000 ease-out`}
      >
        {/* Contact Information */}
        <div className="text-left relative z-10 bg-white p-6 rounded shadow-lg w-full md:w-5/12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-8"
            itemProp="headline"
          >
            {t("contact.heading")}
          </h2>
          <p className="mb-6">{t("contact.infoText")}</p>
          <address
            className="mb-6"
            itemProp="address"
            aria-label="Informații de contact"
          >
            <p className="mb-4">
              <strong>{t("contact.emailLabel")}</strong>{" "}
              <a
                href={`mailto:${t("contact.email")}`}
                className="text-custom-btn hover:underline text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-label={`Trimite un email la ${t("contact.email")}`}
              >
                {t("contact.email")}
              </a>
            </p>
            <p className="mb-6">
              <strong>{t("contact.whatsappLabel")}</strong>{" "}
              <a
                href={`tel:${t("contact.phone")}`}
                className="text-custom-btn hover:underline text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-label={`Sună la ${t("contact.phone")}`}
              >
                {t("contact.phone")}
              </a>
            </p>
          </address>

          {/* Button: Aici pentru tine */}
          <button
            onClick={handleButtonClick}
            type="submit"
            className="bg-custom-btn text-white px-4 py-2 rounded focus:outline-none transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-md hover:-translate-y-1"
            aria-label={t("contact.buttonText")}
          >
            {t("contact.buttonText")}
          </button>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-5/12">
          <Form ref={formRef} aria-labelledby="contact-heading" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
