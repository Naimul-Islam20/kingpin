"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi";
import AnimatedButton from "@/components/ui/annimation_button";
import Link from "next/link";

export default function ReserveLane() {
  const [activeTab, setActiveTab] = useState("lane"); // "lane" or "event"
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(4);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isEventTypeOpen, setIsEventTypeOpen] = useState(false);
  const [isResTypeOpen, setIsResTypeOpen] = useState(false);
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [resType, setResType] = useState("Private Dining Suite");
  const guestDropdownRef = useRef(null);
  const eventTypeRef = useRef(null);
  const resTypeRef = useRef(null);
  const dateInputRef = useRef(null);

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
      if (eventTypeRef.current && !eventTypeRef.current.contains(event.target)) {
        setIsEventTypeOpen(false);
      }
      if (resTypeRef.current && !resTypeRef.current.contains(event.target)) {
        setIsResTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    { id: "lane", label: "Private Dining & Lounge" },
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
              {/* Phone Input */}
              <div className="flex flex-col space-y-4 lg:col-span-3">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiPhone size={14} className="text-primary" />
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 relative">
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none placeholder:text-gray-300 bg-transparent"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Reservation Type Dropdown */}
              <div className="flex flex-col space-y-4 lg:col-span-3" ref={resTypeRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  Reservation Type
                </label>
                <div className="relative group">
                  <button
                    onClick={() => setIsResTypeOpen(!isResTypeOpen)}
                    className="h-[50px] md:h-[60px] w-full flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 text-sm md:text-base font-bold text-[#1a1a1a] focus:border-primary transition-colors"
                  >
                    <span className="truncate">{resType}</span>
                    <svg
                      className={`w-4 h-4 text-primary transition-transform duration-300 ${isResTypeOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isResTypeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[50px] md:top-[60px] left-0 right-0 bg-white border-2 border-gray-200 border-t-0 shadow-2xl z-50 overflow-hidden"
                      >
                        {[
                          "Private Dining Suite",
                          "Private Family Dining",
                          "VIP Lounge Reservation"
                        ].map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setResType(type);
                              setIsResTypeOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:bg-gray-50 flex items-center justify-between border-l-4 ${resType === type ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-700 hover:border-gray-300'}`}
                          >
                            <span>{type}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Guests Input - Custom Dropdown */}
              <div className="flex flex-col space-y-4 lg:col-span-2" ref={guestDropdownRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiUsers size={14} className="text-primary" />
                  Guests
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
                  <AnimatePresence>
                    {isGuestDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
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
                              className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:bg-gray-50 flex items-center justify-between border-l-4 ${guests === i + 1 ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-700 hover:border-gray-300'}`}
                            >
                              <span>{i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Date Input */}
              <div className="flex flex-col space-y-4 lg:col-span-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2 text-center justify-center">
                  When?
                </label>
                <div className="relative group">
                  <div 
                    className="h-[50px] md:h-[60px] flex items-center justify-center bg-white border-2 border-gray-200 rounded-none px-4 cursor-pointer"
                    onClick={() => dateInputRef.current?.showPicker()}
                  >
                    <input
                      type="date"
                      ref={dateInputRef}
                      className="w-full text-xs font-bold text-[#1a1a1a] outline-none bg-transparent appearance-none cursor-pointer hidden"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <FiCalendar size={20} className="text-primary" />
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
              {/* Phone Number Input */}
              <div className="flex flex-col space-y-4 lg:col-span-4">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiPhone size={14} className="text-primary" />
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="h-[50px] md:h-[60px] flex items-center bg-white border-2 border-gray-200 rounded-none px-5 md:px-6">
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="w-full text-sm md:text-base font-bold text-[#1a1a1a] outline-none placeholder:text-gray-300"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Event Type Input */}
              <div className="flex flex-col space-y-4 lg:col-span-3" ref={eventTypeRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  Event Type
                </label>
                <div className="relative group">
                  <div 
                    onClick={() => setIsEventTypeOpen(!isEventTypeOpen)}
                    className="h-[50px] md:h-[60px] flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <span className="text-sm md:text-base font-bold text-[#1a1a1a] uppercase tracking-widest">
                      {eventType || "Select"}
                    </span>
                    <svg className={`w-4 h-4 text-primary transition-transform duration-300 ${isEventTypeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <AnimatePresence>
                    {isEventTypeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[50px] md:top-[60px] left-0 right-0 bg-white border-2 border-gray-200 border-t-0 shadow-2xl z-50 overflow-hidden"
                      >
                        {[
                          { val: "birthday", label: "Birthday Parties" },
                          { val: "class-party", label: "Class Party" },
                          { val: "work-gathering", label: "Work Gatherings" },
                          { val: "meetings", label: "Meetings" }
                        ].map((opt) => (
                          <button
                            key={opt.val}
                            onClick={() => {
                              setEventType(opt.label);
                              setIsEventTypeOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:bg-gray-50 border-l-4 ${eventType === opt.label ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-700 hover:border-gray-300'}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Guests Input */}
              <div className="flex flex-col space-y-4 lg:col-span-2" ref={guestDropdownRef}>
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <FiUsers size={14} className="text-primary" />
                  Guests
                </label>
                <div className="relative group">
                  <div 
                    onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                    className="h-[50px] md:h-[60px] flex items-center justify-between bg-white border-2 border-gray-200 rounded-none px-5 md:px-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <span className="text-sm md:text-base font-bold text-[#1a1a1a]">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <svg className={`w-4 h-4 text-primary transition-transform duration-300 ${isGuestDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <AnimatePresence>
                    {isGuestDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[50px] md:top-[60px] left-0 right-0 bg-white border-2 border-gray-200 border-t-0 shadow-2xl z-50 overflow-hidden"
                      >
                        <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                          {[...Array(20)].map((_, i) => (
                            <button
                              key={i + 1}
                              onClick={() => {
                                setGuests(i + 1);
                                setIsGuestDropdownOpen(false);
                              }}
                              className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:bg-gray-50 border-l-4 ${guests === i + 1 ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-700 hover:border-gray-300'}`}
                            >
                              <span>{i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Date Input */}
              <div className="flex flex-col space-y-4 lg:col-span-1">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2 text-center justify-center">
                  When?
                </label>
                <div className="relative group">
                  <div 
                    className="h-[50px] md:h-[60px] flex items-center justify-center bg-white border-2 border-gray-200 rounded-none px-4 cursor-pointer"
                    onClick={() => dateInputRef.current?.showPicker()}
                  >
                    <input
                      type="date"
                      ref={dateInputRef}
                      className="w-full text-xs font-bold text-[#1a1a1a] outline-none bg-transparent appearance-none cursor-pointer hidden"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <FiCalendar size={20} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col pt-8 lg:col-span-2">
                <AnimatedButton className="!h-[52px] md:!h-[58px] !rounded-none !w-full !px-3 md:!px-4">
                    <div className="flex items-center justify-center w-full text-[10px] md:text-[11px] tracking-widest font-black uppercase">
                      <span className="whitespace-nowrap">Plan Event</span>
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
