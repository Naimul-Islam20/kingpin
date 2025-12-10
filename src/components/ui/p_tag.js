"use client";

export default function P_Text({ text }) {
  return (
    <div className="w-full">
      <p className="text-sm sm:text-base md:text-lg md:text-center text-justify text-gray-700 w-full">
        {text}
      </p>
    </div>
  );
}
