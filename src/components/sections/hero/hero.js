"use client";
import React, { useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  const dateInputRef = useRef(null);

  const handleOpenDate = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <section className="relative w-full -mt-20 h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video_online.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Experience the best online services with us.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Floating Bottom Card */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[90%] md:w-[500px] bg-white/40 backdrop-blur-md flex items-center justify-center gap-4 px-8 py-8 ">
        {/* Left: Input */}
        <div
          className="flex flex-col max-w-[180px] relative cursor-pointer select-none"
          onClick={handleOpenDate}
        >
          <label
            htmlFor="checkin"
            className="block text-sm font-medium text-white  mb-1"
          >
            Select In Date
          </label>
          <input
            ref={dateInputRef}
            type="date"
            id="checkin"
            className="w-full bg-transparent border-none outline-none  text-white px-3 py-2 pr-8 cursor-pointer
                       [&::-webkit-calendar-picker-indicator]:opacity-0
                       [&::-webkit-calendar-picker-indicator]:absolute
                       [&::-webkit-calendar-picker-indicator]:right-0
                       [&::-webkit-calendar-picker-indicator]:w-full
                       [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
         
        </div>

        {/* Divider */}
        <div className="h-10 w-[1px] bg-gray-300"></div>

        {/* Right: Button */}
        <button className="px-7 py-3 cursor-pointer bg-white text-red-500 font-semibold rounded-lg hover:bg-red-00 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
