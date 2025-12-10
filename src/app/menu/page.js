"use client";

import TabsPage from "./blog";
import SimpleMarquee from "./marquee";

export default function Page() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="w-full h-[30vh] sm:h-[50vh] md:h-screen overflow-hidden relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video_online.mp4" // তোমার ভিডিও path
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* Content Section */}
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <SimpleMarquee />
        <TabsPage/>
      </div>
    </>
  );
}
