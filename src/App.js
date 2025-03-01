import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 🌟 Lazy Load Pages
const LandingPage = lazy(() => import("./components/LandingPage"));
const AboutSection = lazy(() => import("./Sections/AboutSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const ContactSection = lazy(() => import("./Sections/ContactSection"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

// 🌟 Lazy Load Non-Critical Components
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const CookieBanner = lazy(() => import("./components/CookieBanner"));

// 🌟 Lazy Load Payment Page & Load Stripe Dynamically
const PaymentPage = lazy(() => import("./components/PaymentPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Helmet>
          <title>CSWEB - Creare Site-uri & Optimizare SEO</title>

          {/* 🔹 Meta Descriere (SEO Optimized) */}
          <meta
            name="description"
            content="CSWEB îți oferă servicii profesionale de creare site web, optimizare SEO, dezvoltare aplicații și soluții digitale personalizate pentru afacerea ta."
          />
          <meta
            name="keywords"
            content="site web, dezvoltare aplicații, SEO, creare magazin online, promovare digitală, design web modern, soluții web personalizate"
          />
          <meta name="author" content="CSWEB" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* 🔹 Open Graph (Facebook & LinkedIn) */}
          <meta property="og:title" content="CSWEB - Creare Site Web, SEO și Soluții Digitale pentru Afacerea Ta" />
          <meta property="og:description" content="CSWEB oferă soluții digitale personalizate: dezvoltare site web, aplicații mobile, SEO și promovare online pentru afaceri." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://csweb.pro" />
          <meta property="og:image" content="https://csweb.pro/preview.webp" />

          {/* 🔹 Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CSWEB - Creare Site Web, SEO și Soluții Digitale pentru Afacerea Ta" />
          <meta name="twitter:description" content="Creare site web, optimizare SEO și dezvoltare aplicații. Soluții digitale personalizate pentru afacerea ta." />
          <meta name="twitter:image" content="https://csweb.pro/preview.webp" />

          {/* 🔹 Canonical URL */}
          <link rel="canonical" href="https://www.csweb.pro/" />
        </Helmet>

        {/* 🌟 Navbar */}
        <Navbar />

        {/* 🌟 Suspense Blocks for Lazy-Loaded Pages */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* 🌟 Payment Page (Stripe Loads Only When Needed) */}
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </Suspense>

        {/* 🌟 Lazy Load Non-Critical Components */}
        <Suspense fallback={<></>}>
          <ScrollToTopButton />
          <CookieBanner />
        </Suspense>

        {/* 🌟 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
