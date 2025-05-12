import React from "react";
import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import ServicesSection from "../Sections/ServicesSection";
import PricingSection from "../Sections/PricingSection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import ContactSection from "../Sections/ContactSection";
import BlogPreviewSection from "./BlogPreviewSection";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/images/pic1.webp"
          type="image/webp"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <h1 id="seo-h1" className="hidden">
          CSWEB - Creare Site-uri Web
        </h1>

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
            <BlogPreviewSection />
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
    </>
  );
};

export default LandingPage;
