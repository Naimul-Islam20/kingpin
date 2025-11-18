import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-red-500 border-b py-1 border-gray-200 text-white text-xs sm:text-sm md:text-base">
      <div className="w-full mx-auto px-3 md:px-6 py-1 flex justify-end items-center">
        {/* Social Icons with circular bg */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Facebook */}
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
          >
            <FaFacebookF className="text-white w-4 h-4" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
          >
            <FaTwitter className="text-white w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href="#"
         
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
          >
            <FaInstagram className="text-white w-4 h-4" />
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
          >
            <FaWhatsapp className="text-white w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
