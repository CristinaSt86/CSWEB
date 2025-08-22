import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";

const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <section
      id="home"
      className="relative   min-h-[100svh] lg:min-h-[100svh] flex items-center justify-center text-white text-center overflow-hidden"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
    >
      {/* Canonical pentru homepage */}
      <Helmet>
        <link rel="canonical" href="https://www.csweb.pro/" />
      </Helmet>

      {/* Imaginea de fundal absolută */}
      <img
        src="/images/pic1.webp"
        alt="Fundal CSWEB"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        fetchpriority="high"
      />

      {/* Conținutul întins */}
      <div className="flex flex-col md:gap-6 py-6">
        <div className="md:bg-black/50 text-custom-textMenu md:text-white w-full max-w-6xl lg:max-w-5xl px-8 py-4 pt-48 md:pt-12 rounded">
          <h1
            className="text-4xl sm:text-4xl font-bold md:font-bold mb-6"
            itemProp="headline"
          >
            {t("home.title")}
          </h1>
          <h2
            className="text-xl sm:text-xl md:text-3xl leading-relaxed mb-8"
            itemProp="description"
          >
            {t("home.subtitle")}
          </h2>
        </div>
        <a
          href={`/${lng}#about`}
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("about");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label={t("home.ariaScrollAbout")}
        >
          <Button
            label={t("home.button")}
            size="large"
            className="font-semibold"
          />
        </a>
      </div>
      {/* Structured data (SEO) */}
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
