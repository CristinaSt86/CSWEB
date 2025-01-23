import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const HomeSection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);

  useEffect(() => {
    const title = document.getElementById("home-section-title");
    const subtitle = document.getElementById("home-section-subtitle");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Se declanșează când 50% din element este vizibil
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "home-section-title" && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target.id === "home-section-subtitle" && entry.isIntersecting) {
          setIsSubtitleVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observăm titlul și subtitlul
    if (title) observer.observe(title);
    if (subtitle) observer.observe(subtitle);

    // Curățare la dezmembrarea componentului
    return () => {
      if (title) observer.unobserve(title);
      if (subtitle) observer.unobserve(subtitle);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center sm:text-custom-textMenu md:text-white text-center bg-home-bg bg-cover bg-center bg-no-repeat sm:flex-row py-32"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
    >
      <div className="flex flex-col gap-8">
        {/* SEO-friendly structured container */}
        <div
          className="md:bg-black md:bg-opacity-40 p-6 rounded container"
          aria-labelledby="home-section-title"
        >
          <h1
            id="home-section-title"
            className={`text-4xl font-semibold mb-4 sm:text-5xl transition-opacity duration-1000 ${
              isTitleVisible ? "opacity-100" : "opacity-0"
            }`}
            itemProp="headline"
          >
            Soluții digitale inovative pentru afacerea ta
          </h1>
          <h2
            id="home-section-subtitle"
            className={`text-2xl sm:text-3xl transition-opacity duration-1000 ${
              isSubtitleVisible ? "opacity-100" : "opacity-0"
            }`}
            itemProp="description"
          >
            CS|Web îți oferă soluții web personalizate, optimizate SEO, care
            ajută IMM-urile să atragă clienți și să crească online. Beneficiezi
            de site-uri de calitate, adaptate bugetului tău, pentru a-ți spori
            vizibilitatea și succesul afacerii.
          </h2>
        </div>
        {/* Accessible Button */}
        <div className="flex justify-center sm:mt-2 md:mt-6">
          <Button
            label="Descopera mai multe"
            targetSectionId="about"
            aria-label="Descoperă mai multe despre CS|Web"
            className="w-fit"
          />
        </div>
      </div>
      {/* Structured data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: "CS|WEB – Soluții digitale inovative pentru afacerea ta",
          description:
            "CS|Web oferă soluții web personalizate și optimizate SEO pentru IMM-uri, atrăgând clienți și susținând creșterea online.",
          url: "https://www.csweb.pro/#home",
          mainEntity: {
            "@type": "Organization",
            name: "CS|WEB",
            url: "https://www.csweb.pro",
          },
        })}
      </script>
    </section>
  );
};

HomeSection.propTypes = {
  // Dacă ai nevoie de prop-uri dinamice, le poți adăuga aici.
};

export default HomeSection;
