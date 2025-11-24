"use client";
import React from "react";

export default function DynamicButton({ text, link, className }) {
  return (
    <a
      href={link}
      className={`hidden md:inline-block bg-white text-black font-bold uppercase px-4 py-2 rounded-full items-center hover:bg-gray-300 transition-colors ${
        className || ""
      }`}
    >
      {text}
    </a>
  );
}
