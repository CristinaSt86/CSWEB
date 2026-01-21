import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ✅ Correct Import: Dynamic Import for Framer Motion
let motion;
if (typeof window !== "undefined") {
  import("framer-motion").then((mod) => {
    motion = mod.motion;
  });
}

const ServicesSection = () => {
  const { t } = useTranslation();
  const [isMotionLoaded, setIsMotionLoaded] = useState(false);
  const sectionRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  useEffect(() => {
    if (!motion) {
      import("framer-motion").then((mod) => {
        motion = mod.motion;
        setIsMotionLoaded(true);
      });
    } else {
      setIsMotionLoaded(true);
    }
  }, []);

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const services = [
  {
    id: "service-1",
    title: t("services.services_list.0.title"),
    description: t("services.services_list.0.description"),
  },
  {
    id: "service-2",
    title: t("services.services_list.1.title"),
    description: t("services.services_list.1.description"),
  },
  {
    id: "service-3",
    title: t("services.services_list.2.title"),
    description: t("services.services_list.2.description"),
  },
  {
    id: "service-4",
    title: t("services.services_list.3.title"),
    description: t("services.services_list.3.description"),
  },
];


  return (
    <section
      ref={sectionRef}
      id="services"
      className="min-h-screen bg-services-bg bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center px-8 text-gray-700 py-20"
      aria-label={t("services.title")}
    >
      <Helmet>
        <title>{t("services.title")} | CSWEB</title>
        <meta name="description" content={t("service.description")} />
        <link
          rel="canonical"
          href="https://www.csweb.pro/services"
        />
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServicePage",
            headline: t("services.title"),
            description: t("services.description"),
            mainEntityOfPage: "https://www.csweb.pro/services",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.csweb.pro",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t("services.title"),
                  item: "https://www.csweb.pro/services",
                },
              ],
            },
            service: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
            })),
          })}
        </script>
      </Helmet>

      <div className="container max-w-6xl mx-auto mt-20 md:mt-26 text-custom-textMenu">
        <h2 className="text-4xl  font-bold mb-10">{t("services.title")}</h2>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>

        {/* 🔹 Wait for Framer Motion to Load */}
        {isMotionLoaded ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-custom-textMenu">

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="p-6 bg-gray-100 rounded shadow-lg"
                aria-labelledby={`${service.id}-title`}
                itemProp="serviceType"
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={serviceVariants}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3
                  id={`${service.id}-title`}
                  className="text-xl font-bold mb-2"
                >
                  {service.title}
                </h3>
                <p >{service.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
