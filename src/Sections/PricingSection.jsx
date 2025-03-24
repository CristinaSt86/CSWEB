// import React, { useState, useEffect } from "react";
// import Button from "../components/Button";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentPage from "../components/PaymentPage";
// import { useTranslation } from "react-i18next"; // Import i18n

// // Initialize Stripe with your public key
// const stripePromise = loadStripe(
//   "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
// );

// const packages = [
//   {
//     id: "basic-package",
//     name: "basicPackage",
//     description: "Perfect pentru un site simplu de prezentare.",
//     features: [
//       "✔ Până la 10 pagini simple.",
//       "✔ Formular de contact integrat pentru a putea interacționa cu vizitatorii.",
//       "✔ Optimizare SEO de bază pentru a ajunge la mai mulți utilizatori pe Google.",
//       '✔ Buton "Back to Top" pentru o navigare ușoară pe pagină.',
//       "✔ Posibilitatea de a adăuga texte și imagini personalizate pe fiecare pagină.",
//       "✔ Traducere în limba principală a site-ului (una singură, fără multilingvistică avansată).",
//     ],
//     price: "De la 200 EUR",
//     type: "basic",
//   },
//   {
//     id: "ecommerce-package",
//     name: "ecommercePackage",
//     description: "Ideal pentru magazine online mici și mijlocii.",
//     features: [
//       "✔ Magazin online cu până la 50 de produse.",
//       "✔ Funcționalitate coș de cumpărături integrat pentru a adăuga și cumpăra produse.",
//       "✔ Plăți sigure online (prin card sau PayPal).",
//       "✔ Posibilitatea de a adăuga review-uri pentru produse.",
//       "✔ Integrare cu Google Maps pentru locația magazinului (dacă este necesar).",
//       "✔ Optimizare SEO avansată pentru a atrage mai mulți vizitatori din căutările online.",
//       "✔ Traducere în multiple limbi pentru a accesa un public internațional (în funcție de alegerea ta).",
//       '✔ Buton "Back to Top" pentru a îmbunătăți navigarea în magazin.',
//     ],
//     price: "De la 600 EUR",
//     type: "ecommerce",
//   },
//   {
//     id: "custom-package",
//     name: "customPackage",
//     description: "Soluție personalizată și inovativă pentru afacerea ta.",
//     features: [
//       "✔ Funcționalități personalizate care răspund cerințelor afacerii tale.",
//       "✔ Integrare API-uri pentru a conecta site-ul cu sisteme externe (ex. CRM, ERP, etc.).",
//       "✔ Hărți Google interactive pentru locații multiple (indiferent de business-ul tău).",
//       "✔ Traducere completă în mai multe limbi pentru a ajunge la un public global.",
//       "✔ Posibilitatea de a implementa formulare și funcționalități avansate (ex. rezervări, calculatoare de preț personalizat, etc.).",
//       "✔ Funcționalități de login și management al conturilor utilizatorilor (ex. pentru platforme de socializare sau magazine online).",
//       '✔ Buton "Back to Top" personalizat pe designul paginii.',
//       "✔ Optimizare SEO premium pentru a atrage clienți din toate colțurile lumii.",
//     ],
//     price: "De la 1000 EUR",
//     type: "custom",
//   },
// ];

// const PricingSection = () => {
//   const { t } = useTranslation(); // Initialize translation hook
//   const [isInView, setIsInView] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [activePackage, setActivePackage] = useState(null);

//   const openPaymentPage = (packageType) => {
//     setActivePackage(packageType);
//     setLoading(true);
//   };

//   const closePaymentPage = () => {
//     setActivePackage(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const options = { root: null, rootMargin: "0px", threshold: 0.3 };

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsInView((prev) => ({ ...prev, [entry.target.id]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);
//     packages.forEach((pkg) => {
//       const element = document.getElementById(pkg.id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       packages.forEach((pkg) => {
//         const element = document.getElementById(pkg.id);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, []);

//   return (
//     <section
//       id="pricing"
//       className="min-h-screen bg-gradient-to-r from-bej-300 via-gray-400 to-bej-500 flex flex-col items-center justify-center px-2 py-24"
//       aria-labelledby="pricing-heading"
//     >
//       <div className="container mx-auto px-8 backdrop-blur-lg rounded text-lg">
//         <h1
//           id="pricing-heading"
//           className="text-4xl font-bold text-center mb-12 text-custom-textMenu"
//         >
//           {t("pricingHeading")} {/* Translated heading */}
//         </h1>
//         <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
//         <p className="text-center text-gray-700 mb-16">
//           {t("description")} {/* Translated description */}
//         </p>
//         <div className="relative flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 items-stretch justify-center">
//   {packages.map((pkg) => (
//     <div
//       key={pkg.type}
//       id={pkg.id}
//       className={`flex-1 relative transition-all duration-1000 ease-in-out transform bg-white rounded-lg shadow-lg p-6 min-h-full flex flex-col justify-between`}
//     >
//       <div>
//         <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
//           {t(`packages.${pkg.name}.name`)}
//         </h2>
//         <p className="text-gray-600 mb-6">
//           {t(`packages.${pkg.name}.description`)}
//         </p>
//         <ul className="text-gray-700 space-y-2 mb-6">
//           {pkg.features.map((feature, index) => (
//             <li key={index}>
//               {t(`packages.${pkg.name}.features.${index}`) || feature}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ✅ Aliniere perfectă a butoanelor la bază */}
//       <div className="mt-auto flex flex-col items-center pb-6">
//         <p className="text-2xl font-bold text-custom-textMenu py-2">
//           {t(`packages.${pkg.name}.price`)}
//         </p>
//         <Button
//           label={t("requestOffer")}
//           targetSectionId="contact"
//           className="mt-3 mx-1 text-lg"
//         />
//         <Button
//           label={t("payNow")}
//           aria-label="Închide formularul de plată"
//           onClick={() => openPaymentPage(pkg.type)}
//           primaryColor="bg-blue-500"
//           hoverColor="bg-blue-600"
//           className="mt-3 px-6 py-2 text-white rounded mb-3 mx-1 text-lg"
//         />
//       </div>
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import React, { useState, lazy, Suspense } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// 🔹 Lazy-load PaymentPage to improve performance
const LazyPaymentPage = lazy(() => import("../components/PaymentPage"));

// 🔹 Initialize Stripe (replace with your environment variable if possible)
const stripePromise = loadStripe(
  "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
);

const packages = [
  {
    id: "basic-package",
    name: "basicPackage",
    description: "Perfect pentru un site simplu de prezentare.",
    features: [
      "✔ Până la 10 pagini simple.",
      "✔ Formular de contact integrat.",
      "✔ Optimizare SEO de bază.",
      '✔ Buton "Back to Top".',
      "✔ Texte și imagini personalizate.",
      "✔ Traducere într-o singură limbă.",
    ],
    price: "De la 200 EUR",
    type: "basic",
  },
  {
    id: "ecommerce-package",
    name: "ecommercePackage",
    description: "Ideal pentru magazine online mici și mijlocii.",
    features: [
      "✔ Magazin online cu până la 50 de produse.",
      "✔ Funcționalitate coș de cumpărături.",
      "✔ Plăți sigure online (card, PayPal).",
      "✔ Posibilitatea de a adăuga review-uri.",
      "✔ Optimizare SEO avansată.",
      "✔ Traducere în multiple limbi.",
    ],
    price: "De la 600 EUR",
    type: "ecommerce",
  },
  {
    id: "custom-package",
    name: "customPackage",
    description: "Soluție personalizată și inovativă pentru afacerea ta.",
    features: [
      "✔ Funcționalități personalizate.",
      "✔ Integrare API-uri externe.",
      "✔ Hărți Google interactive.",
      "✔ Traducere completă în mai multe limbi.",
      "✔ Optimizare SEO premium.",
      "✔ Funcționalități de login și conturi utilizatori.",
    ],
    price: "De la 1000 EUR",
    type: "custom",
  },
];

const PricingSection = () => {
  const { t } = useTranslation();
  const [activePackage, setActivePackage] = useState(null);

  // 🔹 Open Payment Modal
  const openPaymentPage = (packageType) => {
    console.log("Opening PaymentPage for:", packageType);
    setActivePackage(packageType);
  };

  // 🔹 Close Payment Modal
  const closePaymentPage = () => {
    console.log("Closing PaymentPage");
    setActivePackage(null);
  };

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gradient-to-r from-bej-300 via-gray-400 to-bej-500 flex flex-col items-center justify-center px-2 py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4 backdrop-blur-lg rounded text-lg">
        <h1
          id="pricing-heading"
          className="text-4xl font-bold text-center mb-12 text-custom-textMenu"
        >
          {t("pricingHeading")}
        </h1>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <p className="text-center text-gray-700 mb-16">{t("description")}</p>

        <div className="relative flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 items-stretch justify-center">
          {packages.map((pkg) => (
            <div
              key={pkg.type}
              id={pkg.id}
              className="flex-1 bg-white rounded-lg shadow-lg p-6 min-h-full flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
                  {t(`packages.${pkg.name}.name`)}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t(`packages.${pkg.name}.description`)}
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      {t(`packages.${pkg.name}.features.${index}`) || feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col items-center pb-6">
                <p className="text-2xl font-bold text-custom-textMenu py-2">
                  {t(`packages.${pkg.name}.price`)}
                </p>
                <Button
                  label={t("requestOffer")}
                  targetSectionId="contact"
                  className="mt-3 mx-1 text-lg hover:bg-custom-btn-hover"
                />
                <Button
                  label={t("payNow")}
                  primaryColor="bg-blue-500"
                  hoverColor="bg-blue-600"
                  onClick={() => openPaymentPage(pkg.type)}
                  className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded mb-3 mx-1 text-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Payment Modal */}
      {activePackage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative m-2">
            {/* 🔴 Close Button */}
            <button
              onClick={closePaymentPage}
              className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-red-600 transition"
            >
              ✖
            </button>

            {/* 🔹 Lazy Loaded PaymentPage */}
            <Suspense
              fallback={<div className="text-center">Loading Payment...</div>}
            >
              <Elements stripe={stripePromise}>
                <LazyPaymentPage />
              </Elements>
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
