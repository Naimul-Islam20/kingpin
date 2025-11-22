"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-screen h-[30vh] sm:h-[50vh] md:h-screen overflow-hidden relative">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/nUMeYvjrDiE?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=nUMeYvjrDiE&modestbranding=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default HeroSection;
