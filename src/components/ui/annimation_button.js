"use client";
import React from "react";
import Link from "next/link";

const AnimatedButton = ({ children, path = null, onClick, className = "", type = "button" }) => {
  const content = (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer px-6 py-2 font-semibold text-white bg-[#C27D2A] rounded-full group transition ${className}`}
    >
      {/* Gradient overlay */}
      <span className="absolute inset-0 -translate-x-full bg-[#ac640d] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );

  if (path) {
    return <Link href={path}>{content}</Link>;
  }

  return content;
};

export default AnimatedButton;
