"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";
import Link from "next/link";

export default function ReserveLane() {
  const [activeTab, setActiveTab] = useState("lane"); // "lane" or "event"
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(4);
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const dateInputRef = useRef(null);

  const tabs = [
    { id: "lane", label: "Reserve a Lane" },
    { id: "event", label: "Book an Event" }
  ];

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="maaleen-container">
        {/* Tabs */}
        <div className="flex justify-center mb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 md:px-12 py-4 md:py-6 text-xs md:text-sm font-black uppercase tracking-widest transition-all border-b-4 ${
                activeTab === tab.id 
                ? "border-[#C27D2A] text-[#1a1a1a] bg-gray-50" 
                : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-none p-6 md:p-10 border border-gray-200">
          {activeTab === "lane" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
              {/* Location Input */}
              <div className="flex flex-col space-y-4 lg:col-span-5">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiSearch size={14} className="text-[#C27D2A]" />
                  Where do you want to bowl?
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6">
                    <input
                      type="text"
                      placeholder="Search for a City, State or Zip"
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none placeholder:text-gray-300"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                    City, State or Zip
                  </div>
                </div>
              </div>

              {/* Guests Input - Wider */}
              <div className="flex flex-col space-y-4 lg:col-span-3">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiUsers size={14} className="text-[#C27D2A]" />
                  How many guests?
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6">
                    <input
                      type="number"
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2">
                    6 Per Lane
                  </div>
                </div>
              </div>

              {/* Date Input */}
              <div className="flex flex-col space-y-4 lg:col-span-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  What day?
                </label>
                <div className="relative group">
                  <div 
                    className="h-[50px] md:h-[60px] flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 cursor-pointer"
                    onClick={() => dateInputRef.current?.showPicker()}
                  >
                    <input
                      type="date"
                      ref={dateInputRef}
                      className="w-full text-xs md:text-sm font-bold text-[#1a1a1a] outline-none bg-transparent appearance-none cursor-pointer"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <FiCalendar size={16} className="text-[#C27D2A] ml-2" />
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2">
                    Reserve up to 8 days in advance
                  </div>
                </div>
              </div>

              {/* Submit Button - Relatively smaller */}
              <div className="flex flex-col pt-8 lg:col-span-2">
                <AnimatedButton className="!h-[52px] md:!h-[58px] !rounded-none !w-full !px-3 md:!px-4">
                    <div className="flex items-center justify-between w-full text-[10px] md:text-[11px] tracking-widest font-black uppercase">
                      <span className="whitespace-nowrap">Reserve a Lane</span>
                      <FiArrowRight size={18} />
                    </div>
                </AnimatedButton>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
              {/* Location Input */}
              <div className="flex flex-col space-y-4 lg:col-span-5">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiSearch size={14} className="text-[#C27D2A]" />
                  Where do you want to book an event?
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6">
                    <input
                      type="text"
                      placeholder="Search for a City, State or Zip"
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none placeholder:text-gray-300"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                    City, State or Zip
                  </div>
                </div>
              </div>

              {/* Event Type Input - Wider */}
              <div className="flex flex-col space-y-4 lg:col-span-3">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  What type of an event is this?
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6">
                    <select 
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none bg-transparent appearance-none cursor-pointer"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate</option>
                      <option value="social">Social</option>
                    </select>
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2">
                    How do you want to celebrate?
                  </div>
                </div>
              </div>

              {/* Date Input */}
              <div className="flex flex-col space-y-4 lg:col-span-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  What day?
                </label>
                <div className="relative group">
                  <div 
                    className="h-[50px] md:h-[60px] flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 cursor-pointer"
                    onClick={() => dateInputRef.current?.showPicker()}
                  >
                    <input
                      type="date"
                      ref={dateInputRef}
                      className="w-full text-xs md:text-sm font-bold text-[#1a1a1a] outline-none bg-transparent appearance-none cursor-pointer"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <FiCalendar size={16} className="text-[#C27D2A] ml-2" />
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2">
                    Book up to 6 months in advance
                  </div>
                </div>
              </div>

              {/* Submit Button - Relatively smaller */}
              <div className="flex flex-col pt-8 lg:col-span-2">
                <AnimatedButton className="!h-[52px] md:!h-[58px] !rounded-none !w-full !px-3 md:!px-4">
                    <div className="flex items-center justify-between w-full text-[10px] md:text-[11px] tracking-widest font-black uppercase">
                      <span className="whitespace-nowrap">Book an Event</span>
                      <FiArrowRight size={18} />
                    </div>
                </AnimatedButton>
              </div>
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <p className="text-[#1a1a1a] font-bold uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-4">
            Need help planning an event?
            <Link 
              href="#" 
              className="text-[#C27D2A] border-b-2 border-[#C27D2A] pb-1 hover:text-[#ac640d] hover:border-[#ac640d] transition-colors"
            >
              Contact an Event Planner
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
