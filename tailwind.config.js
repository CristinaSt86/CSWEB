/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file paths
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('./images/pic1.webp')",
        "services-bg": "url('./images/img1.webp')",
        "contact-bg": "url('./images/8.webp')",
        "preturi-bg": "url('./images/8.webp')",
        "contact-bg-overlay":
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3)), url('./images/LOGO.png')",
      },

      colors: {
        "custom-textMenu": "#372a25", // Add your custom color
        "custom-btn": "#368e33",
        "custom-btn-hover": "#2c722a",
      },

      animation: {
        slideIn: "slideIn 0.8s ease-out forwards",
        slideOut: "slideOut 0.8s ease-in forwards",
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
    },
  },
  plugins: [],
};
