"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ReusableMarquee from "@/components/common/marquee";
import { marqueeItems } from "./marqueeItem";

export default function SimpleMarqueePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/target-page");
  };

  return (
    <div className="w-full py-10 bg-white overflow-hidden">
      <div className="max-w-[1330px] mx-auto">
        {/* Top Section */}
        <div className="py-3">
          <h4 className="uppercase text-black mb-2 text-xl font-bold">
            Enjoy performances from talented artists Exclusive
          </h4>
          <p className="text-black text-lg leading-relaxed">
            Enjoy performances from talented artists Exclusive services for
            discerning gentlemen Exclusive services for discerning gentlemen
            Enjoy performances from talented artists Exclusive services for
            discerning gentlemen Exclusive services for discerning gentlemen
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl uppercase font-bold text-black my-3">
            Enjoy performances from talented artists
          </h3>
        </div>

        {/* ✅ Marquee Added (Reusable) */}
        <ReusableMarquee items={marqueeItems} speed={1.0} />

        {/* Bottom Section */}
        <div className="mt-10">
          <div className="text-center my-7">
            <h3 className="text-2xl md:text-4xl uppercase font-bold text-black my-3">
              Enjoy performances from talented artists
            </h3>
          </div>

          <div
            onClick={handleClick}
            className="w-full cursor-pointer overflow-hidden"
          >
            <img
              src="/home/gc-desktop.gif"
              alt="Description Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
