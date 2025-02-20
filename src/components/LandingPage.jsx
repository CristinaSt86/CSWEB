import React from "react";

//import Navbar from "../components/Navbar"; // Importăm Navbar
import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import ServicesSection from "../Sections/ServicesSection";
import PricingSection from "../Sections/PricingSection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import ContactSection from "../Sections/ContactSection";
//import Footer from "../components/Footer";
//import Banner from "../components/Banner";
//import DiscountBanner from "../components/DiscountBanner"

const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden ">
      <h1 id="seo-h1" className="hidden">
        CSWEB - Creare Site-uri Web
      </h1>

      {/* Banner */}
      {/* <Banner /> */}

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
