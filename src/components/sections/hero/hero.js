"use client";
import React, { useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  const dateInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenDate = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <section className="relative w-full -mt-22 h-[90vh]">
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

      {/* Floating Bottom Card */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[90%] md:w-[450px] bg-white/40 backdrop-blur-md flex items-center justify-center gap-5 px-4 py-4 rounded-t-md">
        {/* Input with label and icon */}
        <div
          className="flex flex-col w-[130px] cursor-pointer select-none"
          onClick={handleOpenDate}
        >
          {/* Label */}
          <label className="text-white text-xs mb-1">When</label>

          {/* Input wrapper */}
          <div className="relative w-full">
            {/* Overlay text */}
            <span className="absolute  top-1/2 -translate-y-1/2 text-white text-sm pointer-events-none">
              {selectedDate || "Select In Date"}
            </span>

            <input
              ref={dateInputRef}
              type="date"
              onChange={handleDateChange}
              className="w-full bg-white/10 text-white text-sm rounded-md px-3 py-2  cursor-pointer opacity-0"
            />

            <FaCalendarAlt className="absolute right-5 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-12 w-[1px] bg-gray-300"></div>

        {/* Book Button */}
        <button className="flex items-center gap-2 px-8 py-2 mt-3 ms-4 cursor-pointer bg-white text-red-500 font-semibold rounded-lg hover:bg-red-100 transition text-sm">
          Book Now
          <FaCalendarAlt className="w-4 h-4" /> {/* Icon added */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
