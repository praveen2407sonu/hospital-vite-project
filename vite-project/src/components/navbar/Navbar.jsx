import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/hospital-plus.webp";
import TopBar from "../topbar/TopBar";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const activeClass = "text-[#14A44D] font-semibold";
  const defaultClass = "text-gray-700";

  return (
    <>
      {/* TOPBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
      </div>

      {/* NAVBAR */}
      <div className="fixed top-10 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-24 cursor-pointer" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-700 ml-6">

            {/* HOME */}
            <Link
              to="/"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/" ? activeClass : defaultClass
              }`}
            >
              Home
            </Link>

            {/* ABOUT US */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#14A44D] transition">
                <span>About Us</span>
                <FiChevronDown className="mt-[2px] w-5 h-5 text-gray-800" />
              </div>

              <div className="absolute left-0 top-7 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white shadow-lg border border-gray-200 rounded w-48 py-2 z-50">
                {[
                  { name: "About Hospital", link: "/about-hospital" },
                  { name: "CEO Message", link: "/ceo-message" },
                  { name: "Management", link: "/management" },
                  { name: "Vision & Mission", link: "/vision-mission" },
                  { name: "Our Values", link: "/our-values" }
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#14A44D] transition">
                <span>Services</span>
                <FiChevronDown className="mt-[2px] w-5 h-5 text-gray-800" />
              </div>

              <div className="absolute left-0 top-7 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white shadow-lg border border-gray-200 rounded w-52 py-2 z-50">

                {[
                  "Our Service",
                  "Emergency Services",
                  "Ambulance Service",
                  "24/7 Pharmacy",
                  "Diagnostic Services",
                  "Health Checkups",
                  "Surgery",
                  "ENT",
                  "Cardiology",
                  "Pediatrics",
                  "Radiology"
                ].map((item, i) =>
                  item === "Our Service" ? (
                    <Link
                      key={i}
                      to="/our-services"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D]"
                    >
                      {item}
                    </Link>
                  ) : (
                    <p
                      key={i}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D] cursor-pointer"
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* NEWS & MEDIA */}
            <Link
              to="/news-media"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/news-media" ? activeClass : defaultClass
              }`}
            >
              News & Media
            </Link>

            {/* BLOGS */}
            <Link
              to="/blogs"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/blogs" ? activeClass : defaultClass
              }`}
            >
              Blogs
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/contact" ? activeClass : defaultClass
              }`}
            >
              Contact Us
            </Link>

          </div>
        </div>
      </div>

      {/* PAGE SPACING */}
      <div className="pt-24"></div>
    </>
  );
};

export default Navbar;
