// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Button from "../components/Button";

// const HomeSection = () => {
//   const { t } = useTranslation(); // Folosim hook-ul useTranslation pentru a obține funcția de traducere
//   const [isTitleVisible, setIsTitleVisible] = useState(false);
//   // eslint-disable-next-line no-unused-vars
//   const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);

//   useEffect(() => {
//     const title = document.getElementById("home-section-title");
//     const subtitle = document.getElementById("home-section-subtitle");

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.3, // Se declanșează când 50% din element este vizibil
//     };

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.target.id === "home-section-title" && entry.isIntersecting) {
//           setIsTitleVisible(true);
//         } else if (
//           entry.target.id === "home-section-subtitle" &&
//           entry.isIntersecting
//         ) {
//           setIsSubtitleVisible(true);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       handleIntersection,
//       observerOptions
//     );

//     // Observăm titlul și subtitlul
//     if (title) observer.observe(title);
//     if (subtitle) observer.observe(subtitle);

//     // Curățare la dezmembrarea componentului
//     return () => {
//       if (title) observer.unobserve(title);
//       if (subtitle) observer.unobserve(subtitle);
//     };
//   }, []);

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col items-center justify-center sm:text-custom-textMenu md:text-white text-center bg-home-bg bg-cover bg-center bg-no-repeat sm:flex-row py-32"
//       aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
//     >
//       <div className="flex flex-col gap-8">
//         {/* SEO-friendly structured container */}
//         <div
//           className="md:bg-black md:bg-opacity-40 p-6 rounded container"
//           aria-labelledby="home-section-title"
//         >
//           <h1
//             id="home-section-title"
//             className={`text-4xl font-semibold mb-8 sm:text-5xl transition-opacity duration-1000 ${
//               isTitleVisible ? "opacity-100" : "opacity-0"
//             }`}
//             itemProp="headline"
//           >
//             {t("home.title")}
//           </h1>
//           <h2
//             id="home-section-subtitle"
//             className="text-2xl sm:text-3xl"
//             itemProp="description"
//           >
//             {t("home.subtitle")}
//           </h2>
//         </div>
//         {/* Accessible Button */}
//         <div className="flex justify-center sm:mt-2 md:mt-6">
//           <Button
//             label={t("home.button")}
//             targetSectionId="about"
//             aria-label="Descoperă mai multe despre CS|Web"
//             className="w-fit"
//           />
//         </div>
//       </div>
//       {/* Structured data (JSON-LD) */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "http://schema.org",
//           "@type": "WebPage",
//           name: "CS|WEB – Soluții digitale inovative pentru afacerea ta",
//           description:
//             "CS|Web oferă soluții web personalizate și optimizate SEO pentru IMM-uri, atrăgând clienți și susținând creșterea online.",
//           url: "https://www.csweb.pro/#home",
//           mainEntity: {
//             "@type": "Organization",
//             name: "CS|WEB",
//             url: "https://www.csweb.pro",
//           },
//         })}
//       </script>
//     </section>
//   );
// };

// HomeSection.propTypes = {
//   // Dacă ai nevoie de prop-uri dinamice, le poți adăuga aici.
// };

// export default HomeSection;


import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";


const HomeSection = () => {
  const { t } = useTranslation(); // Folosim hook-ul useTranslation pentru traducere

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center sm:text-custom-textMenu md:text-white text-center  sm:flex-row py-32"
      aria-label="Home Section - Soluții digitale inovative pentru afacerea ta"
      style={{  backgroundImage: `url('/images/pic1.webp')`, backgroundSize: "cover", backgroundPosition: "center" }}
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
          <Button
            label={t("home.button")}
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

export default HomeSection;
