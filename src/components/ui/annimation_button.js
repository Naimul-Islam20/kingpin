"use client";
import React from "react";

const AnimatedButton = ({
  children,
  onClick,
  className = "",
  variant = "primary", // "primary" (gold) or "secondary" (white/outline)
  type = "button",
}) => {
  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative overflow-hidden font-black uppercase tracking-widest transition-all duration-300 border-2 rounded-none px-6 py-3 cursor-pointer flex items-center justify-center
        ${isPrimary 
          ? "bg-primary text-white border-primary hover:border-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]" 
          : "bg-white text-black border-primary hover:border-white"
        } 
        ${className}`}
    >
      {/* Slide-in Background Layer */}
      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none
        ${isPrimary ? "bg-white" : "bg-primary"}`} 
      />
      
      {/* Label Text Layer */}
      <span className={`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2
        ${isPrimary ? "group-hover:text-black" : "group-hover:text-white"}`}>
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
