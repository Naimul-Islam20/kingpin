"use client";
import { useState } from "react";
import Link from "next/link";
import DynamicTitle from "../ui/TitleText";
import AnimatedButton from "../ui/annimation_button";

export default function ThreeButtonsTabs() {
  const [activeTab, setActiveTab] = useState("nsw");

  const tabs = [
    { id: "nsw", label: "NSW" },
    { id: "vic", label: "VIC" },
    { id: "act", label: "ACT" },
    { id: "qld", label: "QLD" },
    { id: "nt", label: "NT" },
    { id: "nz", label: "NZ" },
  ];

  const dataMap = {
    nsw: [
      {
        title: "NSW LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/nsw-left",
        buttonLink: "/nsw-left",
      },
      {
        title: "NSW RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/nsw-right",
        buttonLink: "/nsw-right",
      },
    ],
    vic: [
      {
        title: "VIC LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/vic-left",
        buttonLink: "/vic-left",
      },
      {
        title: "VIC RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/vic-right",
        buttonLink: "/vic-right",
      },
    ],
    act: [
      {
        title: "ACT LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/act-left",
        buttonLink: "/act-left",
      },
      {
        title: "ACT RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/act-right",
        buttonLink: "/act-right",
      },
    ],
    qld: [
      {
        title: "QLD LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/qld-left",
        buttonLink: "/qld-left",
      },
      {
        title: "QLD RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/qld-right",
        buttonLink: "/qld-right",
      },
    ],
    nt: [
      {
        title: "NT LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/nt-left",
        buttonLink: "/nt-left",
      },
      {
        title: "NT RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/nt-right",
        buttonLink: "/nt-right",
      },
    ],
    nz: [
      {
        title: "NZ LEFT TITLE",
        button: "BOOK NOW",
        titleLink: "/nz-left",
        buttonLink: "/nz-left",
      },
      {
        title: "NZ RIGHT TITLE",
        button: "BOOK NOW",
        titleLink: "/nz-right",
        buttonLink: "/nz-right",
      },
    ],
  };

  const sectionData = dataMap[activeTab];

  return (
    <div className="max-w-[1330px] mx-auto px-4 md:px-0 lg:px-0">
      {/* PAGE TITLE */}
      <div className="pb-3 md:pb-3 pt-3 md:pt-7">
        <DynamicTitle blackText={"DEALS AND SPECIALS"} />
      </div>

      {/* TAB BUTTONS */}
      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`
              text-2xl sm:text-3xl md:text-4xl 
              font-bold 
              py-1 sm:py-2 px-3 sm:px-4
              transition
              ${
                activeTab === t.id
                  ? "text-black border-b-4 border-yellow-600"
                  : "text-gray-500 border-b-4 border-transparent"
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="columns-1 sm:columns-2 gap-4 sm:gap-6">
        {sectionData.map((item, index) => (
          <div key={index} className="break-inside-avoid border-y border-black">
            <div className="bg-white py-4 sm:py-6 px-4 sm:px-10">
              <div className="flex justify-between items-center gap-4">
                {/* LEFT TITLES (as link) */}
                <Link href={item.titleLink}>
                  <h1
                    className=" text-[#C27D2A]
                      text-lg md:text-lg lg:text-2xl 
                      underline 
                      
                      uppercase 
                      font-bold 
                      cursor-pointer
                      leading-snug
                    "
                  >
                    {item.title}
                  </h1>
                </Link>

                {/* RIGHT BUTTON (as link) */}
                <Link href={item.buttonLink}>
                  <div className="">
                    <AnimatedButton className="text-sm md:text-lg" path="#">{item.button}</AnimatedButton>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
