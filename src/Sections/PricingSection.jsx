import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "../components/PaymentPage";

// Initialize Stripe with your public key
const stripePromise = loadStripe(
  "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
);

const PricingSection = () => {
  const [isInView, setIsInView] = useState({
    basic: false,
    ecommerce: false,
    custom: false,
  });
  const [loading, setLoading] = useState(false);
  const [activePackage, setActivePackage] = useState(null); // Setează pachetul activ

  // Handler pentru deschiderea componentei de plată
  const openPaymentPage = (packageType) => {
    setActivePackage(packageType);
    setLoading(true); // Activează încărcarea la apăsarea butonului
  };

  const closePaymentPage = () => {
    setActivePackage(null); // Resetează pachetul activ când se închide componenta
    setLoading(false); // Dezactivează încărcarea
  };

  // Handle Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "basic-package") {
            setIsInView((prev) => ({ ...prev, basic: true }));
          }
          if (entry.target.id === "ecommerce-package") {
            setIsInView((prev) => ({ ...prev, ecommerce: true }));
          }
          if (entry.target.id === "custom-package") {
            setIsInView((prev) => ({ ...prev, custom: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const basicPackage = document.getElementById("basic-package");
    const ecommercePackage = document.getElementById("ecommerce-package");
    const customPackage = document.getElementById("custom-package");

    if (basicPackage) observer.observe(basicPackage);
    if (ecommercePackage) observer.observe(ecommercePackage);
    if (customPackage) observer.observe(customPackage);

    return () => {
      if (basicPackage) observer.unobserve(basicPackage);
      if (ecommercePackage) observer.unobserve(ecommercePackage);
      if (customPackage) observer.unobserve(customPackage);
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
          {/* Pachet Basic */}
          <div
            id="basic-package"
            className={`flex-1 relative transition-all duration-1000 ease-in-out transform ${
              isInView.basic
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300 hidden md:block"></div>
            <div className="text-center md:text-left p-4">
              <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
                Pachet Basic
              </h2>
              <p className="text-gray-600 mb-6">
                Perfect pentru un site simplu de prezentare.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✔ Design responsive</li>
                <li>✔ Până la 10 pagini</li>
                <li>✔ Formular de contact</li>
                <li>✔ Optimizare SEO de bază</li>
              </ul>
              <p className="text-2xl font-bold text-custom-textMenu py-2">De la 300 EUR</p>
              <Button
                label="Solicită ofertă"
                targetSectionId="contact"
                className="mt-6 mx-1"
              />
              {/* Butonul de plată */}
              <Button
                label="Plătește acum"
                onClick={() => openPaymentPage("basic")}
                primaryColor="bg-blue-500"
                hoverColor="bg-blue-600"
                className="mt-6 px-6 py-2 text-white rounded mb-6 mx-1"
              />
              {/* Componenta de plată pentru pachetul basic */}
              {activePackage === "basic" && (
                <div className="relative">
                  {/* Close Button */}
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

          {/* Separator pentru mobil */}
          <div className="w-full h-0.5 bg-gray-300 md:hidden"></div>

          {/* Pachet E-commerce */}
          <div
            id="ecommerce-package"
            className={`flex-1 relative transition-all duration-1000 ease-in-out transform ${
              isInView.ecommerce
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300 hidden md:block"></div>
            <div className="text-center md:text-left p-4">
              <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
                Pachet E-commerce
              </h2>
              <p className="text-gray-600 mb-6">
                Ideal pentru magazine online mici și mijlocii.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✔ Catalog produse până la 50 articole</li>
                <li>✔ Integrare metode de plată</li>
                <li>✔ Panou de administrare</li>
                <li>✔ Optimizare SEO avansată</li>
              </ul>
              <p className="text-2xl font-bold text-custom-textMenu py-2">De la 700 EUR</p>
              <Button
                label="Solicită ofertă"
                targetSectionId="contact"
                className="mt-6 mx-1"
              />
              {/* Butonul de plată */}
              <Button
                label="Plătește acum"
                onClick={() => openPaymentPage("ecommerce")}
                primaryColor="bg-blue-500"
                hoverColor="bg-blue-600"
                className="mt-6 px-6 py-2 text-white rounded mb-6 mx-1"
              />
              {/* Componenta de plată pentru pachetul ecommerce */}
              {activePackage === "ecommerce" && (
                <div className="relative">
                  {/* Close Button */}
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

          {/* Separator pentru mobil */}
          <div className="w-full h-0.5 bg-gray-300 md:hidden"></div>

          {/* Pachet Personalizat */}
          <div
            id="custom-package"
            className={`flex-1 relative transition-all duration-1000 ease-in-out transform ${
              isInView.custom
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300 hidden md:block"></div>
            <div className="text-center md:text-left p-4">
              <h2 className="text-2xl font-bold text-custom-textMenu mb-4">
                Pachet Personalizat
              </h2>
              <p className="text-gray-600 mb-6">
                Soluție personalizată și inovativă pentru afacerea ta.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6 ">
                <li>✔ Funcționalități personalizate</li>
                <li>✔ Integrare API-uri</li>
                <li>✔ Optimizare SEO premium</li>
                <li>✔ Suport tehnic dedicat</li>
              </ul>
              <p className="text-2xl font-bold text-custom-textMenu py-2">De la 1100 EUR</p>
              <Button
                label="Solicită ofertă"
                targetSectionId="contact"
                className="mt-6 mx-1"
              />

              {/* Butonul de plată */}
              <Button
                label="Plătește acum"
                onClick={() => openPaymentPage("custom")}
                primaryColor="bg-blue-500"
                hoverColor="bg-blue-600"
                className="mt-6 px-6 py-2 text-white rounded mb-6 mx-1"
              />

              {/* Componenta de plată pentru pachetul personalizat */}
              {activePackage === "custom" && (
                <div className="relative">
                  {/* Close Button */}
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
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
