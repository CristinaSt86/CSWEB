import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LanguageLayout from "./components/LanguageLayout";

// Lazy-loaded pages
const LandingPage = lazy(() => import("./components/LandingPage"));
const AboutSection = lazy(() => import("./Sections/AboutSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const ContactSection = lazy(() => import("./Sections/ContactSection"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const Impressum = lazy(() => import("./components/Impressum"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const CookieBanner = lazy(() => import("./components/CookieBanner"));
const PaymentPage = lazy(() => import("./components/PaymentPage"));
const ArticlesList = lazy(() => import("./components/ArticlesList"));
const ArticlePage = lazy(() => import("./components/ArticlePage"));
const Footer = lazy(() => import("./components/Footer"));

function AppContent() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/(ro|en|de)/, "").trim();

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta name="keywords" content={t("seo.keywords")} />
        <meta name="author" content="CSWEB" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("seo.og_title")} />
        <meta property="og:description" content={t("seo.og_description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csweb.pro" />
        <meta property="og:image" content="https://csweb.pro/preview.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.twitter_title")} />
        <meta
          name="twitter:description"
          content={t("seo.twitter_description")}
        />
        <meta name="twitter:image" content="https://csweb.pro/preview.webp" />

        <link
          rel="alternate"
          hreflang="ro"
          href={`https://csweb.pro/ro${currentPath}`}
        />
        <link
          rel="alternate"
          hreflang="de"
          href={`https://csweb.pro/de${currentPath}`}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`https://csweb.pro/en${currentPath}`}
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href={`https://csweb.pro/de${currentPath}`}
        />
      </Helmet>

      <Navbar />
      <LanguageSwitcher />

      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/de" replace />} />
            <Route
              path="/:lng"
              element={
                <LanguageLayout>
                  <LandingPage />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/about"
              element={
                <LanguageLayout>
                  <AboutSection />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/services"
              element={
                <LanguageLayout>
                  <ServicesSection />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/contact"
              element={
                <LanguageLayout>
                  <ContactSection />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/terms-and-conditions"
              element={
                <LanguageLayout>
                  <TermsAndConditions />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/privacy-policy"
              element={
                <LanguageLayout>
                  <PrivacyPolicy />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/impressum"
              element={
                <LanguageLayout>
                  <Impressum />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/payment"
              element={
                <LanguageLayout>
                  <PaymentPage />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/articole"
              element={
                <LanguageLayout>
                  <ArticlesList />
                </LanguageLayout>
              }
            />
            <Route
              path="/:lng/articole/:slug"
              element={
                <LanguageLayout>
                  <ArticlePage />
                </LanguageLayout>
              }
            />
            <Route path="*" element={<Navigate to="/de" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={<></>}>
        <Footer />
        <ScrollToTopButton />
        <CookieBanner />
      </Suspense>
    </div>
  );
}

export default AppContent;
