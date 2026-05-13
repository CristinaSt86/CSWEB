import React from "react";
import PropTypes from "prop-types";

const SecondaryButton = ({
  label,
  onClick = null,
  targetSectionId = null,
  className = "",
  additionalStyles = {},
  size = "medium",
  disabled = false,
  ariaLabel = null,
  variant = "light",
}) => {
  const handleButtonClick = () => {
    if (onClick) onClick();
    else if (targetSectionId) {
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg font-semibold",
  };

  const variantClasses = {
    light:
      "border border-white/40 bg-white/80 backdrop-blur-md text-custom-btn hover:bg-white/85 hover:border-white/70 hover:text-custom-btn",
    dark:
      "border border-custom-btn/30 bg-custom-btn/5 text-custom-btn hover:bg-custom-btn/10",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${sizeClass}
        ${variantClasses[variant]}
        inline-flex items-center justify-center text-center
        whitespace-nowrap
        rounded-xl
        shadow-md
        transition-all duration-300
        hover:-translate-y-0.5
        focus:outline-none
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      style={additionalStyles}
    >
      {label}
    </button>
  );
};

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  targetSectionId: PropTypes.string,
  className: PropTypes.string,
  additionalStyles: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark"]),
};

export default SecondaryButton;