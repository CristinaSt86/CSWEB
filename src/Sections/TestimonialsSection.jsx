import React, { useEffect, useState } from "react";
import ViaNapoli from "../images/ViaNapoliTeam.webp";
import LogoTplx from "../images/LogoTplx.webp";
import EcoDesign from "../images/EcoDesign.webp";

const testimonialsData = [
  {
    id: "testimonial1",
    quote:
      "Colaborarea cu echipa CS|WEB a fost excelentă! Site-ul nostru arată fantastic și am observat o creștere a traficului în primele săptămâni. Recomand cu încredere!",
    image: ViaNapoli,
    // name: "Mihaela Radu",
    role: "CEO, Restaurant Via Napoli",
  },
  {
    id: "testimonial2",
    quote:
      "Echipa CS|WEB a înțeles perfect viziunea noastră și a creat un site care reflectă exact ceea ce ne-am dorit. Suntem foarte mulțumiți de rezultat!",
    image: LogoTplx,
    // name: "Constantin Topală",
    role: "CEO, TopalX, Școala de șoferi",
  },
  {
    id: "testimonial3",
    quote:
      "I had a very good experience with CS|WEB! Our website is Fast, modern, and SEO-optimized. We are grateful for their help!",
    image: EcoDesign,
    // name: "Rene Klemig",
    role: "Founder, EcoDesign",
  },
];

const TestimonialsSection = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Activates when 30% of the element is in the viewport
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleTestimonials((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial) => observer.observe(testimonial));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gray-100 py-16 pt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto text-center">
        <h2
          id="testimonials-heading"
          className="text-4xl font-bold text-gray-700 mb-8 px-6"
          itemProp="headline"
        >
          Experiențele clienților noștri
        </h2>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              id={testimonial.id}
              className={`testimonial w-full sm:w-1/2 lg:w-1/3 p-6 transition-all duration-1000 transform ease-in-out ${
                visibleTestimonials[testimonial.id]
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              }`}
              role="region"
              aria-labelledby={testimonial.id}
            >
              <div className="bg-white shadow-lg rounded p-6">
                <blockquote
                  className="text-gray-700 mb-4"
                  cite="https://www.example.com"
                  itemProp="reviewBody"
                >
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
