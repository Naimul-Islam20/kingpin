"use client";
import DynamicTitle from "@/components/ui/TitleText";
import React from "react";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/home/royal1.jpg",
      title: "$29 parties",
      subtitle: "Kids Bronze Parties",
      desc: "Enjoy the best kids bronze parties with fun and games!Have a delicious meal and enjoy our fun activities!Have a delicious meal and enjoy our fun activities! Enjoy the best kids bronze parties with fun and games!Enjoy the best kids bronze parties with fun and games!",
    },
    {
      id: 2,
      src: "/home/royal2.jpg",
      title: "Eat and Play",
      subtitle: "Spend $65 and Get 20",
      desc: "Have a delicious meal and enjoy our fun activities!Have a delicious meal and enjoy our fun activities!Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 3,
      src: "/home/royal3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-4 pt-2 md:pt-4 md:pb-6 grid grid-cols-1 gap-2 md:gap-4">
        {/* Page Title */}
        <DynamicTitle
          blackText="deals and spacials"
          redText=""
          className="uppercase"
        />

        {/* Image Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6">
            {images.map((img) => (
              <article key={img.id} className="relative overflow-hidden group">
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover block"
                  />

                  {/* কালো আভা */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                {/* Title + Subtitle (hover এ উপরে যাবে) */}
                <div className="absolute inset-0 flex flex-col ps-4 items-start justify-center pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-20">
                  <h3 className="text-xl md:text-4xl font-extrabold text-white">
                    {img.title}
                  </h3>
                  <h2 className="text-lg md:text-2xl font-semibold text-white mt-2">
                    {img.subtitle}
                  </h2>
                </div>

                {/* Overlay background + desc + button (নিচ থেকে slide করে আসে) */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <div className="w-full p-4">
                    <div className="border-t border-gray-400 mb-2"></div>
                    <p className="text-gray-400 font-bold mb-2">
                      {img.desc.split(" ").slice(0, 26).join(" ")}...
                    </p>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-full items-center hover:bg-yellow-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Repeat Section */}
        <DynamicTitle
          blackText="deals and spacials"
          redText=""
          className="uppercase"
        />
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6">
            {images.map((img) => (
              <article key={img.id} className="relative overflow-hidden group">
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover block"
                  />

                  {/* কালো আভা */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                {/* Title + Subtitle (hover এ উপরে যাবে) */}
                <div className="absolute inset-0 flex flex-col ps-4 items-start justify-center pointer-events-none z-20 transition-all duration-500 group-hover:-translate-y-20">
                  <h3 className="text-xl md:text-4xl font-extrabold text-white">
                    {img.title}
                  </h3>
                  <h2 className="text-lg md:text-2xl font-semibold text-white mt-2">
                    {img.subtitle}
                  </h2>
                </div>

                {/* Overlay background + desc + button (নিচ থেকে slide করে আসে) */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-start bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <div className="w-full p-4">
                    <div className="border-t border-gray-400 mb-2"></div>
                    <p className="text-gray-400 font-bold mb-2">
                      {img.desc.split(" ").slice(0, 26).join(" ")}...
                    </p>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-full items-center hover:bg-yellow-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
