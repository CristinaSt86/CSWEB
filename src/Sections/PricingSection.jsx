import React, { useState, lazy, Suspense } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
//import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPuzzlePiece,
} from "react-icons/fa"; 

const LazyPaymentPage = lazy(() => import("../components/PaymentPage"));
// const stripePromise = loadStripe(
//   "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
// );

const packages = [
  {
    id: "basic-package",
    name: "basicPackage",
    tagline: "Pentru startup-uri & portofolii",
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
    tagline: "Pentru magazine online în creștere",
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
    tagline: "Soluții complexe pentru afaceri unice",
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

  // const openPaymentPage = (packageType) => {
  //   setActivePackage(packageType);
  // };

  const closePaymentPage = () => {
    setActivePackage(null);
  };

  const getIcon = (type) => {
    switch (type) {
      case "basic":
        return <FaLaptopCode className="text-5xl text-custom-btn mb-4" />;
      case "ecommerce":
        return <FaShoppingCart className="text-5xl text-custom-btn mb-4" />;
      case "custom":
        return <FaPuzzlePiece className="text-5xl text-custom-btn mb-4" />;
      default:
        return null;
    }
  };
  return (
    <section
      id="pricing"
      className="min-h-screen bg-fixed flex flex-col items-center justify-center px-2 py-24"
      aria-labelledby="pricing-heading"
      style={{
        backgroundImage: `url('/images/j.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 rounded text-lg">
        <h1
          id="pricing-heading"
          className="text-4xl font-bold text-center mb-12 text-custom-textMenu"
        >
          {t("pricingHeading")}
        </h1>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <p className="text-center text-gray-700 font-medium mb-12">
          {t("description")}
        </p>
        <p className="text-center text-gray-600 mb-12">
          {t("pricingNote", { price: "299 EUR" })}
        </p>
        <div className="relative flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 items-stretch justify-center">
          {packages.map((pkg) => (
            <div
              key={pkg.type}
              id={pkg.id}
              className="relative flex-1 bg-white rounded-lg shadow-lg p-6 min-h-full flex flex-col justify-between"
            >
              {pkg.type === "custom" && (
                <span className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  {t("bestChoice") || "Recomandat"}
                </span>
              )}
              <div>
                <div className="flex flex-col items-center">
                  {getIcon(pkg.type)}
                  <h2 className="text-2xl font-bold text-custom-textMenu mb-2 text-center">
                    {t(`packages.${pkg.name}.name`)}
                  </h2>
                </div>
                <p className="text-sm italic text-gray-500 text-center mb-4">
                  {t(`packages.${pkg.name}.tagline`) || pkg.tagline}
                </p>
                <p className="text-gray-600 mb-6 text-center">
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
                {/* <p className="text-2xl font-bold text-custom-textMenu py-2">
                  {t(`packages.${pkg.name}.price`) || pkg.price}
                </p> */}
                <Button
                  label={t("requestOffer")}
                  targetSectionId="contact"
                  className="mt-3 mx-1 text-lg hover:bg-custom-btn-hover"
                />
                {/* <Button
                  label={t("payNow")}
                  primaryColor="bg-blue-500"
                  hoverColor="bg-blue-600"
                  onClick={() => openPaymentPage(pkg.type)}
                  className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded mb-3 mx-1 text-lg"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePackage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative m-2">
            <button
              onClick={closePaymentPage}
              className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-red-600 transition"
            >
              ✖
            </button>
            {/* <Suspense
              fallback={<div className="text-center">Loading Payment...</div>}
            >
              <Elements stripe={stripePromise}>
                <LazyPaymentPage />
              </Elements>
            </Suspense> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
