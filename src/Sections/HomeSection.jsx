import React from "react";
import Button from "../components/Button";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-white text-center bg-home-bg bg-cover bg-center sm:flex-row pt-20"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
    >
      <div className="flex flex-col gap-8 animate-fadeInUp">
        {/* SEO-friendly structured container */}
        <div
          className="bg-black bg-opacity-40 p-6 rounded container"
          aria-labelledby="home-section-title"
        >
          <h1
            id="home-section-title"
            className="text-4xl font-semibold mb-4 sm:text-5xl"
            itemProp="headline"
          >
            CS|WEB – Soluții digitale inovative pentru afacerea ta
          </h1>
          <h2 className="text-2xl sm:text-3xl" itemProp="description">
            CS|Web îți oferă soluții web personalizate, optimizate SEO, care
            ajută IMM-urile să atragă clienți și să crească online. Beneficiezi
            de site-uri de calitate, adaptate bugetului tău, pentru a-ți spori
            vizibilitatea și succesul afacerii.
          </h2>
        </div>
        {/* Accessible Button */}
        <div className="flex justify-center mt-6">
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
