import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieBanner from "./components/CookieBanner";



const LandingPage = lazy(() => import("./components/LandingPage"));
const AboutSection = lazy(() => import("./Sections/AboutSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const ContactSection = lazy(() => import("./Sections/ContactSection"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>CSWEB - Creare Site-uri Web pentru IMM-uri</title>

          {/* 🔹 Meta Descriere (maxim 160 caractere, optimizată pentru CTR) */}
          <meta
            name="description"
            content="CSWEB îți oferă servicii profesionale de creare site web, optimizare SEO, dezvoltare aplicații și soluții digitale personalizate pentru afacerea ta."
          />

          {/* 🔹 Cuvinte-cheie optimizate pentru targetare mai bună */}
          <meta
            name="keywords"
            content="creare site web, dezvoltare aplicații, SEO pentru afaceri, optimizare Google, creare magazin online, promovare digitală, design web modern, soluții web personalizate, servicii web pentru IMM"
          />

          <meta name="author" content="CSWEB" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* 🔹 Open Graph pentru Facebook & LinkedIn */}
          <meta
            property="og:title"
            content="CSWEB - Creare Site Web, SEO și Soluții Digitale pentru Afacerea Ta"
          />
          <meta
            property="og:description"
            content="CSWEB oferă soluții digitale personalizate: dezvoltare site web, aplicații mobile, SEO și promovare online pentru afaceri."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://csweb.pro" />
          <meta property="og:image" content="https://csweb.pro/preview.webp" />
          <meta property="og:site_name" content="CSWEB" />

          {/* 🔹 Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="CSWEB - Creare Site Web, SEO și Soluții Digitale pentru Afacerea Ta"
          />
          <meta
            name="twitter:description"
            content="Creare site web, optimizare SEO și dezvoltare aplicații. Soluții digitale personalizate pentru afacerea ta."
          />
          <meta name="twitter:image" content="https://csweb.pro/preview.webp" />

          {/* 🔹 Canonical URL pentru a evita conținut duplicat */}
          <link rel="canonical" href="https://www.csweb.pro/" />
        </Helmet>

        {/* Navbar */}
        <Navbar />

        {/* Suspense pentru a încărca componentele lazily */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Ruta principală pentru pagina de Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Rutele pentru paginile statice */}
            {/* <Route path="/home" element={<HomeSection />} /> */}
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactSection />} />

            {/* Rutele pentru Termeni și Condiții și Politica de Confidențialitate */}
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>

        {/* Scroll to top button */}
        <ScrollToTopButton />

        {/* Footer */}
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
