import React from "react";

const AboutSection = () => {
  return (
<section
  id="about"
  className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left py-24"
  aria-label="Despre noi - Cine suntem și ce facem"
>
  <div className="px-4 sm:px-8">
    {/* Cine suntem? */}
    <div aria-labelledby="about-who-title">
      <h2
        id="about-who-title"
        className="text-4xl font-bold mb-4 text-gray-700"
        itemProp="headline"
      >
        Cine suntem?
      </h2>
      <p
        className="text-gray-700 text-xl"
        itemProp="description"
      >
        Suntem o echipă pasionată de tehnologie, dedicată să sprijinim IMM-urile în construirea unor site-uri web moderne și funcționale. Ne axăm pe soluții simple, elegante și optimizate SEO, care îți ajută afacerea să crească online. Fiecare proiect este adaptat nevoilor tale, cu un design curat și un cost accesibil, pentru a asigura succesul pe termen lung.
      </p>
    </div>

    {/* Less is More */}
    <div className="mt-12" aria-labelledby="about-less-title">
      <h2
        id="about-less-title"
        className="text-4xl font-bold mb-4 text-gray-700"
        itemProp="headline"
      >
        Less is More
      </h2>
      <p
        className="text-gray-700 text-xl"
        itemProp="description"
      >
        Credem că simplitatea este cheia unui site de succes. De aceea, fiecare design creat de CS|Web este intuitiv, ușor de navigat și optimizat pentru performanță. Fără elemente inutile, doar ceea ce contează cu adevărat pentru afacerea ta.
      </p>
    </div>
  </div>

  {/* Structured data (JSON-LD) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "http://schema.org",
      "@type": "AboutPage",
      headline: "Despre noi - Cine suntem și ce facem",
      description:
        "Suntem o echipă dedicată tehnologiei care sprijină IMM-urile să crească online cu soluții SEO personalizate și design modern.",
      mainEntity: {
        "@type": "Organization",
        name: "CS|WEB",
        url: "https://www.csweb.pro",
      },
      mainContentOfPage: [
        {
          "@type": "WebContent",
          headline: "Cine suntem?",
          description:
            "Oferim soluții web personalizate pentru IMM-uri, adaptate nevoilor și bugetului, cu design curat și optimizare SEO.",
        },
        {
          "@type": "WebContent",
          headline: "Less is More",
          description:
            "Simplitatea este cheia succesului unui site. Designul CS|Web este intuitiv, ușor de navigat și performant.",
        },
      ],
    })}
  </script>
</section>

  );
};

export default AboutSection;
