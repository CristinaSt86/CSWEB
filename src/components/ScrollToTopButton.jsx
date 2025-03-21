import { useState, useEffect } from "react";

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
        className="z-50 fixed bottom-10 md:bottom-4 right-4 bg-custom-btn text-white w-10 h-10 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <span className="text-xl">&#8593;</span> {/* Săgeata în sus */}
      </button>
    )
  );
};

export default ScrollToTopButton;
