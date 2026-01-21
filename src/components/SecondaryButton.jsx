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
    light: "border-white/70 text-white hover:bg-white/10",
    dark: "border text-custom-btn hover:bg-custom-btn/10",
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
        inline-flex items-center justify-center text-center
        whitespace-nowrap
        border border-white
        text-white
        bg-transparent
        rounded
      shadow-md
        transition-all duration-300
        hover:bg-white/10
        hover:border-white
        hover:-translate-y-0.5
        focus:outline-none
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
        ${variantClasses[variant]}
        
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
};

export default SecondaryButton;
