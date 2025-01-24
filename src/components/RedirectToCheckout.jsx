import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51QjKAx077Yw0Kd8saYZsAqoZcg6c05Cc2i0xRbBVnYVjSZI6gKoGcGCnXtXbLYcs9FotWsSxsM0HhJejvzuVlTzR00ZW1rAWj2"
); // Cheia publică de la Stripe Dashboard

const RedirectToCheckout = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Creează un redirect către Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1QkXei077Yw0Kd8sDnG8sB3p", // ID-ul prețului generat în dashboard
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (error) {
      console.error("Eroare la redirecționare:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Plătește acum
    </button>
  );
};

export default RedirectToCheckout;
