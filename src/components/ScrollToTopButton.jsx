import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Verificăm dacă utilizatorul a derulat în jos mai mult de 300px pentru a arăta butonul
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // La fiecare schimbare a poziției de scroll, verificăm
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Scroll la începutul paginii
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="z-50 fixed bottom-16 right-4 bg-custom-btn text-white w-10 h-10 rounded-full shadow-lg transition-transform duration-500  hover:scale-110 focus:outline-none flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
