import React from "react";
import { useTranslation } from "react-i18next"; // Import i18n pentru traduceri

const TermsAndConditions = () => {
  const { t } = useTranslation(); // Initializează hook-ul de traducere

  return (
    <section className="container mx-auto px-6 pt-36 pb-16 overflow-x-hidden my-20 text-custom-textMenu">
      <h1 className="text-3xl font-bold my-8 mx-2 md:mx-0 md:mb-14  text-center md:text-left">
        {t("termsAndConditions.title")}
      </h1>
      <p className=" mb-8">{t("termsAndConditions.intro")}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        {t("termsAndConditions.section1Title")}
      </h2>
      <p className=" mb-8">{t("termsAndConditions.section1Content")}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        {t("termsAndConditions.section2Title")}
      </h2>
      <p className=" mb-8">{t("termsAndConditions.section2Content")}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        {t("termsAndConditions.section3Title")}
      </h2>
      <p className=" mb-8">{t("termsAndConditions.section3Content")}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        {t("termsAndConditions.section5Title")}
      </h2>
      <p className=" mb-8">{t("termsAndConditions.section5Content")}</p>
      <ul className=" list-disc list-inside mb-2">
        <li>
          <strong>{t("termsAndConditions.phoneWhatsapp")}:</strong>{" "}
          <a href="tel:+4915731871996" className="text-blue-500">
            +4915731871996
          </a>
        </li>
        <li>
          <strong>{t("termsAndConditions.phone")}:</strong>{" "}
          <a href="tel:+4915731871996" className="text-blue-500">
            +4915731871996
          </a>
        </li>
        <li>
          <strong>{t("termsAndConditions.email")}:</strong>{" "}
          <a href="mailto:contact.csweb@gmail.com" className="text-blue-500">
            contact.csweb@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
};

export default TermsAndConditions;
