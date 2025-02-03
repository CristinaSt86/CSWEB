import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import i18n for translations
import ViaNapoli from "../images/ViaNapoliTeam.webp";
import LogoTplx from "../images/LogoTplx.webp";
import EcoDesign from "../images/EcoDesign.webp";

const testimonialsData = [
  {
    id: "testimonial1",
    image: ViaNapoli,
  },
  {
    id: "testimonial2",
    image: LogoTplx,
  },
  {
    id: "testimonial3",
    image: EcoDesign,
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation(); // Initialize translation hook
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
          {t("testimonials.heading")} {/* Heading from JSON */}
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
                  {t(`testimonials.${testimonial.id}.quote`)} {/* Translate quote */}
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={t(`testimonials.${testimonial.id}.name`)} 
                    className="w-12 h-12 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {t(`testimonials.${testimonial.id}.name`)} {/* Translate name */}
                    </p>
                    <p className="text-gray-600">
                      {t(`testimonials.${testimonial.id}.role`)} {/* Translate role */}
                    </p>
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
