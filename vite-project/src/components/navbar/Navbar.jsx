import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/amar-logo.png";
import TopBar from "../topbar/TopBar";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const activeClass = "text-[#14A44D] font-semibold";
  const defaultClass = "text-gray-700";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
      </div>

      {/* NAVBAR */}
      <div className="fixed top-[64px] sm:top-10 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-40 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 sm:w-48 md:w-48 cursor-pointer" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium ml-6">
            <Link
              to="/"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/" ? activeClass : defaultClass
              }`}
            >
              Home
            </Link>

            {/* ABOUT US (Updated) */}
            <div className="relative group">
              <Link
                to="/about-hospital"
                className="flex items-center gap-1 hover:text-[#14A44D] transition cursor-pointer"
              >
                <span>About Us</span>
                <FiChevronDown className="w-5 h-5" />
              </Link>

              <div className="absolute left-0 top-7 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white shadow-lg border rounded w-48 py-2 z-50">
                {[
                  { name: "About Hospital", link: "/about-hospital" },
                  { name: "CEO Message", link: "/ceo-message" },
                  { name: "Management", link: "/management" },
                  { name: "Vision & Mission", link: "/vision-mission" },
                  { name: "Our Values", link: "/our-values" },
                ].map((item, i) =>
                  item.name === "About Hospital" ? (
                    <p
                      key={i}
                      className="px-4 py-2 text-gray-700 cursor-default"
                    >
                      {item.name}
                    </p>
                  ) : (
                    <Link
                      key={i}
                      to={item.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D]"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* SERVICES */}
            <div className="relative group">
              <Link
                to="/our-services"
                className="flex items-center gap-1 hover:text-[#14A44D] transition cursor-pointer"
              >
                <span>Services</span>
                <FiChevronDown className="w-5 h-5" />
              </Link>

              <div className="absolute left-0 top-7 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white shadow-lg border rounded w-52 py-2 z-50">
                {[
                  
                  "Emergency Services",
                  "Ambulance Service",
                  "24/7 Pharmacy",
                  "Diagnostic Services",
                  "Health Checkups",
                  "Surgery",
                  "ENT",
                  "Cardiology",
                  "Pediatrics",
                  "Radiology",
                ].map((item, i) =>
                  item === "Our Service" ? (
                    <p
                      key={i}
                      className="px-4 py-2 text-gray-700 cursor-default"
                    >
                      {item}
                    </p>
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

            <Link
              to="/news-media"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/news-media" ? activeClass : defaultClass
              }`}
            >
              News & Media
            </Link>

            <Link
              to="/blogs"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/blogs" ? activeClass : defaultClass
              }`}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className={`hover:text-[#14A44D] transition ${
                location.pathname === "/contact" ? activeClass : defaultClass
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-3xl">
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col px-6 py-4 gap-2">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

              <Link to="/about-hospital" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <div className="ml-4 border-l pl-3">
                <Link to="/ceo-message" onClick={() => setMobileMenuOpen(false)}>CEO Message</Link>
                <Link to="/management" onClick={() => setMobileMenuOpen(false)}>Management</Link>
                <Link to="/vision-mission" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
                <Link to="/our-values" onClick={() => setMobileMenuOpen(false)}>Our Values</Link>
              </div>

              <Link to="/our-services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/news-media" onClick={() => setMobileMenuOpen(false)}>News & Media</Link>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </div>

      {/* PAGE SPACING */}
      <div className="pt-[120px] sm:pt-24"></div>
    </>
  );
};

export default Navbar;
