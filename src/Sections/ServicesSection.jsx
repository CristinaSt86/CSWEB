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
          {/* Service 1 */}
          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg"
            aria-labelledby="service-1-title"
            itemProp="serviceType"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0} 
            variants={serviceVariants}
          >
            <h3
              id="service-1-title"
              className="text-xl font-bold mb-2"
            >
              Creare site-uri web personalizate
            </h3>
            <p className="text-gray-700">
              Transformăm viziunea afacerii tale într-un website modern, adaptat cerințelor pieței și optimizat pentru utilizator.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg"
            aria-labelledby="service-2-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2} 
            variants={serviceVariants}
          >
            <h3
              id="service-2-title"
              className="text-xl font-bold mb-2"
            >
              Optimizare SEO și creștere vizibilitate
            </h3>
            <p className="text-gray-700">
              Vrei ca site-ul tău să fie găsit rapid pe Google? Te ajutăm să urci în clasament prin strategii SEO eficiente.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg"
            aria-labelledby="service-3-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3} 
            variants={serviceVariants}
          >
            <h3
              id="service-3-title"
              className="text-xl font-bold mb-2"
            >
              Mentenață și suport tehnic
            </h3>
            <p className="text-gray-700">
              Asigurăm funcționarea optimă a site-ului tău pe termen lung. Oferim actualizări periodice, backup-uri și soluționăm rapid orice problemă.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
