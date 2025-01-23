// Payment.js
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = () => {
  const handlePaymentSuccess = (details, data) => {
    alert('Plata a fost realizată cu succes de ' + details.payer.name.given_name);
    // Aici poți trimite informațiile tranzacției către backend sau să procesezi mai departe
  };

  return (
    <section id="payment" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Plătește pentru Serviciile noastre</h2>
        <p className="mb-8 text-xl">
          Completează plata pentru serviciile noastre. Folosește PayPal pentru a plăti rapid și securizat.
        </p>
        
        {/* Butonul PayPal */}
        <PayPalButton
          amount="10.00"  // Suma pe care utilizatorul trebuie să o plătească
          onSuccess={handlePaymentSuccess}  // Funcția care se va apela când plata este confirmată
          options={{
            clientId: "your-paypal-client-id"  // Înlocuiește cu Client ID-ul tău PayPal
          }}
        />
      </div>
    </section>
  );
};

export default Payment;
