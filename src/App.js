import React from "react";
import { Helmet } from "react-helmet";
import LandingPage from "./components/LandingPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Payment from "./components/Payment";

function App() {
  return (
    <div>
      {/* SEO optimizations using Helmet */}
      <Helmet>
        <title>
          Inovație Digitală - Soluții Personalizate pentru Afacerea Ta
        </title>
        <meta
          name="description"
          content="Transformă-ți afacerea cu soluții digitale inovatoare. Descoperă servicii personalizate: dezvoltare web, aplicații mobile și multe altele!"
        />
        <meta
          name="keywords"
          content="dezvoltare web, aplicații mobile, soluții digitale, SEO, afaceri"
        />
        <meta name="author" content="CS|WEB" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Inovație Digitală - Soluții Personalizate pentru Afacerea Ta"
        />
        <meta
          property="og:description"
          content="Transformă-ți afacerea cu soluții digitale inovatoare. Descoperă servicii personalizate: dezvoltare web, aplicații mobile și multe altele!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csweb.pro" />
        <meta
          property="og:image"
          content="https://csweb.pro/assets/preview.png"
        />
        <link rel="canonical" href="https://csweb.pro" />
      </Helmet>
      {/* Navbar */}
      <Navbar />
      {/* Main content */}

      <LandingPage />
      <ScrollToTopButton />
      {/* Footer */}
      <Footer />
      {/* <Payment /> */}
    </div>
  );
}

export default App;
