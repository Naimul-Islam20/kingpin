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
    <section className="relative w-full h-[30vh] sm:h-[70vh] md:h-[90vh]">
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

      {/* Optional Overlay or Content */}
      {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
          Welcome to Our Website
        </h1>
      </div> */}
    </section>
  );
};

export default HeroSection;
