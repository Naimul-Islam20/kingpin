"use client";

import LocationInput from "@/components/common/location/location";
import AnimatedButton from "@/components/ui/annimation_button";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

const karaokeData = {
  leftList: [
    "Queue songs on the touch pad along the wall, make sure someone knows the song well.",
    "Own the mic. Confidence is key — sing loud and proud.",
    "Bring the energy. Dance, move, and make it a performance.",
    "Cheer each other on for maximum fun.",
  ],
  detailsList: [
    "Recommended age: 7+",
    "Session time: 50 mins singing time",
    "Group size: Rooms differ by venue — check max numbers",
    "Songs: 1000+ songs across every genre",
  ],
};

export default function KaraokeSection() {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <section className="w-full bg-white py-6 md:py-16">
      <div className="max-w-[1330px] mx-auto px-4 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-8 space-y-5 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Karaoke at Kingpin Play
          </h2>

          <p className="text-lg font-medium text-black leading-relaxed">
            Take the stage and unleash your inner superstar! Kingpin’s private
            karaoke rooms are the ultimate spot to belt out your favorite hits
            with friends. Perfect for parties, celebrations, and unforgettable
            nights out.
          </p>

          <h3 className="text-2xl font-bold text-black">
            How to Sing Like a Pro:
          </h3>

          <ul className="flex flex-col gap-2 font-medium text-black text-lg">
            {karaokeData.leftList.map((item, index) => (
              <li key={index} className="flex items-start pl-4 gap-2">
                <FaCircle className="mt-2 text-black w-[6px] h-[6px] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-black">Karaoke Details:</h3>

          <ul className="flex flex-col gap-2 font-medium text-black text-lg">
            {karaokeData.detailsList.map((item, index) => (
              <li key={index} className="flex items-start pl-4 gap-2">
                <FaCircle className="mt-2 text-black w-[6px] h-[6px] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-4 bg-white border border-gray-200 flex flex-col">
          {/* HEADER & LOCATION */}
          <div>
            <div className="bg-[#C27D2A]">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Find Your Karaoke Spot
                </h3>
                <p className="text-base text-white mb-2">
                  Select your nearest venue to view available rooms and session
                  details.
                </p>
              </div>
            </div>
            <div className="bg-black py-1">
              <div className="mb-6 pl-4 pr-4">
                <LocationInput
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                />
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className=" flex-1 mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white text-black">
                  <th className="px-4 py-2 text-sm">Package</th>
                  <th className="px-4 py-2 text-sm">Mon–Fri Before 4pm</th>
                  <th className="px-4 py-2 text-sm">
                    Sat–Sun & Weekdays After 4pm
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-yellow-50">
                  <td className="px-4 py-2 font-bold">GOLD</td>
                  <td className="px-4 py-2 font-bold">$45</td>
                  <td className="px-4 py-2 font-bold">$56</td>
                </tr>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-4 py-2" colSpan={3}>
                    2 Activities + $20 Games Credit
                  </td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="px-4 py-2 font-bold">SILVER</td>
                  <td className="px-4 py-2 font-bold">$31</td>
                  <td className="px-4 py-2 font-bold">$40</td>
                </tr>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-4 py-2" colSpan={3}>
                    2 Activities
                  </td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="px-4 py-2 font-bold">BRONZE</td>
                  <td className="px-4 py-2 font-bold">$19</td>
                  <td className="px-4 py-2 font-bold">$23</td>
                </tr>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-4 py-2" colSpan={3}>
                    1 Activity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BUTTON */}
          <div className="p-4 mt-auto flex justify-center">
            <AnimatedButton path="#">BOOK NOW</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
