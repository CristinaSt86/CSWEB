import React from "react";

const ServicesSection = () => {
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
        Serviciile Oferite
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div
          className="p-6 bg-gray-100 rounded shadow"
          aria-labelledby="service-1-title"
        >
          <h3
            id="service-1-title"
            className="text-xl font-bold mb-2"
            itemProp="serviceType"
          >
            Creare site-uri web personalizate
          </h3>
          <p
            className="text-gray-700"
            itemProp="description"
          >
            Transformăm viziunea afacerii tale într-un website modern, adaptat cerințelor pieței și optimizat pentru utilizator. Cu un design intuitiv și responsive, site-ul tău va arăta impecabil pe orice dispozitiv.
          </p>
        </div>
  
        {/* Service 2 */}
        <div
          className="p-6 bg-gray-100 rounded shadow"
          aria-labelledby="service-2-title"
        >
          <h3
            id="service-2-title"
            className="text-xl font-bold mb-2"
            itemProp="serviceType"
          >
            Optimizare SEO și creștere vizibilitate
          </h3>
          <p
            className="text-gray-700"
            itemProp="description"
          >
            Vrei ca site-ul tău să fie găsit rapid pe Google? Te ajutăm să urci în clasament prin strategii SEO eficiente: cuvinte-cheie relevante, structură bine definită și conținut de calitate.
          </p>
        </div>
  
        {/* Service 3 */}
        <div
          className="p-6 bg-gray-100 rounded shadow"
          aria-labelledby="service-3-title"
        >
          <h3
            id="service-3-title"
            className="text-xl font-bold mb-2"
            itemProp="serviceType"
          >
            Mentenață și suport tehnic
          </h3>
          <p
            className="text-gray-700"
            itemProp="description"
          >
            Asigurăm funcționarea optimă a site-ului tău pe termen lung. Oferim actualizări periodice, backup-uri de siguranță și soluționăm rapid orice problemă tehnică.
          </p>
        </div>
      </div>
    </div>
  
    {/* Structured data (JSON-LD) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Service",
        name: "Servicii oferite de CS|Web",
        description:
          "Oferim servicii complete pentru afacerea ta online, de la creare site-uri web personalizate, optimizare SEO până la mentenanță și suport tehnic.",
        serviceType: [
          "Creare site-uri web personalizate",
          "Optimizare SEO și creștere vizibilitate",
          "Mentenață și suport tehnic",
        ],
        provider: {
          "@type": "Organization",
          name: "CS|WEB",
          url: "https://www.csweb.pro",
        },
      })}
    </script>
  </section>
  
  );
};

export default ServicesSection;
