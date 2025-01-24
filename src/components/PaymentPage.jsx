import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event, packageId) => {
    event.preventDefault();
    setError("");
    setLoading(true);
  
    // Scroll la secțiunea corespunzătoare
    const packageElement = document.getElementById(packageId);
    if (packageElement) {
      packageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  
    if (!stripe || !elements) {
      setError("Stripe nu este încă inițializat. Încercați din nou.");
      setLoading(false);
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
  
      if (error) {
        setError(error.message);
      } else {
        console.log("[PaymentMethod]", paymentMethod);
        setSuccess(true);
      }
    } catch (err) {
      setError("A apărut o eroare neașteptată. Vă rugăm să încercați din nou.");
      console.error("Stripe Error:", err);
    }
  
    setLoading(false);
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Plata cu cardul</h2>
      {success ? (
        <div className="text-center text-green-600">
          <p className="text-lg font-semibold">Plată reușită!</p>
          <p>Mulțumim pentru achiziție. Veți primi detalii prin e-mail.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement
              className="p-2 border rounded-md"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">
              <strong>Eroare:</strong> {error}
            </p>
          )}
          <button
            type="submit"
            disabled={!stripe || loading}
            className={`w-full px-4 py-2 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Procesare..." : "Plătește"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
