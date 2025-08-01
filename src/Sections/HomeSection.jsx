import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";


const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
    >
      {/* Imaginea de fundal absolută */}
      <img
        src="/images/pic1.webp"
        alt="Fundal CSWEB"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        fetchpriority="high"
      />
      {/* Conținutul întins */}
      <div className="md:bg-black/40 text-custom-textMenu md:text-white w-full max-w-7xl px-8 py-12 pt-40 md:pt-24 rounded">

        <h1 className="text-3xl sm:text-4xl font-bold md:font-bold mb-6" itemProp="headline">
          {t("home.title")}
        </h1>
        <h2
          className="text-xl sm:text-xl md:text-3xl leading-relaxed mb-8"
          itemProp="description"
        >
          {t("home.subtitle")}
        </h2>
        <a
          href={`/${lng}#about`}
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("about");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label={t("home.ariaScrollAbout")}
        >
          <Button label={t("home.button")} size="large" className="font-semibold border-2 border-white"/>
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
