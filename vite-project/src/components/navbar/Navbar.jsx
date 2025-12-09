import { useRef, useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import logo from "../../assets/images/hospital-plus.webp";
import TopBar from "../topbar/TopBar";

const Navbar = () => {
  const contactRef = useRef(null);

  // ⭐ Active menu tracking
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to Contact
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to Gallery
  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery-section");
    if (gallery) {
      const navbarHeight = 120;
      const elementTop = gallery.getBoundingClientRect().top;
      const scrollPosition = elementTop + window.scrollY - navbarHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // Scroll to Blogs
  const scrollToBlogs = () => {
    const blogs = document.getElementById("blogs-section");
    if (blogs) {
      const navbarHeight = 120;
      const elementTop = blogs.getBoundingClientRect().top;
      const scrollPosition = elementTop + window.scrollY - navbarHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // Assign contact ref
  useEffect(() => {
    const contactSection = document.getElementById("contact-section");
    contactRef.current = contactSection;
  }, []);

  // ⭐ Detect which section is visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // offset for navbar height

      if (scrollY < 400) {
        setActiveSection("home");
      }

      const gallery = document.getElementById("gallery-section");
      if (gallery) {
        const top = gallery.offsetTop - 150;
        const bottom = top + gallery.offsetHeight;
        if (scrollY >= top && scrollY <= bottom) {
          setActiveSection("gallery");
        }
      }

      const blogs = document.getElementById("blogs-section");
      if (blogs) {
        const top = blogs.offsetTop - 150;
        const bottom = top + blogs.offsetHeight;
        if (scrollY >= top && scrollY <= bottom) {
          setActiveSection("blogs");
        }
      }

      const contact = document.getElementById("contact-section");
      if (contact) {
        const top = contact.offsetTop - 150;
        if (scrollY >= top) {
          setActiveSection("contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Active class
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
          <img
            src={logo}
            alt="logo"
            className="w-24 cursor-pointer"
            onClick={scrollToTop}
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-700 ml-6">

            {/* ⭐ HOME */}
            <span
              className={`cursor-pointer hover:text-[#14A44D] transition ${
                activeSection === "home" ? activeClass : defaultClass
              }`}
              onClick={scrollToTop}
            >
              Home
            </span>

            {/* ABOUT US */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#14A44D] transition">
                <span>About Us</span>
                <FiChevronDown className="mt-[2px] w-5 h-5 text-gray-800" />
              </div>
              <div className="absolute left-0 top-7 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-white shadow-lg border border-gray-200 rounded w-48 py-2 z-50">
                {["About Hospital","CEO Message","Management","Vision & Mission","Our Values"].map((item,i)=>(
                  <p key={i} className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D] cursor-pointer">{item}</p>
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
                {["Emergency Services","Ambulance Service","24/7 Pharmacy","Diagnostic Services","Health Checkups","Surgery","ENT","Cardiology","Pediatrics","Radiology"].map((item,i)=>(
                  <p key={i} className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#14A44D] cursor-pointer">{item}</p>
                ))}
              </div>
            </div>

            {/* ⭐ NEWS & MEDIA → Gallery */}
            <span
              className={`cursor-pointer hover:text-[#14A44D] transition ${
                activeSection === "gallery" ? activeClass : defaultClass
              }`}
              onClick={() => {
                const gallery = document.getElementById("gallery-section");
                if (gallery) {
                  const navbarHeight = 120;
                  const elementTop = gallery.getBoundingClientRect().top;
                  const scrollPosition = elementTop + window.scrollY - navbarHeight;
                  window.scrollTo({ top: scrollPosition, behavior: "smooth" });
                }
              }}
            >
              News & Media
            </span>

            {/* ⭐ BLOGS */}
            <span
              className={`cursor-pointer hover:text-[#14A44D] transition ${
                activeSection === "blogs" ? activeClass : defaultClass
              }`}
              onClick={scrollToBlogs}
            >
              Blogs
            </span>

            {/* ⭐ CONTACT */}
            <span
              className={`cursor-pointer hover:text-[#14A44D] transition ${
                activeSection === "contact" ? activeClass : defaultClass
              }`}
              onClick={scrollToContact}
            >
              Contact Us
            </span>

            <FiSearch className="text-gray-700 w-5 h-5 cursor-pointer hover:text-[#14A44D] transition" />
          </div>
        </div>
      </div>

      {/* Padding */}
      <div className="pt-24"></div>
    </>
  );
};

export default Navbar;
