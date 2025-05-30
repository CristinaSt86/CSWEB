import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { HelmetProvider } from "react-helmet-async"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
