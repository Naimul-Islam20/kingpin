"use client";

import HeroSection from "@/components/sections/hero/hero";
import TabsPage from "./blog";
import SimpleMarquee from "./marquee";

export default function Page() {
  return (
    <>
      <HeroSection />

      {/* Content Section */}
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <SimpleMarquee />
        <TabsPage/>
      </div>
    </>
  );
}
