import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageLayout = ({ children }) => {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && ["ro", "en", "de"].includes(lng)) {
      i18n.changeLanguage(lng);
      localStorage.setItem("i18nextLng", lng);
    }
  }, [lng, i18n]);

  return <>{children}</>;
};

export default LanguageLayout;
