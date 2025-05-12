import React from "react";
import PropTypes from "prop-types";
import { HiArrowDown } from "react-icons/hi";

const Button = ({
  label,
  onClick = null, // Default parameter
  targetSectionId = null, // Default parameter
  className = "", // Default parameter
  additionalStyles = {}, // Default parameter
  size = "medium", // Default parameter
  disabled = false, // Default parameter
  primaryColor = "bg-custom-btn", // Default parameter
  hoverColor = "hover:bg-custom-btn-hover", // Default parameter
  ariaLabel = null, // Default parameter
}) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Call custom onClick handler
    } else if (targetSectionId) {
      // Scroll to the target section if provided
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "start",
        });
      }
    }
  };

  // Define button size classes
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Determine the button's size class
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      onClick={handleButtonClick}
      type="button"
      className={`${primaryColor} ${sizeClass} text-white border-white border-[0.5px] shadow-md rounded focus:outline-none transition-all duration-300 hover:${hoverColor} hover:shadow-xl hover:-translate-y-1 ${className}`}
      style={additionalStyles}
      disabled={disabled}
      aria-label={ariaLabel} // For better accessibility
    >
      {label}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  targetSectionId: PropTypes.string,
  className: PropTypes.string,
  additionalStyles: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]), // Button size options
  disabled: PropTypes.bool, // Disable the button
  primaryColor: PropTypes.string, // Primary button color
  hoverColor: PropTypes.string, // Hover color
  ariaLabel: PropTypes.string, // For accessibility
};

export default Button;
