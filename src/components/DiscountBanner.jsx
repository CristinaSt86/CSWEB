import { useState, useEffect } from "react";
import { FaGift, FaStar } from "react-icons/fa"; // Asigură-te că ai importat iconițele corect

const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // După 10 secunde, bannerul se va retrage
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10000ms = 10 secunde

    // Curățăm timerul când componenta se demontează
    return () => clearTimeout(timer);
  }, []); // Aceasta se va executa o singură dată când componenta este montată

  return (
    <div
      className={`fixed bottom-0 rounded left-0 w-full sm:w-2/3 bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-black py-4 px-6 shadow-lg z-50 
                  ${isVisible ? "animate-slideIn" : "animate-slideOut"}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Reducere Exclusivă!</h2>
          <FaGift className="text-green-500" size={24} />
        </div>
        <p className="text-sm mt-1 flex items-center space-x-1">
          <span>Profită acum de o reducere de 20% la toate produsele, doar până la finalul lunii!</span>
          <FaStar className="text-yellow-400" size={20} />
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-black font-bold px-4 py-2 rounded-full bg-transparent border-2 border-black hover:bg-black hover:text-white transition duration-300"
        >
          Închide
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
