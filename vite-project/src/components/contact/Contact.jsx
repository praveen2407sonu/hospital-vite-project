import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact-section" className="w-full px-6 py-12 bg-gray-100 [scroll-margin-top:6rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Side Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-2">Have Any Query?</h2>
          <p className="text-gray-700 mb-6">
            The best team of doctors in all specialties is ready to help you.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300" />
              <input type="text" placeholder="Last Name" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300" />
            </div>
            <input type="text" placeholder="Mobile No" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300" />
            <input type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300" />
            <textarea placeholder="Message" rows={4} className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"></textarea>
            <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-gray-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Info */}
        <div className="flex flex-col justify-between space-y-4 md:space-y-0 h-full">

          {/* Get in Touch */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex items-center mb-2"><FaMapMarkerAlt className="mr-3 text-blue-700" /><span>Gopalpura Flyover, Jaipur – 302018</span></div>
            <div className="flex items-center mb-2"><FaPhoneAlt className="mr-3 text-blue-700" /><span>0141-2551500</span></div>
            <div className="flex items-center mb-2"><FaPhoneAlt className="mr-3 text-blue-700" /><span>0141-2554139</span></div>
            <div className="flex items-center mb-2"><FaPhoneAlt className="mr-3 text-blue-700" /><span>+91-7414-001-001</span></div>
            <div className="flex items-center mb-2"><FaEnvelope className="mr-3 text-blue-700" /><span>jaipur.hospital@gmail.com</span></div>
          </div>

          {/* Our Specialities */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">Our Specialities</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Internal Medicine</li>
              <li>Gynaecology</li>
              <li>Neurosurgery</li>
              <li>Plastic Surgery</li>
              <li>Urology</li>
              <li>ENT</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 md:h-96 mt-8">
        <iframe
          title="Hospital Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019706737466!2d-122.41941508468366!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d5b2e0bcd%3A0x4b754e67f7daa0f1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v00000000000"
          className="w-full h-full rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
};

export default Contact;
