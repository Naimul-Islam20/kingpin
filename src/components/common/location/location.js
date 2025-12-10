"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

export const defaultLocations = [
  { name: "Kingoin Canverra", letter: "NZ" },
  { name: "Bogra", letter: "NZ" },
  { name: "Barishal", letter: "NZ" },
  { name: "Kingoin Canverra", letter: "AZ" },
  { name: "Chittagong", letter: "CY" },
  { name: "Cox's Bazar", letter: "CY" },
  { name: "Feni", letter: "CY" },
  { name: "Dhaka", letter: "DT" },
  { name: "Gazipur", letter: "DT" },
  { name: "Narsingdi", letter: "DT" },
  { name: "Khulna", letter: "KLL" },
  { name: "Jessore", letter: "KLL" },
  { name: "Satkhira", letter: "KLL" },
];

const LocationInput = ({
  selectedLocation,
  setSelectedLocation,
  label = "Location",
  locations = defaultLocations,
}) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const locationRef = useRef(null);

  // Generate letters dynamically
  const letters = Array.from(new Set(locations.map((loc) => loc.letter)));
  const [activeLetter, setActiveLetter] = useState(letters[0]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered locations based on activeLetter
  const filteredLocations = locations.filter(
    (loc) => loc.letter === activeLetter
  );

  return (
    <div
      className="relative flex flex-col w-full sm:w-[300px] gap-2 mb-2 sm:mb-0"
      ref={locationRef}
    >
      <label className="mb-1 text-white uppercase font-semibold text-xs sm:text-sm">
        {label}
      </label>

      <div className="relative w-full flex items-center">
        <input
          type="text"
          className="w-full text-black px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 bg-white text-sm cursor-pointer focus:outline-none"
          placeholder="Please select"
          value={selectedLocation}
          readOnly
          onClick={() => setLocationOpen((prev) => !prev)}
        />
        <FaCaretDown
          className={`absolute right-2 sm:right-3 text-[#C27D2A] transition-transform duration-300 ${
            locationOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setLocationOpen((prev) => !prev)}
        />
      </div>

      {locationOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 shadow-lg z-50 text-sm">
          {/* Letters navbar */}
          <div className="flex justify-start gap-2 px-2 py-3 border-b border-gray-400">
            {letters.map((letter) => (
              <button
                key={letter}
                className={`px-2 py-0.5 rounded text-gray-400 ${
                  activeLetter === letter ? "text-gray-900 bg-amber-300" : ""
                }`}
                onClick={() => {
                  setActiveLetter(letter);
                  setSelectedLocation(""); // clear previous selection
                }}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Locations list */}
          <div className="max-h-80 overflow-y-auto">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc) => (
                <div
                  key={loc.name + loc.letter} // unique key
                  className="px-2 sm:px-3 py-2 hover:text-yellow-600 text-black font-bold cursor-pointer text-medium"
                  onClick={() => {
                    setSelectedLocation(loc.name);
                    setLocationOpen(false);
                  }}
                >
                  {loc.name}
                </div>
              ))
            ) : (
              <div className="px-2 py-2 text-gray-500">No locations</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
