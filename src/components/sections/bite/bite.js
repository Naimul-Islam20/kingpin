import DynamicTitle from "@/components/ui/TitleText";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";

// JSON data
const galleryData = [
  { src: "/home/bite1.jpg", text: "Outdoor Carnival Game Zone" },
  { src: "/home/bite2.jpg", text: "Digital Game Zone" },
  { src: "/home/bite3.jpg", text: "Outdoor Kids Zone" },
  { src: "/home/bite4.jpg", text: "Food Court" },
  { src: "/home/bite5.jpg", text: "Live Acoustic Music" },
  { src: "/home/bite6.jpg", text: "Sports Screening" },
];

const scndgalleryData = [
  { src: "/home/frame1.jpg", text: "Outdoor Carnival Game Zone" },
  { src: "/home/frame2.jpg", text: "Digital Game Zone" },
  { src: "/home/frame3.jpg", text: "Outdoor Kids Zone" },
];
export default function GalleryPage() {
  return (
    <div className="max-w-[1250px] mx-auto px-4 md:px-12 lg:px-16 py-11  grid grid-cols-1 gap-8">
      {/* Title */}
      <DynamicTitle
        blackText="The Best "
        redText="Bits"
        Icon={<IoGameController />}
      />

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item, i) => (
          <div key={i} className="relative group overflow-hidden rounded-md">
            <Image
              src={item.src}
              alt="Gallery Image"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />

            {/* Blur Text Overlay */}
            <div className="absolute bottom-3 rounded-sm left-3 right-3 backdrop-blur-[2px] bg-black/30 text-white py-4 px-4 flex flex-col gap-2">
              <p className="text-sm font-semibold">{item.text}</p>
              <button className="backdrop-blur-lg bg-white/30 text-white px-3 py-1 rounded-md flex items-center gap-1.5 w-fit hover:bg-white/40 transition text-sm">
                More Info
                <HiArrowRight className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Cover Photo Section */}
      <div className="relative w-full h-72 bg-amber-200 rounded-md overflow-hidden">
        <Image
          src="/home/card3.jpg"
          alt="Cover Photo"
          fill
          className="object-cover"
        />
      </div>

      <DynamicTitle
        blackText="Royal  "
        redText="Treatment !"
        Icon={<FaCrown />}
      />

      {/* 2nd Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {scndgalleryData.map((item, i) => (
          <div key={i} className="relative group overflow-hidden rounded-md">
            <Image
              src={item.src}
              alt="Gallery Image"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />

            {/* Blur Text Overlay */}
            <div className="absolute bottom-3 rounded-sm left-3 right-3 backdrop-blur-[2px] bg-black/30 text-white py-4 px-4 flex flex-col gap-2">
              <p className="text-sm font-semibold">{item.text}</p>
              <button className="backdrop-blur-lg bg-white/30 text-white px-3 py-1 rounded-md flex items-center gap-1.5 w-fit hover:bg-white/40 transition text-sm">
                More Info
                <HiArrowRight className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
