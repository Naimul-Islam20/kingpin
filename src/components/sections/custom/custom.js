"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CustomPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/target-page"); // এখানে যেই পেজে নিয়ে যেতে চাও সেই path
  };

  return (
    <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-1 sm:pb-4 md:pb-5 pt-4 sm:pt-7 md:pt-9  grid grid-cols-1 gap-2 sm:gap-6">
      {/* Title */}
      <h1
        className="text-2xl sm:text-2xl md:text-4xl 
        font-bold md:font-extrabold text-gray-900 uppercase text-center"
      >
        EAT LIKE A KING!
      </h1>

      {/* Full width Description */}
      <p className="text-sm sm:text-base md:text-lg md:text-center text-justify text-gray-700 w-full">
        At Kingpin, great food and drinks are just as important as the fun. Our
        menu is packed with delicious options that’ll fuel you up after an
        intense game or keep the party going. From chef-crafted dishes to
        signature cocktails, we've got something for everyone. So sit back, grab
        a drink, and enjoy – because great times are always better with great
        food.
      </p>

      {/* Clickable Image */}
      <div
        onClick={handleClick}
        className="w-full cursor-pointer overflow-hidden"
      >
        <img
          src="/home/kp-cocktail-menu-promotional-assets-website-image-block-01.jpg"
          
          alt="Description Image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}



