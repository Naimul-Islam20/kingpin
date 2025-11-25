"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[30vh] sm:h-[50vh] md:h-screen overflow-hidden relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video_online.mp4" // এখানে তুমি তোমার ভিডিও path দেবে
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroSection;
