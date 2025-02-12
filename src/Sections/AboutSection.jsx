import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation(); // Folosim hook-ul useTranslation pentru a obține funcția de traducere
  const [isInView, setIsInView] = useState({ who: false, less: false });

  useEffect(() => {
    const options = {
      root: null, // Vizibilitatea se măsoară față de viewport
      rootMargin: "0px",
      threshold: 0.3, // Când 80% din element este vizibil
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Activăm animarea
          if (entry.target.id === "about-who-title") {
            setIsInView((prev) => ({ ...prev, who: true }));
          }
          if (entry.target.id === "about-less-title") {
            setIsInView((prev) => ({ ...prev, less: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Selectăm elementele care trebuie observate
    const aboutWho = document.getElementById("about-who-title");
    const aboutLess = document.getElementById("about-less-title");

    if (aboutWho) observer.observe(aboutWho);
    if (aboutLess) observer.observe(aboutLess);

    // Curățare la dezmembrarea componentului
    return () => {
      if (aboutWho) observer.unobserve(aboutWho);
      if (aboutLess) observer.unobserve(aboutLess);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left py-24"
      aria-label="Despre noi - Cine suntem și ce facem"
    >
      <div className="px-4 sm:px-8">
        {/* Cine suntem? */}
        <div
          aria-labelledby="about-who-title"
          className={`transition-all duration-1000 ease-in-out transform ${
            isInView.who ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <h1
            id="about-who-title"
            className="text-4xl font-bold mb-12 text-gray-700"
            itemProp="headline"
          >
            {t("about.who_title")}
          </h1>
          <p className="text-gray-700 text-xl text-left" itemProp="description">
            {t("about.who_description")}
          </p>
        </div>

        {/* Linie de delimitare */}
        <div className="my-16 border-t-2 border-gray-300 w-1/2 mx-auto"></div>

        {/* Less is More */}
        <div
          className={`mt-12 transition-all duration-1000 ease-in-out transform ${
            isInView.less ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
          aria-labelledby="about-less-title"
        >
          <h2
            id="about-less-title"
            className="text-4xl font-bold mb-12 text-gray-700"
            itemProp="headline"
          >
            {t("about.less_title")}
          </h2>
          <p className="text-gray-700 text-xl text-left" itemProp="description">
            {t("about.less_description")}
          </p>
        </div>
      </div>

      {/* Structured data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "AboutPage",
          headline: t("about.page_title"),
          description: t("about.page_description"),
          mainEntity: {
            "@type": "Organization",
            name: "CS|WEB",
            url: "https://www.csweb.pro",
          },
          mainContentOfPage: [
            {
              "@type": "WebContent",
              headline: t("about.who_title"),
              description: t("about.who_description"),
            },
            {
              "@type": "WebContent",
              headline: t("about.less_title"),
              description: t("about.less_description"),
            },
          ],
        })}
      </script>
    </section>
  );
};

export default AboutSection;
