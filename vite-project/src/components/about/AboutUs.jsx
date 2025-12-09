import React from "react";
// import aboutBg from "../../assets/images/about.jpg"; // path correct hona chahiye

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('../src/assets/images/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-shadow-gray-800 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-shadow-gray-600 text-base sm:text-lg lg:text-2xl mb-6">
          We are a leading medical clinic dedicated to providing high-quality
          healthcare services. Our mission is to ensure every patient receives
          the care and attention they deserve.
        </p>
        <button className="bg-[#052442] text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition">
          About Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
