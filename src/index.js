import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';  // Asigură-te că fișierul i18n este importat corect
import LanguageSwitcher from './components/LanguageSwitcher';
import { I18nextProvider } from 'react-i18next';  // Importă I18nextProvider
import i18n from './i18n';  // Asigură-te că importi instanța i18n

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>  {/* Învelește aplicația cu I18nextProvider */}
      <App />
      <LanguageSwitcher />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
