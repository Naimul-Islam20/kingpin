"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";
import Link from "next/link";

export default function ReserveLane() {
  const [activeTab, setActiveTab] = useState("lane"); // "lane" or "event"
  const [location, setLocation] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [guests, setGuests] = useState(4);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const locationRef = useRef(null);
  const guestDropdownRef = useRef(null);
  const dateInputRef = useRef(null);

  const locations = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
  ];

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    { id: "lane", label: "Reserve a Lane" },
    { id: "event", label: "Book an Event" }
  ];

  return (
    <section className="py-6 md:py-16 bg-white border-t border-gray-100">
      <div className="maaleen-container">
        {/* Tabs */}
        <div className="flex flex-row justify-center relative z-10 -mb-[1px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-1/2 sm:w-[280px] py-4 sm:py-6 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all border-b-2 border-x border-t border-gray-100 ${
                activeTab === tab.id 
                ? "border-b-primary text-black bg-gray-50 border-x-gray-200 border-t-gray-200" 
                : "border-b-gray-200 text-gray-400 hover:text-gray-600 bg-white border-x-transparent border-t-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-none p-4 md:p-10 border border-gray-200 border-t-0">
          {activeTab === "lane" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
              {/* Location Input - Custom Dropdown */}
              <div className="flex flex-col space-y-4 lg:col-span-5" ref={locationRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiSearch size={14} className="text-primary" />
                  Where do you want to bowl?
                </label>
                <div className="relative">
                  <div className="relative group">
                    <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 relative">
                      <input
                        type="text"
                        placeholder="Search for a City, State or Zip"
                        className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none placeholder:text-gray-300 bg-transparent"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          setIsLocationOpen(true);
                        }}
                        onFocus={() => setIsLocationOpen(true)}
                      />
                      <svg
                        className={`w-4 h-4 text-primary transition-transform duration-300 ml-2 cursor-pointer ${isLocationOpen ? 'rotate-180' : ''}`}
                        onClick={() => setIsLocationOpen(!isLocationOpen)}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Custom Location List */}
                    {isLocationOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-[50px] md:top-[60px] left-0 right-0 bg-white border-2 border-gray-200 border-t-0 shadow-2xl z-50 overflow-hidden"
                      >
                        <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                          {locations
                            .filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
                            .map((loc, i) => (
                              <button
                                key={i}
                                onClick={() => {
                                  setLocation(loc);
                                  setIsLocationOpen(false);
                                }}
                                className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-gray-50 flex items-center justify-between ${location === loc ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                              >
                                {loc}
                              </button>
                            ))}
                          {locations.filter(loc => loc.toLowerCase().includes(location.toLowerCase())).length === 0 && (
                            <div className="px-6 py-3 text-sm text-gray-400 font-bold uppercase tracking-widest italic">
                              No locations found
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 pl-2">
                    City, State or Zip
                  </div>
                </div>
              </div>

              {/* Guests Input - Custom Dropdown */}
              <div className="flex flex-col space-y-4 lg:col-span-3" ref={guestDropdownRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiUsers size={14} className="text-primary" />
                  How many guests?
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                    className="h-[50px] md:h-[60px] w-full flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 text-sm md:text-base font-bold text-[#1a1a1a] focus:border-primary transition-colors"
                  >
                    <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                    <svg
                      className={`w-4 h-4 text-primary transition-transform duration-300 ${isGuestDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Custom Dropdown List */}
                  {isGuestDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-[50px] md:top-[60px] left-0 right-0 bg-white border-2 border-gray-200 border-t-0 shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                        {[...Array(10)].map((_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => {
                              setGuests(i + 1);
                              setIsGuestDropdownOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-gray-50 flex items-center justify-between ${guests === i + 1 ? 'text-primary bg-primary/5' : 'text-gray-700'}`}
                          >
                            <span>{i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

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
                    <FiCalendar size={16} className="text-primary ml-2" />
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
                  <FiSearch size={14} className="text-primary" />
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
                    <FiCalendar size={16} className="text-primary ml-2" />
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
          {/* Footer Link relocated inside */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-2">
              Need help planning an event?
              <Link 
                href="#" 
                className="text-primary border-b border-primary pb-0.5 hover:text-primary-hover hover:border-primary-hover transition-colors"
              >
                Contact an Event Planner
              </Link>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
