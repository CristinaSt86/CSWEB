import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-6 pt-36 pb-16 ">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Politica de Confidențialitate</h1>
      <p className="text-gray-700 mb-4">
        Confidențialitatea dumneavoastră este importantă pentru noi. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră personale.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Informații colectate</h2>
      <p className="text-gray-700 mb-4">
        Colectăm informații personale pe care ni le furnizați voluntar, cum ar fi numele, adresa de e-mail și alte detalii necesare pentru a vă oferi serviciile noastre.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Utilizarea informațiilor</h2>
      <p className="text-gray-700 mb-4">
        Utilizăm informațiile colectate pentru a îmbunătăți serviciile noastre, a comunica cu dumneavoastră și a asigura o experiență mai bună pe site-ul nostru.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Securitatea informațiilor</h2>
      <p className="text-gray-700 mb-4">
        Luăm măsuri de securitate adecvate pentru a proteja informațiile personale împotriva accesului neautorizat, modificării sau divulgării.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Drepturile dumneavoastră</h2>
      <p className="text-gray-700 mb-4">
        Aveți dreptul să accesați, să corectați sau să ștergeți informațiile personale pe care le deținem despre dumneavoastră. Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contact</h2>
      <p className="text-gray-700 mb-4">
        Pentru întrebări legate de politica de confidențialitate sau pentru a vă exercita drepturile, ne puteți contacta la:
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

export default PrivacyPolicy;
