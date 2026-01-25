import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaShoppingCart, FaPuzzlePiece } from "react-icons/fa";

const packages = [
  { id: "basic-package", name: "basicPackage", type: "basic" },
  { id: "ecommerce-package", name: "ecommercePackage", type: "ecommerce" },
  { id: "custom-package", name: "customPackage", type: "custom" },
];

const PricingSection = () => {
  const { t } = useTranslation();
  const [activePackage, setActivePackage] = useState(null);

  const closePaymentPage = () => setActivePackage(null);

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

  // ✅ ia features din i18n ca ARRAY (fără features.${index})
  const getFeatures = (pkgName) => {
    const res = t(`packages.${pkgName}.features`, { returnObjects: true });

    // i18next poate întoarce array sau obiect {0:"",1:""}
    if (Array.isArray(res)) return res.filter(Boolean);
    if (res && typeof res === "object")
      return Object.values(res).filter(Boolean);

    return [];
  };

  return (
    <section
      id="pricing"
      className="min-h-screen bg-fixed flex flex-col items-center justify-center px-2 py-24 bg-center bg-no-repeat bg-cover  text-custom-textMenu"
      style={{ backgroundImage: `url('/images/cercuri.webp')` }}
    >
      <div className="container max-w-6xl mx-auto px-4 rounded text-lg">
        <h1
          id="pricing-heading"
          className="text-4xl font-bold text-center mb-12"
        >
          {t("pricingHeading")}
        </h1>

        {/* divider modern */}
        <div className="my-10 md:my-14 flex justify-center">
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
        </div>

        {/* description */}
        <p className="mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl font-medium leading-relaxed text-custom-textMenu/90 mb-6 md:mb-8">
          {t("description")}
        </p>

        {/* pricing note - pill */}
        <div className="flex justify-center mb-10 md:mb-12">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm sm:text-base text-gray-700 shadow-sm backdrop-blur">
            {t("pricingNote", { price: "299 EUR" })}
          </p>
        </div>

        <div className="relative flex flex-col space-y-16 lg:flex-row lg:space-y-0 lg:space-x-12 justify-center">
          {packages.map((pkg) => {
            const featuresToRender = getFeatures(pkg.name);

            return (
              <div
                key={pkg.type}
                id={pkg.id}
                className="
    relative bg-white rounded-lg shadow-lg p-6 flex flex-col
    max-w-xl mx-auto
    lg:max-w-none lg:flex-1
  "
              >
                {pkg.type === "custom" && (
                  <span className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                    {t("packages.customPackage.badge")}
                  </span>
                )}

                <div>
                  <div className="flex flex-col items-center">
                    {getIcon(pkg.type)}
                    <h2 className="text-2xl font-bold text-custom-textMenu mb-2 text-center">
                      {t(`packages.${pkg.name}.name`)}
                    </h2>
                  </div>

                  <p className="text-sm italic text-gray-500 text-center mb-10">
                    {t(`packages.${pkg.name}.tagline`)}
                  </p>
                  {/* 
                  <p className="mb-8 text-center text-sm">
                    {t(`packages.${pkg.name}.description`)}
                  </p> */}

                  <ul className="space-y-2 mb-6 max-h-[240px] overflow-auto pr-2 scrollbar-thin">
                    {featuresToRender.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col items-center pb-6">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById("contact");
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label={t("requestOffer")}
                    className="mt-3 mx-1 text-xl font-semibold text-white bg-custom-btn rounded shadow-md transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-xl hover:-translate-y-1 w-[100%] py-3 inline-flex items-center justify-center"
                  >
                    {t("requestOffer")}
                  </a>
                </div>
              </div>
            );
          })}
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
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
