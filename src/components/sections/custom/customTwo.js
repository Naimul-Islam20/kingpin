"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ এর জন্য

export default function CustomTwoPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/target-page"); // এখানে যেই পেজে নিয়ে যেতে চাও সেই path
  };

  return (
    <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-2 sm-pb-2 md:pb-3 pt-1 sm:pt-3  md:pt-4  grid grid-cols-1 gap-2 sm:gap-6">
      {/* Centered Title & Description */}
      <h1
        className="text-2xl sm:text-2xl md:text-4xl 
        font-bold md:font-extrabold text-gray-900 uppercase text-center"
      >
        Celebrate like royal!
      </h1>

      {/* Full width Description */}
      <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 w-full">
        Looking for the perfect place to host your next celebration or event?
        Kingpin has you covered! From birthdays and parties to corporate events
        and team-building, we offer custom packages, great food, and
        state-of-the-art entertainment. Let us handle the details so you can
        focus on the fun.
      </p>

      {/* Clickable Full width & fully visible image */}
      <div
        onClick={handleClick}
        className="w-full cursor-pointer overflow-hidden  "
      >
        <img
          src="/home/gc-desktop.gif" // এখানে আপনার ছবি URL দিন
          alt="Description Image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
