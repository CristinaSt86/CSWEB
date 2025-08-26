import React from "react";
import { useTranslation } from "react-i18next";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 pt-36 pb-16 overflow-x-hidden my-20 text-custom-textMenu">
      <h1 className="text-4xl font-bold mb-8 ">
        {t("impressum.operator")}
      </h1>
      <p className=" mb-4">{t("impressum.descriere")}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("impressum.contactTitle")}
      </h2>
      <p className="mb-2">
        <strong>{t("impressum.contact.nameLabel")}:</strong> Cristina Stoian
      </p>
      <p className=" mb-2">
        <strong>{t("impressum.contact.emailLabel")}:</strong>{" "}
        <a
          href={`mailto:${t("impressum.contact.email")}`}
          className="text-blue-500"
        >
          {t("impressum.contact.email")}
        </a>
      </p>
      <p className="mb-2">
        <strong>{t("impressum.contact.phoneLabel")}:</strong>{" "}
        <a href="tel:+4915738171996" className="text-blue-500">
          +4915738171996
        </a>
      </p>
      <p className="mb-4">
        <strong>{t("impressum.contact.addressLabel")}:</strong>{" "}
        {t("impressum.contact.adresa")}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t("impressum.disclaimerTitle")}
      </h2>
      <p className="text-gray-600 text-sm">{t("impressum.disclaimer")}</p>
    </section>
  );
};

export default Impressum;
