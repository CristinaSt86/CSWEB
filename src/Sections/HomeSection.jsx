import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

const HomeSection = () => {
  const { t, i18n } = useTranslation(); // Folosim hook-ul useTranslation pentru traducere
  const lng = i18n.language;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center sm:text-custom-textMenu md:text-white text-center  sm:flex-row py-32"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
      style={{
        backgroundImage: `url('/images/pic1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-8 mt-20 md:mt-26">
        {/* SEO-friendly structured container */}
        <div
          className="md:bg-black md:bg-opacity-40 p-6 rounded container"
          aria-labelledby="home-section-title"
        >
          <h1
            id="home-section-title"
            className="text-4xl font-semibold mb-8 sm:text-5xl"
            itemProp="headline"
          >
            {t("home.title")}
          </h1>
          <h2
            id="home-section-subtitle"
            className="text-2xl sm:text-3xl"
            itemProp="description"
          >
            {t("home.subtitle")}
          </h2>
        </div>
        {/* Accessible Button */}
        <div className="flex justify-center sm:mt-2 md:mt-6">
          <a
            href={`/${lng}#about`}
            onClick={(e) => {
              e.preventDefault(); // prevenim comportamentul implicit
              const section = document.getElementById("about");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label={t("home.ariaScrollAbout")}
          >
            <Button label={t("home.button")} className="w-fit" />
          </a>
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

export default HomeSection;
