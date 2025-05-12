import React from "react";
import { Helmet } from "react-helmet-async";

const HeadMetaTags = () => {
  return (
    <Helmet>
      {/* Etichete hreflang pentru fiecare limbă */}
      <link rel="alternate" hreflang="ro" href="https://www.csweb.pro/" />
      <link rel="alternate" hreflang="de" href="https://www.csweb.pro/de/" />
      <link rel="alternate" hreflang="en" href="https://www.csweb.pro/en/" />

      {/* Alte meta tag-uri */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Servicii web profesionale in Romania si Germania."
      />
      <title>CSWEB - Creare Site-uri & Optimizare SEO</title>
    </Helmet>
  );
};

export default HeadMetaTags;
