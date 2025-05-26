/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file paths
    "./public/index.html", // Include HTML fișiere pentru a verifica utilizarea claselor
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/public/images/pic1.webp')",
        "services-bg": "url('/public/images/img2copy.webp')",
        "contact-bg": "url('/public/images/5.webp')",
        "preturi-bg": "url('/public/images/8.webp')",
        "contact-bg-overlay":
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3)), url('./images/LOGO.png')",
      },

      colors: {
        "custom-textMenu": "	#1F2937", // Add your custom color
        "custom-btn": "#F97316 ",
        "custom-btn-hover": "#EA580C ",
        "custom-titlu-seo": "#dbdadf",
      },

      animation: {
        slideIn: "slideIn 1s ease-out forwards",
        slideOut: "slideOut 1s ease-in forwards",
        fadeInUp: "fadeInUp 1.5s cubic-bezier(0.5, 1, 0.89, 1) forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(200px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Example custom font family
      },
    },
  },
  plugins: [],
  safelist: [
    // Adăugați aici orice clasă Tailwind care trebuie să fie păstrată în ciuda purgării
    "bg-custom-btn",
    "bg-custom-btn-hover",
    "text-custom-textMenu",
    "text-xl",
  ],
};
