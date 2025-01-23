import React, { useEffect, useState } from "react";
import tplxlogo from "../images/LogoTplx.webp";

const TestimonialsSection = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState({
    testimonial1: false,
    testimonial2: false,
    testimonial3: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Se activează când 50% din element este în viewport
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Actualizează state-ul când testimonialul intră în viewport
          setVisibleTestimonials((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observăm fiecare div de testimonial
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial) => observer.observe(testimonial));

    // Cleanup observer
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
          {/* Testimonial 1 */}
          <div
            id="testimonial1"
            className={`testimonial w-full sm:w-1/2 lg:w-1/3 p-6 transition-all duration-1000 transform ease-in-out ${
              visibleTestimonials.testimonial1
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
            role="region"
            aria-labelledby="testimonial-1"
          >
            <div className="bg-white shadow-lg rounded p-6">
              <blockquote
                className="text-gray-700 mb-4"
                cite="https://www.example.com"
                itemProp="reviewBody"
              >
                "Colaborarea cu echipa CS|WEB a fost excelentă! Site-ul nostru
                arată fantastic și am observat o creștere a traficului în
                primele săptămâni. Recomand cu încredere!"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={"https://via.placeholder.com/50"}
                  alt="Mihaela Radu"
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-800">Mihaela Radu</p>
                  <p className="text-gray-600">CEO, Restaurant Via Napoli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            id="testimonial2"
            className={`testimonial w-full sm:w-1/2 lg:w-1/3 p-6 transition-all duration-1000 transform ease-in-out ${
              visibleTestimonials.testimonial2
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
            role="region"
            aria-labelledby="testimonial-2"
          >
            <div className="bg-white shadow-lg rounded p-6">
              <blockquote
                className="text-gray-700 mb-4"
                cite="https://www.example.com"
                itemProp="reviewBody"
              >
                "Echipa CS|WEB a înțeles perfect viziunea noastră și a creat un
                site care reflectă exact ceea ce ne-am dorit. Suntem foarte
                mulțumiți de rezultat!"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={tplxlogo}
                  alt="Constantin Topală"
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-800">Constantin Topală</p>
                  <p className="text-gray-600">CEO, TopalX, Școala de șoferi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            id="testimonial3"
            className={`testimonial w-full sm:w-1/2 lg:w-1/3 p-6 transition-all duration-1000 transform ease-in-out ${
              visibleTestimonials.testimonial3
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
            role="region"
            aria-labelledby="testimonial-3"
          >
            <div className="bg-white shadow-lg rounded-lg p-6">
              <blockquote
                className="text-gray-700 mb-4"
                cite="https://www.example.com"
                itemProp="reviewBody"
              >
                "Am avut o experiență foarte bună cu CS|WEB! Site-ul nostru este
                rapid, modern și optimizat pentru SEO. Suntem recunoscători
                pentru ajutorul lor!"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Alexandru Dobre"
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-800">Alexandru Dobre</p>
                  <p className="text-gray-600">Founder, EcoDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          headline: "Experiențele clienților noștri",
          description:
            "Citește ce spun clienții noștri despre colaborarea cu echipa CS|WEB. Descoperă experiențele lor și impactul pozitiv asupra afacerilor lor.",
          mainEntityOfPage: {
            "@type": "Organization",
            name: "CS|WEB",
            url: "https://www.csweb.pro",
            sameAs: "https://www.csweb.pro/social",
          },
          review: [
            {
              "@type": "Review",
              reviewBody:
                "Colaborarea cu echipa CS|WEB a fost excelentă! Site-ul nostru arată fantastic și am observat o creștere a traficului în primele săptămâni. Recomand cu încredere!",
              author: {
                "@type": "Person",
                name: "Mihaela Radu",
              },
              publisher: {
                "@type": "Organization",
                name: "Restaurant Via Napoli",
              },
            },
            {
              "@type": "Review",
              reviewBody:
                "Echipa CS|WEB a înțeles perfect viziunea noastră și a creat un site care reflectă exact ceea ce ne-am dorit. Suntem foarte mulțumiți de rezultat!",
              author: {
                "@type": "Person",
                name: "Constantin Topală",
              },
              publisher: {
                "@type": "Organization",
                name: "TopalX, Școala de șoferi",
              },
            },
            {
              "@type": "Review",
              reviewBody:
                "Am avut o experiență foarte bună cu CS|WEB! Site-ul nostru este rapid, modern și optimizat pentru SEO. Suntem recunoscători pentru ajutorul lor!",
              author: {
                "@type": "Person",
                name: "Alexandru Dobre",
              },
              publisher: {
                "@type": "Organization",
                name: "EcoDesign",
              },
            },
          ],
        })}
      </script>
    </section>
  );
};

export default TestimonialsSection;
