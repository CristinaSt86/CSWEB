import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";

const Form = lazy(() => import("../components/Form"));

const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.25 },
    );

    const target = document.getElementById("contact-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleButtonClick = () => {
    formRef.current?.focusNameInput();
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.heading")} | CSWEB</title>
        <meta name="description" content={t("contact.infoText")} />
        <link rel="canonical" href="https://www.csweb.pro/contact" />
      </Helmet>

      <section
        id="contact-section"
        aria-labelledby="contact-heading"
        className="relative min-h-screen bg-contact-bg bg-center bg-cover bg-no-repeat text-custom-textMenu px-4 md:px-8 py-28 md:py-40 overflow-hidden"
      >
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40" />

        <div
          className={`relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Info */}
          <div className="bg-white/75 backdrop-blur-xl border border-white/60 shadow-xl rounded-[28px] p-7 md:p-10">
            <span className="inline-flex items-center rounded-full bg-custom-btn/10 text-custom-btn px-4 py-2 text-sm font-semibold mb-6">
              {t("contact.freeConsultation")}
            </span>

            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-md mb-6"
            >
              {t("contact.heading")}
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              {t("contact.infoText")}
            </p>

            <div className="grid gap-4 mb-8">
              <a
                href={`mailto:${t("contact.email")}`}
                className="group rounded-2xl border border-gray-200 p-4 hover:border-custom-btn hover:shadow-md transition-all"
              >
                <span className="block text-sm text-gray-500 mb-1">
                  {t("contact.emailLabel")}
                </span>
                <span className="text-custom-btn font-medium group-hover:underline">
                  {t("contact.email")}
                </span>
              </a>

              <a
                href={`tel:${t("contact.phone")}`}
                className="group rounded-2xl border border-gray-200 p-4 hover:border-custom-btn hover:shadow-md transition-all"
              >
                <span className="block text-sm text-gray-500 mb-1">
                  {t("contact.whatsappLabel")}
                </span>
                <span className="text-custom-btn font-medium group-hover:underline">
                  {t("contact.phone")}
                </span>
              </a>
            </div>

            <Button
              label={t("contact.buttonText")}
              onClick={handleButtonClick}
              size="large"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Form */}
          <div className="bg-white/85 backdrop-blur-xl border border-white/60 shadow-xl rounded-[28px] p-5 md:p-8">
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
