import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  onClick = null,
  targetSectionId = null,
  className = "",
  additionalStyles = {},
  size = "medium",
  disabled = false,
  primaryColor = "bg-custom-btn",
  hoverColor = "hover:bg-custom-btn-hover",
  ariaLabel = null,
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
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-7 py-3 text-lg font-semibold",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      onClick={handleButtonClick}
      type="button"
      className={`
        ${primaryColor} ${hoverColor} ${sizeClass}
        inline-flex items-center justify-center text-center
        whitespace-nowrap
        text-white
        border border-custom-btn/80
        rounded-xl
        shadow-md
        transition-all duration-300 ease-out
        hover:shadow-xl
        hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none
        focus:ring-2
        focus:ring-custom-btn/40
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        ${className}
      `}
      style={additionalStyles}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  targetSectionId: PropTypes.string,
  className: PropTypes.string,
  additionalStyles: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  primaryColor: PropTypes.string,
  hoverColor: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;