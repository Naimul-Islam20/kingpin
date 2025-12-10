// app/deals/page.jsx
"use client";

import ReusableMarquee from "@/components/common/marquee";
import { marqueeItems } from "./marqueeData";
import GalleryPage from "./gallary";
import DynamicTitle from "@/components/ui/TitleText";

export default function DealsPage() {
  return (
    <div className=" bg-white">
      <div className="max-w-[1330px] mx-auto md:px-12 lg:px-16 pt-5 md:pt-6">
        <div className="text-center space-y-6 py-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-black">
            DEALS & SPECIALS
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What's On
          </h2>
        </div>

        <ReusableMarquee items={marqueeItems} speed={1.2} />

        <GalleryPage />

        <DynamicTitle
          blackText="BECOME A ROYAL REWARDS MEMBER TO UNLOCK:"
          className=""
        />

        <GalleryPage />

        {/* (রেখা লাগলে এখানে পরের সময় Deals cards / sections যোগ করতে পারবে) */}
      </div>
    </div>
  );
}
