import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";

const HomeSection = () => {
  const { t } = useTranslation();
 

  const previewListRaw = t("home.previewList", { returnObjects: true });
  const previewList = Array.isArray(previewListRaw) ? previewListRaw : [];

  return (
    <section
      id="home"
      className="
    scroll-mt-24 
    relative min-h-[100svh] overflow-hidden
    bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop
    bg-cover bg-center
  "
    >
      {/* overlay gradient pentru lizibilitate */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/70 via-black/45 to-black/20"
        aria-hidden="true"
      />

      <Helmet>
        <link rel="canonical" href="https://www.csweb.pro/" />
      </Helmet>

      {/* CONTENT */}
      <div className=" relative z-10 mx-auto max-w-6xl px-6 sm:px-6 pt-44 pb-16 lg:pt-48 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-left text-white">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-relaxed ">
              {t("home.title")}
            </h1>

            <p className="mt-5 text-xl text-white/90 leading-relaxed max-w-xl">
              {t("home.subtitle")}
            </p>

            <p className="mt-4 text-xl text-white/70 max-w-xl">
              {t("home.subtitleHome")}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                label={t("home.button")}
                size="large"
                targetSectionId="about"
                className="min-w-[220px]"
              />

              <SecondaryButton
                label={t("home.secondaryCta")}
                size="large"
                targetSectionId="contact"
                className="min-w-[220px]"
                variant="light"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-2xl bg-black/35 backdrop-blur-md ring-1 ring-white/15 p-6 sm:p-8 text-white shadow-2xl max-w-md ml-auto">
              <h3 className="text-xl font-semibold">
                {t("home.previewTitle")}
              </h3>

              <ul className="mt-4 space-y-3 text-white/90">
                {previewList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-black/30 p-4">
                <p className="text-lg text-white/80">{t("home.previewNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* structured data */}
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
