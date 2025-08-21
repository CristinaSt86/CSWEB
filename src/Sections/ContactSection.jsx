import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Form = lazy(() => import("../components/Form"));

const ContactSection = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const formRef = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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

    const target = document.getElementById("contact-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.focusNameInput();
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.heading")} | CSWEB</title>
        <meta name="description" content={t("contact.infoText")} />
        <link
          rel="canonical"
          href="https://www.csweb.pro/contact"
        />
      </Helmet>

      <section
        id="contact-section"
        className="min-h-screen bg-contact-bg bg-center bg-scroll md:bg-fixed bg-cover bg-no-repeat text-custom-textMenu flex items-center justify-center px-4 md:px-8 transition-all duration-1000"
        aria-labelledby="contact-heading"
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto gap-8 px-4 mt-32 md:mt-48 mb-24 md:mb-48 ${
            isInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          } transition-all duration-1000 ease-out`}
        >
          {/* Contact Info */}
          <div className="text-left relative z-10 bg-white p-6 rounded shadow-lg w-full md:w-5/12">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold mb-8"
              itemProp="headline"
            >
              {t("contact.heading")}
            </h2>
            <p className="mb-6">{t("contact.infoText")}</p>
            <address className="mb-6" itemProp="address">
              <p className="mb-4">
                <strong>{t("contact.emailLabel")}</strong>{" "}
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-custom-btn hover:underline text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {t("contact.email")}
                </a>
              </p>
              <p className="mb-6">
                <strong>{t("contact.whatsappLabel")}</strong>{" "}
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="text-custom-btn hover:underline text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {t("contact.phone")}
                </a>
              </p>
            </address>

            <button
              onClick={handleButtonClick}
              type="button"
              className="bg-custom-btn text-white text-xl font-semibold px-16 py-3 rounded focus:outline-none transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-md hover:-translate-y-1"
              aria-label={t("contact.buttonText")}
            >
              {t("contact.buttonText")}
            </button>
          </div>

          {/* Form */}
          <div className="w-full md:w-5/12">
            <Suspense fallback={<div>Loading form...</div>}>
              <Form ref={formRef} aria-labelledby="contact-heading" />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
