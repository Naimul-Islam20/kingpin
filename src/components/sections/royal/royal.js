"use client";
import DynamicTitle from "@/components/ui/TitleText";
import React from "react";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/home/royal-fake.jpg",
      title: "$29 parties",
      desc: "kids bronze parties",
    },
    {
      id: 2,
      src: "/home/royal-fake.jpg",
      title: "eat and play",
      desc: "spend $65 and get 20",
    },
    {
      id: 3,
      src: "/home/royal-fake.jpg",
      title: "new drinks menu",
      desc: "sip royal",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-2  md:py-10 grid grid-cols-1 gap-2 md:gap-9 ">
        {/* Page Title */}
        <DynamicTitle
          blackText="deals and spacials"
          redText=""
          className="uppercase"
        />

        {/* Three-image row */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6">
            {images.map((img) => (
              <article
                key={img.id}
                className="relative overflow-hidden rounded-md"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover block"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-opacity-40 transition-opacity duration-200 flex items-center justify-start p-3 sm:p-4">
                  <div className="text-start text-white">
                    <h3 className="text-xl  mt-30 md:text-xl font-black">
                      {img.title}
                    </h3>
                    <p className=" text-base md:text-md font-bold">
                      {img.desc}
                    </p>
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
              <article
                key={img.id}
                className="relative overflow-hidden rounded-md"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover block"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-opacity-40 transition-opacity duration-200 flex items-center justify-start p-3 sm:p-4">
                  <div className="text-start text-white">
                    <h3 className="text-base sm:text-lg md:text-xl font-black">
                      {img.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base font-bold">
                      {img.desc}
                    </p>
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


