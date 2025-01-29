import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "../components/PaymentPage";

// Initialize Stripe with your public key
const stripePromise = loadStripe(
  "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
);

const packages = [
  {
    id: "basic-package",
    name: "Pachet Basic",
    description: "Perfect pentru un site simplu de prezentare.",
    features: [
      "✔ Design responsive",
      "✔ Până la 10 pagini",
      "✔ Formular de contact",
      "✔ Optimizare SEO de bază",
    ],
    price: "De la 300 EUR",
    type: "basic",
  },
  {
    id: "ecommerce-package",
    name: "Pachet E-commerce",
    description: "Ideal pentru magazine online mici și mijlocii.",
    features: [
      "✔ Catalog produse până la 50 articole",
      "✔ Integrare metode de plată",
      "✔ Panou de administrare",
      "✔ Optimizare SEO avansată",
    ],
    price: "De la 700 EUR",
    type: "ecommerce",
  },
  {
    id: "custom-package",
    name: "Pachet Personalizat",
    description: "Soluție personalizată și inovativă pentru afacerea ta.",
    features: [
      "✔ Funcționalități personalizate",
      "✔ Integrare API-uri",
      "✔ Optimizare SEO premium",
      "✔ Suport tehnic dedicat",
    ],
    price: "De la 1100 EUR",
    type: "custom",
  },
];

const PricingSection = () => {
  const [isInView, setIsInView] = useState({});
  const [loading, setLoading] = useState(false);
  const [activePackage, setActivePackage] = useState(null);

  const openPaymentPage = (packageType) => {
    setActivePackage(packageType);
    setLoading(true);
  };

  const closePaymentPage = () => {
    setActivePackage(null);
    setLoading(false);
  };

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.3 };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    packages.forEach((pkg) => {
      const element = document.getElementById(pkg.id);
      if (element) observer.observe(element);
    });

    return () => {
      packages.forEach((pkg) => {
        const element = document.getElementById(pkg.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gradient-to-r from-bej-300 via-gray-400 to-bej-500 flex flex-col items-center justify-center px-2 py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-8 backdrop-blur-lg rounded">
        <h1
          id="pricing-heading"
          className="text-4xl font-bold text-center mb-12 text-custom-textMenu"
        >
          Investiții Smart pentru Web
        </h1>
        <div className="my-16 border-t-2 border-gray-300 w-1/3 mx-auto"></div>
        <p className="text-center text-gray-700 mb-16">
          Alege soluția care se potrivește afacerii tale. Fiecare pachet include
          optimizare SEO, design atractiv și funcționalități adaptate nevoilor
          tale.
        </p>
        <div className="relative flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 items-center md:items-start justify-center">
          {packages.map((pkg) => (
            <div
              key={pkg.type}
              id={pkg.id}
              className={`flex-1 relative transition-all duration-1000 ease-in-out transform ${
                isInView[pkg.id]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300 hidden md:block"></div>
              <div className="text-center md:text-left p-4">
                <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
                  {pkg.name}
                </h2>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-custom-textMenu py-2">
                  {pkg.price}
                </p>
                <Button
                  label="Solicită ofertă"
                  targetSectionId="contact"
                  className="mt-6 mx-1"
                />
                <Button
                  label="Plătește acum"
                  onClick={() => openPaymentPage(pkg.type)}
                  primaryColor="bg-blue-500"
                  hoverColor="bg-blue-600"
                  className="mt-6 px-6 py-2 text-white rounded mb-6 mx-1"
                />
                {activePackage === pkg.type && (
                  <div className="relative">
                    <button
                      onClick={closePaymentPage}
                      className="absolute top-0 right-2 text-custom-textMenu font-bold text-xl p-2"
                    >
                      x
                    </button>
                    {loading && (
                      <Elements stripe={stripePromise}>
                        <PaymentPage />
                      </Elements>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
