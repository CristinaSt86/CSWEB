import React, { useRef } from "react";
import { useTranslation } from "react-i18next"; // Import i18n for translations

const Form = React.forwardRef((props, ref) => {
  const { t } = useTranslation(); // Initialize translation hook
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
        alert(t("form.successMessage"));
        form.reset();
      } else {
        alert(t("form.errorMessage"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("form.connectionErrorMessage"));
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-custom-textMenu">
      <h3 className="text-2xl font-bold mb-6">{t("form.heading")}</h3>
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
            placeholder={t("form.namePlaceholder")}
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
            placeholder={t("form.emailPlaceholder")}
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
            placeholder={t("form.messagePlaceholder")}
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
          {t("form.submitButton")}
        </button>
      </form>
    </div>
  );
});

export default Form;
