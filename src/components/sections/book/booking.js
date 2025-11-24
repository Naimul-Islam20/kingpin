"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaCalendarAlt, FaBuffer } from "react-icons/fa";
import AnnimatedButton from "@/components/ui/annimation_button";

const locations = [
  { name: "Kingoin Canverra", letter: "K" },
  { name: "Bogra", letter: "B" },
  { name: "Kingoin Canverra", letter: "A" },
  { name: "Kingoin Canverra", letter: "A" },
  { name: "Kingoin Canverra", letter: "A" },
  { name: "Barishal", letter: "B" },
  { name: "Bhola", letter: "B" },
  { name: "Patuakhali", letter: "B" },
  { name: "Chittagong", letter: "C" },
  { name: "Cox's Bazar", letter: "C" },
  { name: "Feni", letter: "C" },
  { name: "Dhaka", letter: "D" },
  { name: "Gazipur", letter: "D" },
  { name: "Narsingdi", letter: "D" },
  { name: "Khulna", letter: "K" },
  { name: "Jessore", letter: "K" },
  { name: "Satkhira", letter: "K" },
];

const BookPage = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeLetter, setActiveLetter] = useState("A");
  const dateInputRef = useRef(null);
  const locationRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-5 md:pt-6 grid grid-cols-1 gap-5 sm:gap-8">
      {/* Upper Section */}
      <div className="bg-white p-0">
        <div className="bg-[#C27D2A] w-full py-2 text-center font-bold">
          <h1 className="text-2xl sm:text-4xl text-white uppercase">
            Book Now!
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap bg-[#272727] items-center justify-center gap-1 sm:gap-4 p-3 sm:p-4">
          {/* Location Input */}
          <div
            className="relative flex flex-col w-full sm:w-[300px] mb-2 sm:mb-0"
            ref={locationRef}
          >
            <label className="mb-1 text-white uppercase font-semibold text-xs sm:text-sm">
              Location
            </label>
            <div className="relative w-full flex items-center">
              <input
                type="text"
                ref={inputRef}
                className="w-full text-black px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 bg-white text-sm cursor-pointer focus:outline-none"
                placeholder="Please select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                onClick={() => setLocationOpen(true)}
              />
              <FaCaretDown
                className={`absolute right-2 sm:right-3 text-[#C27D2A] transition-transform duration-300 ${
                  locationOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setLocationOpen(!locationOpen)}
              />
            </div>

            {locationOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 shadow-lg z-50 text-sm">
                {/* Alphabet Navbar */}
                <div className="flex justify-start gap-2 px-2 py-3 border-b border-gray-400">
                  {["A", "B", "C", "D", "K"].map((letter) => (
                    <button
                      key={letter}
                      className={`px-2 py-0.5 rounded hover:bg-yellow-100 ${
                        activeLetter === letter ? "bg-yellow-200" : ""
                      }`}
                      onClick={() => setActiveLetter(letter)}
                    >
                      {letter}
                    </button>
                  ))}
                </div>

                {/* Locations Filtered by Letter */}
                <div className="max-h-80 overflow-y-auto">
                  {locations
                    .filter((loc) => loc.letter === activeLetter)
                    .map((loc) => (
                      <div
                        key={loc.name}
                        className="px-2 sm:px-3 py-2 hover:bg-yellow-100 text-black font-bold cursor-pointer text-medium"
                        onClick={() => {
                          setSelectedLocation(loc.name);
                          setLocationOpen(false);
                        }}
                      >
                        {loc.name}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          {/* Date Input */}
          <div className="relative flex flex-col w-full sm:w-[300px] mb-2 sm:mb-0">
            <label className="mb-1 text-white font-semibold uppercase text-xs sm:text-sm">
              Date
            </label>
            <div
              className="relative w-full flex items-center cursor-pointer"
              onClick={() => dateInputRef.current?.showPicker()}
            >
              <input
                type="date"
                ref={dateInputRef}
                className="w-full text-black bg-white px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 text-sm cursor-pointer focus:outline-none appearance-none"
                onClick={() => dateInputRef.current?.showPicker()}
                onChange={() => dateInputRef.current?.blur()}
              />
              <FaCalendarAlt className="absolute text-[#C27D2A] right-2 sm:right-3 " />
            </div>
          </div>

          {/* Book Now Button */}
          <AnnimatedButton className="mt-3 md:mt-6 sm:mt-0 px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base">
            Book Now
          </AnnimatedButton>
        </div>
      </div>

      {/* Lower Section (unchanged) */}
      <div className="bg-[#E4937F] flex flex-col items-center gap-6 relative">
        <div className="flex  justify-center items-center mt-3 uppercase pb-0 md-pb-3 gap-2 sm:gap-4 md:gap-10 lg:gap-12 relative w-full">
          <FaBuffer className="text-white  text-[75px] md:text-[50px]" />

          <div className="flex flex-col items-center -space-y-1">
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Free
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Monthly
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Voucher
            </span>
          </div>

          <div className="flex flex-col items-center -space-y-1">
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Free
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Monthly
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Voucher
            </span>
          </div>

          <div className="flex flex-col items-center -space-y-1">
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Free
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Monthly
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Voucher
            </span>
          </div>

          <div className="flex flex-col items-center -space-y-1">
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Free
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Monthly
            </span>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Voucher
            </span>
          </div>

          <div className="flex flex-col items-center -space-y-1">
            <h2 className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Free
            </h2>
            <p className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Monthly
            </p>
            <span className="text-white text-[10px] sm:text-[11px] md:text-xl font-extrabold">
              Voucher
            </span>
          </div>

          <FaBuffer className="text-white text-[75px]  md:text-[50px]" />

          {/* Sign Up button untouched */}
          <button className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#302f2f] hover:bg-[#181818] text-white font-semibold px-6 py-1 uppercase rounded-full transition">
            freeSign Up
          </button>
        </div>

        {/* Lower div */}
        <div className="text-center w-full bg-[#FFD9CC] h-10"></div>
      </div>
    </div>
  );
};

export default BookPage;
