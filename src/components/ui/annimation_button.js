"use client";
import React from "react";

const AnimatedButton = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer px-3 py-1 md:px-6 md:py-2 font-semibold md:font-extrabold text-lg md:text-xl uppercase text-white bg-[#C27D2A] rounded-full group transition ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-[#ac640d] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;
