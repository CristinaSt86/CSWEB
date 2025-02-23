import React from "react";
import { useTranslation } from "react-i18next"; // Import i18n pentru traduceri

const TermsAndConditions = () => {
  const { t } = useTranslation(); // Initializează hook-ul de traducere

  return (
    <section className="container mx-auto px-6 pt-36 pb-16 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        {t("termsAndConditions.title")}
      </h1>
      <p className="text-gray-700 mb-4">{t("termsAndConditions.intro")}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("termsAndConditions.section1Title")}
      </h2>
      <p className="text-gray-700 mb-4">
        {t("termsAndConditions.section1Content")}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("termsAndConditions.section2Title")}
      </h2>
      <p className="text-gray-700 mb-4">
        {t("termsAndConditions.section2Content")}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("termsAndConditions.section3Title")}
      </h2>
      <p className="text-gray-700 mb-4">
        {t("termsAndConditions.section3Content")}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("termsAndConditions.section5Title")}
      </h2>
      <p className="text-gray-700 mb-4">
        {t("termsAndConditions.section5Content")}
      </p>
      <ul className="text-gray-700 list-disc list-inside mb-4">
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
