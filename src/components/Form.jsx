import React, { useRef } from "react";

const Form = React.forwardRef((props, ref) => {
  const nameInputRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    focusNameInput: () => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    },
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/xbllbzlq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Mulțumim! Mesajul tău a fost trimis cu succes.");
        form.reset();
      } else {
        alert("Eroare la trimiterea formularului. Te rog încearcă din nou.");
      }
    } catch (error) {
      console.error("Eroare:", error);
      alert("Eroare la trimiterea mesajului. Te rog verifică conexiunea.");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
      <h3 className="text-2xl font-bold mb-6">Scrie-ne un mesaj</h3>
      <form onSubmit={handleSubmit} noValidate>
        {/* Câmpul pentru Nume */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          ></label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameInputRef}
            placeholder="Nume"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-custom-btn focus:border-custom-btn"
          />
        </div>

        {/* Câmpul pentru Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          ></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-custom-btn focus:border-custom-btn"
          />
        </div>

        {/* Câmpul pentru Mesaj */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          ></label>
          <textarea
            id="message"
            name="message"
            placeholder="Mesajul tău"
            rows="5"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-custom-btn focus:border-custom-btn"
          ></textarea>
        </div>

        {/* Butonul de Trimitere */}
        <button
          type="submit"
          className="bg-custom-btn text-white px-4 py-2 rounded focus:outline-none transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-md hover:-translate-y-1"
        >
          Trimite
        </button>
      </form>
    </div>
  );
});

export default Form;
