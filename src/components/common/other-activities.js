"use client";
import React from "react";

const ThreeColumnSection = ({ title, items }) => {
  return (
    <div className="pt-5 md:pt-6 px-4 md:px-0 lg:px-0 max-w-[1330px] mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl uppercase md:py-3 font-bold mb-6 text-center">
        {title}
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {items.map((item, index) => (
          <div key={index} className="relative overflow-hidden group w-full">
            {/* Image */}
            <img
              src={item.imgUrl}
              alt={item.overlayText}
              className="w-full h-[12vh] sm:h-[15vh] md:h-[20vh] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-125 "
            />

            {/* Black overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 transition-opacity duration-300 group-hover:opacity-50"></div>

            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-medium uppercase">
                {item.overlayText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeColumnSection;
