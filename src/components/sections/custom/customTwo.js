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
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase text-center">
        EAT LIKE A KING!
      </h1>

      {/* Full width Description */}
      <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 w-full">
        At Kingpin, great food and drinks are just as important as the fun. Our
        menu is packed with delicious options that’ll fuel you up after an
        intense game or keep the party going. From chef-crafted dishes to
        signature cocktails, we've got something for everyone. So sit back, grab
        a drink, and enjoy – because great times are always better with great
        food.
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
