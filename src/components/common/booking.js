"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import AnnimatedButton from "@/components/ui/annimation_button";
import LocationInput from "./location/location";

// Reusable Location Input component import


const BookNowSection = ({ title = "Book Now!" }) => {
  const [selectedLocation, setSelectedLocation] = useState(""); // Location value
  const dateInputRef = useRef(null);

  return (
    <div className=" pt-6 md:pt-12 grid grid-cols-1 gap-5 sm:gap-8">
      <div className="bg-white p-0">
        <div className="bg-[#C27D2A] w-full py-2 text-center font-bold">
          <h1 className="text-2xl sm:text-4xl  text-white uppercase">
            {title}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap bg-black items-center justify-center gap-3 sm:gap-4 p-4 sm:p-4">
          {/* Location Input */}
          <LocationInput
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />

          {/* Date Input */}
          <div className="relative gap-2 flex flex-col w-full sm:w-[300px] mb-2 sm:mb-0">
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
              <FaCalendarAlt className="absolute text-[#C27D2A] right-2 sm:right-3" />
            </div>
          </div>

          <AnnimatedButton className="mt-3 md:mt-8 sm:mt-0 px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base">
            Book Now
          </AnnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default BookNowSection;
