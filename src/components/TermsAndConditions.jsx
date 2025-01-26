import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="container mx-auto px-6 pt-36 pb-16 ">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Termeni și Condiții
      </h1>
      <p className="text-gray-700 mb-4">
        Bine ați venit pe site-ul nostru. Accesând sau utilizând acest site,
        sunteți de acord cu următorii termeni și condiții. Dacă nu sunteți de
        acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Utilizarea site-ului
      </h2>
      <p className="text-gray-700 mb-4">
        Sunteți de acord să utilizați acest site numai în scopuri legale și să
        respectați toate legile și reglementările aplicabile. Nu aveți voie să
        utilizați acest site pentru a transmite orice conținut ilegal,
        defăimător, obscen sau alt conținut care ar putea încălca drepturile
        altor persoane.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Proprietate intelectuală
      </h2>
      <p className="text-gray-700 mb-4">
        Toate materialele de pe acest site, inclusiv textele, imaginile, grafica
        și logo-urile, sunt protejate prin drepturi de autor și alte legi
        privind proprietatea intelectuală. Nu aveți permisiunea de a copia,
        reproduce sau distribui aceste materiale fără consimțământul nostru
        prealabil.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Modificări</h2>
      <p className="text-gray-700 mb-4">
        Ne rezervăm dreptul de a modifica acești termeni și condiții în orice
        moment. Vă încurajăm să verificați această pagină periodic pentru a fi
        la curent cu eventualele modificări.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contact</h2>
      <p className="text-gray-700 mb-4">
        Pentru întrebări legate de termeni si condiții sau pentru a vă exercita drepturile, ne puteți contacta la:
      </p>
      <ul className="text-gray-700 list-disc list-inside mb-4">
        <li>
          <strong>Telefon WhatsApp:</strong> <a href="tel:+40736690118" className="text-blue-500">+40736690118</a>
        </li>
        <li>
          <strong>Telefon:</strong> <a href="tel:+4915731871996" className="text-blue-500">+4915731871996</a>
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:contact.csweb@gmail.com" className="text-blue-500">contact.csweb@gmail.com</a>
        </li>
      </ul>
    </section>
  );
};

export default TermsAndConditions;
