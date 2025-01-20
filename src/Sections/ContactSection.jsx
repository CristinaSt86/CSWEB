import React, { useRef } from "react";
import Form from "../components/Form";
import { Helmet } from "react-helmet";

const ContactSection = () => {
  const formRef = useRef();

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.focusNameInput();
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-contact-bg bg-center bg-scroll md:bg-fixed bg-contain text-gray-700 flex items-center justify-center px-4 md:px-8"
      aria-labelledby="contact-heading"
    >
      <Helmet>
        {/* Structured Data Schema for ContactPage */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "headline": "Contactează-ne",
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
            "availableLanguage": "ro"
          },
          "url": "https://www.csweb.pro/contact",
          "mainEntityOfPage": "https://www.csweb.pro/contact"
        }
        `}
        </script>
      </Helmet>

      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto gap-8 px-4 mt-24 md:mt-48 mb-24 md:mb-48">
        {/* Contact Information */}
        <div className="text-left relative z-10 bg-white p-6 rounded shadow-lg w-full md:w-5/12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            itemProp="headline"
          >
            Contactează-ne
          </h2>
          <p className="mb-6">
            Vrei mai multe informații? Suntem la un mesaj distanță.
          </p>
          <address
            className="mb-6"
            itemProp="address"
            aria-label="Informații de contact"
          >
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact.csweb@gmail.com"
                className="text-custom-btn hover:underline text-lg"
                aria-label="Trimite un email la contact.csweb@gmail.com"
              >
                contact.csweb@gmail.com
              </a>
            </p>
            <p className="mb-6">
              <strong>WhatsApp:</strong>{" "}
              <a
                href="tel:+40736690118"
                className="text-custom-btn hover:underline text-lg"
                aria-label="Sună la +40 736 690 118"
              >
                +40 736 690 118
              </a>
            </p>
          </address>

          {/* Button: Aici pentru tine */}
          <button
            onClick={handleButtonClick}
            type="submit"
            className="bg-custom-btn text-white px-4 py-2 rounded focus:outline-none transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-md hover:-translate-y-1"
            aria-label="Contactează-ne pentru mai multe detalii"
          >
            Aici pentru tine <span className="ml-2">&#8594;</span>
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
