"use client";
import DynamicButton from "@/components/ui/dynamic_button_2";
import DynamicTitle from "@/components/ui/TitleText";
import React from "react";

export default function RoyalS() {
  const images = [
    {
      id: 1,
      src: "/home/royal1.jpg",
      title: "$29 parties",
      subtitle: "Kids Bronze Parties",
      desc: "Enjoy the best kids bronze parties with fun and games!Have a delicious meal and enjoy our fun activities!Enjoy the best kids bronze parties with fun and games!",
      buttonText: "Learn More",
      buttonLink: "/kids-bronze-parties",
    },
    {
      id: 2,
      src: "/home/royal2.jpg",
      title: "Eat and Play",
      subtitle: "Spend $65 and Get 20",
      desc: "Have a delicious meal and enjoy our fun activities!Have a delicious meal and enjoy our fun activities!",
      buttonText: "Order Now",
      buttonLink: "/eat-and-play",
    },
    {
      id: 3,
      src: "/home/royal3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
      buttonText: "View Menu",
      buttonLink: "/drinks-menu",
    },
  ];

  const renderGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {images.map((img) => (
        <article key={img.id} className="relative overflow-hidden group">
          {/* Image */}
          <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-72">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Title & Subtitle */}
          <div className="absolute inset-0 flex flex-col ps-4 items-start justify-center pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-20">
            <h3 className="text-xl md:text-4xl font-extrabold text-white">
              {img.title}
            </h3>
            <h2 className="text-lg md:text-2xl font-semibold text-white mt-2">
              {img.subtitle}
            </h2>

            {/* Only mobile button */}
            <a
              href={img.buttonLink}
              className="md:hidden bg-white uppercase text-black font-bold px-4 py-2 rounded-full mt-4 hover:bg-yellow-700 transition-colors z-30 pointer-events-auto inline-block"
            >
              {img.buttonText}
            </a>
          </div>

          {/* Hover Overlay with Description */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
            <div className="absolute inset-0 flex flex-col items-start p-4 text-start bg-black/70 transition-transform duration-500 z-10 group-hover:translate-y-0">
              <p className="text-gray-200 border-gray-200 border-t font-bold mb-2 mt-25 pt-3">
                {img.desc.split(" ").length > 20
                  ? img.desc.split(" ").slice(0, 26).join(" ") + "..."
                  : img.desc}
              </p>
              <DynamicButton
                text={img.buttonText}
                link={img.buttonLink}
                className={"fixed bottom-4 left-4"}
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <main className="bg-white">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-6 pt-2 md:pt-4 md:pb-6 grid grid-cols-1 gap-2 md:gap-4">
        {/* Page Title */}
        <DynamicTitle
          blackText="royal  TREATMENT"
          redText=""
          className="uppercase "
        />

        {/* Grid */}
        {renderGrid()}
      </div>
    </main>
  );
}
