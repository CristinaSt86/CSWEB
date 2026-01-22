import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-5xl px-6 pt-36 pb-20 my-20 text-custom-textMenu">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
        {t("privacyPolicy.title")}
      </h1>

      {/* Intro */}
      <p className="mb-10 text-lg leading-relaxed">
        {t("privacyPolicy.intro")}
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        {t("privacyPolicy.section1Title")}
      </h2>
      <p className="mb-8 leading-relaxed">
        {t("privacyPolicy.section1Content")}
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        {t("privacyPolicy.section2Title")}
      </h2>
      <p className="mb-8 leading-relaxed">
        {t("privacyPolicy.section2Content")}
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        {t("privacyPolicy.section3Title")}
      </h2>
      <p className="mb-8 leading-relaxed">
        {t("privacyPolicy.section3Content")}
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        {t("privacyPolicy.section4Title")}
      </h2>
      <p className="mb-8 leading-relaxed">
        {t("privacyPolicy.section4Content")}
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        {t("privacyPolicy.section5Title")}
      </h2>
      <p className="mb-8 leading-relaxed">
        {t("privacyPolicy.section5Content")}
      </p>

      {/* Contact block */}
      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <ul className="space-y-3">
          <li>
            <strong>{t("privacyPolicy.phoneWhatsapp")}:</strong>{" "}
            <a href="tel:+4915738171996" className="text-blue-600 hover:underline">
              +49 157 38171996
            </a>
          </li>
          <li>
            <strong>{t("privacyPolicy.phone")}:</strong>{" "}
            <a href="tel:+4915738171996" className="text-blue-600 hover:underline">
              +49 157 38171996
            </a>
          </li>
          <li>
            <strong>{t("privacyPolicy.email")}:</strong>{" "}
            <a
              href="mailto:contact.csweb@gmail.com"
              className="text-blue-600 hover:underline"
            >
              contact.csweb@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
