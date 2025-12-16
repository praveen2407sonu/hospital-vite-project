import { 
  FiCheckCircle, 
  FiHeart, 
  FiActivity, 
  FiAlertTriangle, 
  FiTruck, 
  FiUser 
} from "react-icons/fi";

import advancedCareImg from "../assets/images/advance-care.webp";
import diagnosticImg from "../assets/images/daignostic.jpg";

// HOVER IMAGE BOX (Responsive Slide)
const HoverImageBox = ({ image, title, description }) => {
  return (
    <div className="relative group w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />

      {/* SLIDING PANEL */}
      <div
        className="
          absolute inset-0 bg-black/60 text-white p-6 flex flex-col justify-center
          -translate-x-full sm:-translate-x-full md:-translate-x-full lg:-translate-x-full
          group-hover:translate-x-0
          transition-all duration-500 ease-in-out
          sm:group-hover:translate-x-0
          md:group-hover:translate-x-0
          lg:group-hover:translate-x-0
          xs:-translate-y-full xs:group-hover:translate-y-0
        "
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <button className="text-[#14A44D] font-semibold mt-2">
          Learn More →
        </button>
      </div>
    </div>
  );
};

const OurServicesPage = () => {
  return (
    <div className="pt-[50px] pb-16 bg-gray-50">
      
      {/* HEADER BANNER */}
      <div className="relative w-full h-64 bg-cover bg-center bg-blue-600">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Our Medical Services
          </h1>
        </div>
      </div>

      {/* SERVICE INTRO */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <p className="text-black text-2xl leading-relaxed mb-10">
          We provide world-class medical services with modern technology, expert
          doctors, and 24/7 emergency care to ensure better health for every
          patient.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiAlertTriangle className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Care</h3>
            <p className="text-gray-600">Immediate treatment for critical patients.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiHeart className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
            <p className="text-gray-600">Expert heart specialists with modern equipment.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiActivity className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diagnostics & Lab</h3>
            <p className="text-gray-600">MRI, CT scan and lab facilities.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiTruck className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ambulance Service</h3>
            <p className="text-gray-600">Fully equipped ambulance available 24/7.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiCheckCircle className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Checkup Packages</h3>
            <p className="text-gray-600">Routine & executive checkups.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FiUser className="w-12 h-12 text-[#14A44D] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Surgery & Operations</h3>
            <p className="text-gray-600">Expert surgeons with modern OT.</p>
          </div>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HoverImageBox
          image={advancedCareImg}
          title="Advanced Patient Care"
          description="Our ICUs & trauma units are equipped with advanced monitoring systems."
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Advanced Patient Care Facilities
          </h2>
          <p className="text-gray-600 mb-6">
            Our hospital is equipped with modern ICUs, trauma units, 
            and high-tech monitoring systems to ensure the best patient care.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">High-Tech ICU & Emergency Units</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">Advanced Monitoring Equipment</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">Experienced & Certified Doctors</span>
            </li>
          </ul>
        </div>
      </div>
 
      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cutting-Edge Diagnostic Technology
          </h2>
          <p className="text-gray-600 mb-6">
            We use world-class imaging systems, digital labs, and 
            AI-powered diagnostic tools to provide accurate results.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FiActivity className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">MRI, CT Scan & Digital X-Ray</span>
            </li>
            <li className="flex items-center gap-3">
              <FiActivity className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">Fully Automated Laboratory</span>
            </li>
            <li className="flex items-center gap-3">
              <FiActivity className="text-[#14A44D] w-6 h-6" />
              <span className="text-gray-700">AI Assisted Diagnosis</span>
            </li>
          </ul>
        </div>

        <HoverImageBox
          image={diagnosticImg}
          title="Modern Diagnostic Technology"
          description="MRI, CT scan, digital X-ray and automated labs powered by AI."
        />
      </div>
    </div>
  );
};

export default OurServicesPage;
