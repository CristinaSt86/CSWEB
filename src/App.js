import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppContent from "./AppContent";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
