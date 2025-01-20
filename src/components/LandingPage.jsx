// LandingPage.jsx
import React from "react";
import { Helmet } from "react-helmet";  // Import react-helmet for head management
//import Navbar from "../components/Navbar"; // Importăm Navbar
import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import ServicesSection from "../Sections/ServicesSection";
import PricingSection from "../Sections/PricingSection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import ContactSection from "../Sections/ContactSection";
//import Footer from "../components/Footer";
import Banner from "../components/Banner";

const LandingPage = () => {
  return (
    <div>
      {/* Using react-helmet to manage SEO optimizations */}
      <Helmet>
        <title>Inovație Digitală - Soluții Personalizate pentru Afacerea Ta</title>
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
        {/* Add structured data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CS|WEB",
            "url": "https://www.csweb.pro",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.csweb.pro/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

     

      {/* Banner */}
      <Banner />

      {/* Main sections */}
      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

     
    </div>
  );
};

export default LandingPage;
