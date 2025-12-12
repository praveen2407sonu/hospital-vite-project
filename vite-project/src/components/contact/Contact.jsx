import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gray-100 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content - Form and Contact Info */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Side Form */}
          <div className="flex-1">
            <div className="w-full bg-white shadow-lg sm:shadow-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">Have Any Query?</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                The best team of doctors in all specialties is ready to help you.
              </p>
              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile No"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 rounded-md text-sm sm:text-base transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Get in Touch */}
          <div className="flex-1">
            <div className="w-full bg-white shadow-lg sm:shadow-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-900">Get in Touch</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Gopalpura Flyover, Jaipur – 302018
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">0141-2551500</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">0141-2554139</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">+91-7414-001-001</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base break-all">jaipur.hospital@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-6 sm:mt-8 lg:mt-10 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
          <iframe
            title="Hospital Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019706737466!2d-122.41941508468366!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d5b2e0bcd%3A0x4b754e67f7daa0f1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v00000000000"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;