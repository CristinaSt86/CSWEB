import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

const Form = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const nameInputRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    focusNameInput: () => {
      nameInputRef.current?.focus();
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

  const inputClasses =
    "w-full rounded-2xl border border-gray-200/80 bg-white/70 px-4 py-3 text-custom-textMenu placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-custom-btn/50 focus:bg-white focus:ring-2 focus:ring-custom-btn/20";

  return (
    <div className="w-full text-custom-textMenu">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-6">
        {t("form.heading")}
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            {t("form.namePlaceholder")}
          </label>

          <input
            type="text"
            id="name"
            name="name"
            ref={nameInputRef}
            placeholder={t("form.namePlaceholder")}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {t("form.emailPlaceholder")}
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("form.emailPlaceholder")}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t("form.messagePlaceholder")}
          </label>

          <textarea
            id="message"
            name="message"
            placeholder={t("form.messagePlaceholder")}
            rows="5"
            required
            className={`${inputClasses} resize-none`}
          />
        </div>

        <Button
          label={t("form.submitButton")}
          type="submit"
          size="large"
          className="w-full"
        />
      </form>
    </div>
  );
});

Form.displayName = "Form";

export default Form;