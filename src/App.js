import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieBanner from "./components/CookieBanner";


// Folosirea React.lazy pentru a încărca componentele la cerere
const LandingPage = lazy(() => import("./components/LandingPage"));
//const HomeSection = lazy(() => import("./sections/HomeSection"));
const AboutSection = lazy(() => import("./Sections/AboutSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const ContactSection = lazy(() => import("./Sections/ContactSection"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div>
        {/* SEO optimizations using Helmet */}
        <Helmet>
          <title>
            Inovație Digitală - Soluții Personalizate pentru Afacerea Ta
          </title>
          <meta
            name="description"
            content="Transformă-ți afacerea cu soluții digitale inovatoare. Descoperă servicii personalizate: dezvoltare web, aplicații mobile și multe altele!"
          />
          <meta
            name="keywords"
            content="dezvoltare web, aplicații mobile, soluții digitale, SEO, afaceri"
          />
          <meta name="author" content="CS|WEB" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            property="og:title"
            content="Inovație Digitală - Soluții Personalizate pentru Afacerea Ta"
          />
          <meta
            property="og:description"
            content="Transformă-ți afacerea cu soluții digitale inovatoare. Descoperă servicii personalizate: dezvoltare web, aplicații mobile și multe altele!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://csweb.pro" />
          <meta
            property="og:image"
            content="https://csweb.pro/assets/preview.png"
          />
          <link rel="canonical" href="https://csweb.pro" />
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
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
