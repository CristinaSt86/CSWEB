import React from "react";
import { useTranslation } from "react-i18next";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 pt-36 pb-16 my-20 text-custom-textMenu max-w-5xl">
      <h1 className="text-4xl font-bold mb-8">
        {t("impressum.operator")}
      </h1>

      <p className="mb-8">{t("impressum.descriere")}</p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("impressum.contactTitle")}
      </h2>

      <p className="mb-2">
        <strong>{t("impressum.contact.nameLabel")}:</strong>{" "}
        {t("impressum.contact.name")}
      </p>

      <p className="mb-2">
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
          +49 157 38171996
        </a>
      </p>

      <p className="mb-8">
        <strong>{t("impressum.contact.addressLabel")}:</strong>{" "}
        {t("impressum.contact.address")}
      </p>

      {/* Legal */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("impressum.legalTitle")}
      </h2>

      <p className="mb-2">
        <strong>{t("impressum.legal.responsibleLabel")}:</strong>{" "}
        {t("impressum.legal.responsible")}
      </p>

      <p className="mb-2">
        <strong>{t("impressum.legal.taxNumberLabel")}:</strong>{" "}
        {t("impressum.legal.taxNumber")}
      </p>

      <p className="mb-8">
        <strong>{t("impressum.legal.vatLabel")}:</strong>{" "}
        {t("impressum.legal.vat")}
      </p>

      {/* Disclaimer */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("impressum.disclaimerTitle")}
      </h2>

      <p className="text-sm text-gray-600">
        {t("impressum.disclaimer")}
      </p>
    </section>
  );
};

export default Impressum;
