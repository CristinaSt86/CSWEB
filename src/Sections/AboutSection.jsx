import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [isInView, setIsInView] = useState({ who: false, less: false });

  useEffect(() => {
    const options = {
      root: null, // Vizibilitatea se măsoară față de viewport
      rootMargin: "0px",
      threshold: 0.8, // Când 80% din element este vizibil
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
            isInView.who ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <h2
            id="about-who-title"
            className="text-4xl font-bold mb-12 text-gray-700"
            itemProp="headline"
          >
            Cine suntem?
          </h2>
          <p className="text-gray-700 text-xl text-left" itemProp="description">
            Suntem o echipă pasionată de tehnologie și inovație, dedicată să
            sprijinim IMM-urile în construirea unor site-uri web moderne și
            funcționale. Abordăm fiecare proiect cu maximă seriozitate și dorința
            de a învăța și de a ne îmbunătăți constant. Ne axăm pe soluții
            simple, elegante și optimizate SEO, care îți ajută afacerea să
            crească online și să ajungă la un public mai larg. Fiecare proiect
            este adaptat nevoilor tale specifice, cu un design curat și intuitiv
            la un cost accesibil. Suntem aici pentru a asigura succesul pe
            termen lung al afacerii tale, oferindu-ți suport și îndrumare pe
            toată durata colaborării.
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
            Less is More
          </h2>
          <p className="text-gray-700 text-xl text-left" itemProp="description">
            Credem că simplitatea este cheia unui site de succes. De aceea,
            fiecare design creat de CS|Web este intuitiv, ușor de navigat și
            optimizat pentru performanță, asigurându-se că vizitatorii au o
            experiență plăcută și fără fricțiuni. Fiecare element este gândit
            pentru a atrage atenția asupra celor mai importante aspecte ale
            afacerii tale, iar designul este adaptat pentru a reflecta
            personalitatea și valorile brandului tău. Fără elemente inutile,
            doar ceea ce contează cu adevărat pentru afacerea ta – pentru ca
            fiecare vizitator să înțeleagă rapid mesajul tău și să îți aprecieze
            serviciile. În plus, punem accent pe optimizarea pentru
            dispozitivele mobile și viteza de încărcare, astfel încât
            utilizatorii să aibă acces la informațiile tale rapid, oriunde s-ar
            afla.
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
