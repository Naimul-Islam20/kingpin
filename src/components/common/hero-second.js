"use client";
import React from "react";

const HeroSection = ({ title = "Page Name", imageUrl }) => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div
        className={`w-full h-[25vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] sm:h-[30vh] xs:h-[30vh]`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Page Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl uppercase font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
