"use client";
import React from "react";

import ReusableGalleryPage from "@/components/common/gallary";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/home/deals2.jpg",
      title: "$29 parties",
      subtitle: "Kids Bronze Parties",
      desc: "Enjoy the best kids bronze parties with fun and games! Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 2,
      src: "/home/deals2.jpg",
      title: "Eat and Play",
      subtitle: "Spend $65 and Get 20",
      desc: "Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 3,
      src: "/home/deals3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
    },
    {
      id: 4,
      src: "/home/deals3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
    },
  ];

  return (
    <main className="bg-white py-14">
      {/* Reusable Gallery */}
      <ReusableGalleryPage images={images} />
    </main>
  );
}
