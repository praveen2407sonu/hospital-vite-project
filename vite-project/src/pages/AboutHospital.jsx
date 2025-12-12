import React from "react";
import "./AboutHospital.css";

import aboutImg1 from "../assets/images/Dr.Rajat.jpg";
import aboutImg2 from "../assets/images/Dr.-Vishal-Purohit.jpg";
import aboutImg3 from "../assets/images/Dr.-Seema-Goyal.jpeg";

const AboutHospital = () => {
  return (
    <div className="pt-[50px] pb-20 bg-gray-50 about-section">

      {/* HERO HEADER */}
      <div className="bg-green-400 text-white py-16 flex flex-col items-center text-center px-6">
        <h1 className="hero-title text-4xl sm:text-5xl font-bold mb-4">
          About Our Hospital
        </h1>
        <p className="hero-text text-lg sm:text-xl max-w-3xl">
          Providing world-class medical treatment with compassion, advanced technology and
          highly experienced specialists — trusted for over 25 years.
        </p>

        {/* Rounded Hero Image */}
        <div className="mt-10 about-round-img w-40 h-40 sm:w-52 sm:h-52">
          <img
            src={aboutImg1}
            alt="Dr. Rajat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-6xl mx-auto px-6 mt-16 flex flex-col md:flex-row items-center gap-12 about-section">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-7 text-lg">
            Our Hospital is committed to providing the highest standard of healthcare.
            With a team of expert doctors, advanced infrastructure, and modern technology,
            we ensure a safe and comfortable experience for every patient.
          </p>

          <p className="mt-4 text-gray-600">
            Thousands of patients trust us every year for preventive care,
            diagnostics, medical treatments and advanced surgeries.
          </p>
        </div>

        {/* Round Image */}
        <div className="about-round-img w-40 h-40 sm:w-52 sm:h-52">
          <img
            src={aboutImg1}
            alt="Dr. Rajat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 about-section">

        {/* Vision */}
        <div className="about-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Vision</h3>
          <p className="text-gray-700 leading-7">
            To become the most trusted medical institution by delivering excellence,
            innovation and compassionate patient-centered care.
          </p>
          <img
            src={aboutImg2}
            alt="Vision"
            className="about-img-zoom rounded-lg shadow-md mt-6 w-full object-cover h-48"
          />
        </div>

        {/* Mission */}
        <div className="about-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Mission</h3>
          <p className="text-gray-700 leading-7">
            To provide high-quality, affordable and accessible healthcare
            supported by skilled professionals and modern medical systems.
          </p>
          <img
            src={aboutImg3}
            alt="Mission"
            className="about-img-zoom rounded-lg shadow-md mt-6 w-full object-cover h-48"
          />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-6 mt-20 about-section">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            { title: "24/7 Emergency Care", desc: "Immediate medical support with dedicated emergency teams." },
            { title: "Highly Experienced Doctors", desc: "A strong panel of specialists with decades of experience." },
            { title: "Advanced Technology", desc: "Latest diagnostic and surgical equipment for accurate treatment." },
            { title: "Patient-First Approach", desc: "Comfort, safety and personalized care at every step." },
            { title: "Affordable Healthcare", desc: "Cost-effective treatments with full transparency." },
            { title: "Complete Medical Services", desc: "From routine checkups to complex surgeries under one roof." },
          ].map((item, i) => (
            <div
              key={i}
              className="about-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-xl mb-2 text-green-600">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AboutHospital;
