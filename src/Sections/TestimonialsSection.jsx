import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  {
    id: "testimonial1",
    image: "/images/ViaNapoliTeam.webp",
    cite: "https://www.vianapoli.ro/",
  },
  {
    id: "testimonial2",
    image: "/images/LogoTplx.webp",
    cite: "https://www.topalxscoalaauto.ro/",
  },
  {
    id: "testimonial3",
    image: "/images/EcoDesign.webp",
    cite: "https://ecodesign-client.com/testimonial3",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [visibleTestimonials, setVisibleTestimonials] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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
      className="bg-gray-100 py-16 pt-24 text-custom-textMenu"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto text-center">
        <h2
          id="testimonials-heading"
          className="text-4xl font-bold  mb-8 px-6"
          itemProp="headline"
        >
          {t("testimonials.heading")}
        </h2>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial) => (
            <a
              key={testimonial.id}
              id={testimonial.id}
              href={testimonial.cite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Testimonial by ${t(
                `testimonials.${testimonial.id}.name`
              )}`}
              className={`testimonial w-full sm:w-1/2 lg:w-1/3 p-6 transition-all duration-1000 transform hover:rounded-md ease-in-out ${
                visibleTestimonials[testimonial.id]
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              } hover:shadow-xl hover:-translate-y-1 block`}
            >
              <span className="sr-only">
                {t(`testimonials.${testimonial.id}.name`)} –{" "}
                {t(`testimonials.${testimonial.id}.role`)}
              </span>
              <div className="bg-white shadow-lg rounded-md p-6 h-full">
                <blockquote
                  className=" mb-4"
                  itemProp="reviewBody"
                >
                  {t(`testimonials.${testimonial.id}.quote`)}
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={t(`testimonials.${testimonial.id}.name`)}
                    className="w-12 h-12 rounded-full mr-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold">
                      {t(`testimonials.${testimonial.id}.name`)}
                    </p>
                    <p className="text-gray-600">
                      {t(`testimonials.${testimonial.id}.role`)}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
