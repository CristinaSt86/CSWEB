import React, { useState, useEffect } from "react";
import { FaRegSmile, FaTag } from "react-icons/fa"; // Dacă vrei să adaugi iconițe

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Se va ascunde bannerul după 10 secunde
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Schimbă starea pentru a activa animația de ieșire
    }, 5000);

    return () => clearTimeout(timer); // Curăță timerul când componenta se demontează
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full rounded px-4 py-2 text-center text-gray-800
        ${isVisible ? "animate-slideIn" : "animate-slideOut"}
        bg-gradient-to-r from-blue-200 via-green-200 to-gray-200 z-50`}
    >
      <div>
        <h2 className="text-xl font-bold flex justify-center items-center">
          <FaTag className="mr-2" /> 20% Discount pentru o perioadă limitată!{" "}
          <FaRegSmile className="ml-2" />
        </h2>
        <p className="mt-2">Profitați acum de ofertele noastre exclusive. Reducerea expiră în curând!</p>
      </div>
    </div>
  );
};

export default Banner;
