import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-green-600 text-white overflow-hidden">
      <div className="w-full px-3 sm:px-4 lg:px-6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-3 py-1.5 sm:py-2 max-w-7xl mx-auto">
          
          {/* LEFT INFO - Optimized for mobile */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto max-w-full overflow-hidden">
            <div className="flex items-center gap-1 text-xs sm:text-sm max-w-full overflow-hidden">
              <FiPhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">0141-2551500</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs sm:text-sm max-w-full overflow-hidden">
              <FiMail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-[180px] md:max-w-none">jaipur.hospital@gmail.com</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1 text-xs sm:text-sm max-w-full overflow-hidden">
              <FiMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate max-w-[200px] lg:max-w-[300px] xl:max-w-none">
                Mahaveer Nagar S16A, S17, Tonk Rd, Gopal Pura Mode, Jaipur, Rajasthan 302018
              </span>
            </div>

            {/* Mobile address - compact version */}
            <div className="sm:hidden flex items-center gap-1 text-xs max-w-full overflow-hidden">
              <FiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate max-w-[120px]">Gopal Pura, Jaipur</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 mt-0.5 sm:mt-0 flex-shrink-0">
            <a 
              href="#" 
              className="w-6 h-6 sm:w-7 sm:h-7 flex justify-center items-center bg-black text-white rounded-full hover:bg-green-500 transition duration-200 flex-shrink-0"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </a>
            <a 
              href="#" 
              className="w-6 h-6 sm:w-7 sm:h-7 flex justify-center items-center bg-black text-white rounded-full hover:bg-green-500 transition duration-200 flex-shrink-0"
              aria-label="Twitter"
            >
              <FaTwitter className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;