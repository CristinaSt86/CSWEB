import { useState, useEffect } from "react";
import { FaTag, FaRegSmile } from "react-icons/fa"; // Asigură-te că ai importat iconițele corect

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
      className={`fixed bottom-0 rounded left-0 w-full  sm:w-2/3 bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-custom-textMenu py-4 px-6 shadow-lg z-50 
                  ${isVisible ? "animate-slideIn" : "animate-slideOut"}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
   <div>
           <h2 className="text-xl font-bold flex justify-center items-center">
             <FaTag className="mr-2" /> 20% Discount pentru o perioadă limitată!{" "}
             <FaRegSmile className="ml-2" />
           </h2>
           <p className="mt-2">Profitați acum de ofertele noastre exclusive. Reducerea expiră în curând!</p>
         </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-custom-textMenu font-bold px-4 py-2 rounded-full bg-transparent border-2 border-custom-textMenu hover:bg-custom-textMenu hover:text-white transition duration-300"
        >
          Închide
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
