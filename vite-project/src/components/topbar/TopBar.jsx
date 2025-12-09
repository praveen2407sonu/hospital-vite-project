// import React from "react";
// import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";

// const TopBar = () => {
//   return (
//     <div className="w-full bg-green-600 text-white text-sm py-2">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">

//         {/* LEFT SIDE INFO */}
//         <div className="flex flex-wrap items-center gap-6">
//           <div className="flex items-center gap-1">
//             <FiPhoneCall size={16} />
//             <span>0141-2551500</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <FiMail size={16} />
//             <span>jaipur.hospital@gmail.com</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <FiMapPin size={16} />
//             <span>Mahaveer Nagar S16A, S17, Tonk Rd, Gopal Pura Mode, Jaipur, Rajasthan 302018</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE SOCIAL ICONS WITH BOX & HOVER */}
//         <div className="flex items-center gap-3">
//           <a href="#" className="w-8 h-8 flex justify-center items-center bg-black text-white rounded hover:bg-green-500 transition">
//             <FaFacebookF size={16} />
//           </a>
//           <a href="#" className="w-8 h-8 flex justify-center items-center bg-black text-white rounded hover:bg-green-500 transition">
//             <FaTwitter size={16} />
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TopBar;






import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-green-600 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">

        {/* LEFT SIDE INFO */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1">
            <FiPhoneCall size={16} />
            <span>0141-2551500</span>
          </div>

          <div className="flex items-center gap-1">
            <FiMail size={16} />
            <span>jaipur.hospital@gmail.com</span>
          </div>

          <div className="flex items-center gap-1">
            <FiMapPin size={16} />
            <span>Mahaveer Nagar S16A, S17, Tonk Rd, Gopal Pura Mode, Jaipur, Rajasthan 302018</span>
          </div>
        </div>

        {/* RIGHT SIDE SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          <a href="#" className="w-8 h-8 flex justify-center items-center bg-black text-white rounded hover:bg-green-500 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="w-8 h-8 flex justify-center items-center bg-black text-white rounded hover:bg-green-500 transition">
            <FaTwitter size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
