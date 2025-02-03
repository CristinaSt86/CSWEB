import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importă useTranslation

const ServicesSection = () => {
  const { t } = useTranslation(); // Folosește useTranslation pentru a obține funcția de traducere

  const serviceVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.3,
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    }),
  };

  const services = [
    {
      id: "service-1",
      title: t("services.services_list.0.title"), // Traducerea titlului
      description: t("services.services_list.0.description"), // Traducerea descrierii
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
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-services-bg bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center px-8 text-gray-700 py-24"
      aria-label={t("services.title")} // Traducerea titlului secțiunii
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10" aria-labelledby="services-title" itemProp="headline">
          {t("services.title")} {/* Traducerea titlului secțiunii */}
        </h2>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="p-6 bg-gray-100 rounded shadow-lg"
              aria-labelledby={`${service.id}-title`}
              itemProp="serviceType"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              variants={serviceVariants}
            >
              <h3 id={`${service.id}-title`} className="text-xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
