import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // Variants for animation
  const serviceVariants = {
    hidden: { opacity: 0, y: -200 }, // Mai vizibil, vin de mai sus
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Durata animației
        delay: custom * 0.3, // Delay bazat pe custom
        type: "spring", // Tip bounce
        stiffness: 150,
        damping: 10,
      },
    }),
  };

  // Array of services
  const services = [
    {
      id: "service-1",
      title: "Creare site-uri web personalizate",
      description:
        "Transformăm viziunea afacerii tale într-un website modern, adaptat cerințelor pieței și optimizat pentru utilizator.",
    },
    {
      id: "service-2",
      title: "Optimizare SEO și creștere vizibilitate",
      description:
        "Vrei ca site-ul tău să fie găsit rapid pe Google? Te ajutăm să urci în clasament prin strategii SEO eficiente.",
    },
    {
      id: "service-3",
      title: "Mentenață și suport tehnic",
      description:
        "Asigurăm funcționarea optimă a site-ului tău pe termen lung. Oferim actualizări periodice, backup-uri și soluționăm rapid orice problemă.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-services-bg bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center px-8 text-gray-700 py-24"
      aria-label="Servicii oferite de CS|Web"
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold mb-10"
          aria-labelledby="services-title"
          itemProp="headline"
        >
          Servicii Oferite
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
