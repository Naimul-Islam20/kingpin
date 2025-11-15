import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Topbar = () => {
  return (
    <div className="w-full bg-red-500 border-b border-gray-200 text-white text-xs sm:text-sm md:text-base">
      <div className="w-full mx-auto text-sm px-3 md:px-6 py-1 flex justify-between items-center">
        
        {/* Left Side: Location & Phone */}
        <div className="flex items-center  gap-2 sm:gap-6 whitespace-nowrap">
          
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-gray-600" />
            <a href="tel:+8801336188906" className=" underline">
  +8801336188906
</a>

          </div>
          <div className="flex items-center gap-1">
            <GoLocation className="text-black" />
            <span>Ocean Tower, Chittagong</span>
          </div>
        </div>

        {/* Right Side: Language Icon
        <div className="flex items-center gap-1 cursor-pointer">
          <FaGlobe className="text-gray-700" />
          <select className="border px-2 py-1 text-xs rounded bg-white">
              <option>English</option>
              
            </select>
        </div>
         */}
      </div>
    </div>
  );
};

export default Topbar;