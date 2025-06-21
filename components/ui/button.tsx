import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyles = "rounded-xl font-semibold transition-colors duration-200";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
}
