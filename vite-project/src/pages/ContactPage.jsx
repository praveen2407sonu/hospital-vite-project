import React from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiUser, FiMessageSquare } from "react-icons/fi";

const ContactPage = () => {
  return (
    <>
      {/* EMERGENCY CONTACT SECTION */}
      <section
        className="w-full pt-[110px] py-12 px-4"
        style={{
          background: "linear-gradient(135deg, #FF4E50, #F9D423)", // Vibrant gradient
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Emergency? Contact Us Immediately
            </h2>
            <p className="text-white text-lg sm:text-xl">
              Our team is available 24/7 for any medical emergency. Get help right away!
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end flex-1">
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-lg">
              <FiPhoneCall size={28} className="text-red-600" />
              <div>
                <p className="text-gray-800 font-semibold text-lg">Call Now</p>
                <p className="text-gray-700 text-sm">0141-2551500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT FORM SECTION */}
      <section
        className="w-full pt-12 pb-16 px-4"
        style={{
          background: "rgba(245,245,245,0.3)", // Transparent gray background
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE – CONTACT INFO */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6 border border-gray-200 shadow-xl backdrop-blur-md"
            style={{
              background: "rgba(193, 176, 175, 0.85)", // Glass effect
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Contact <span className="text-green-600">Us</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              We are here to provide the best healthcare assistance.  
              Feel free to reach out anytime—our team will get back to you shortly.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                <FiPhoneCall size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-gray-700">0141-2551500</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email Address</h4>
                <p className="text-gray-700">jaipur.hospital@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-700">
                  Mahaveer Nagar S16A, Tonk Road, Gopalpura Mode, Jaipur, Rajasthan 302018
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="border-t pt-5 mt-2">
              <h4 className="font-semibold text-lg text-gray-700">Working Hours</h4>
              <p className="text-gray-600 mt-1">Mon - Sun : 24 Hours Open</p>
            </div>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div
            className="rounded-2xl p-8 border border-gray-200 shadow-xl backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.75)", // Glass effect
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="text-gray-800 font-medium">Full Name</label>
                <div className="flex items-center border rounded-xl px-4 py-3 mt-2 bg-white/70 backdrop-blur-sm focus-within:ring-2 focus-within:ring-green-500">
                  <FiUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-800 font-medium">Email Address</label>
                <div className="flex items-center border rounded-xl px-4 py-3 mt-2 bg-white/70 backdrop-blur-sm focus-within:ring-2 focus-within:ring-green-500">
                  <FiMail className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-800 font-medium">Phone Number</label>
                <div className="flex items-center border rounded-xl px-4 py-3 mt-2 bg-white/70 backdrop-blur-sm focus-within:ring-2 focus-within:ring-green-500">
                  <FiPhoneCall className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="w-full bg-transparent outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-800 font-medium">Message</label>
                <div className="flex items-start border rounded-xl px-4 py-3 mt-2 bg-white/70 backdrop-blur-sm focus-within:ring-2 focus-within:ring-green-500">
                  <FiMessageSquare className="text-gray-500 mt-1 mr-3" />
                  <textarea
                    rows="4"
                    placeholder="Type your message..."
                    className="w-full bg-transparent outline-none text-gray-700 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
