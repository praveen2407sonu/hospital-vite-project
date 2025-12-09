import React from "react";
import { 
  FaHeadphones,  // FaEar की जगह
  FaUserNurse, 
  FaStethoscope, 
  FaSyringe, 
  FaBone, 
  FaBrain, 
  FaRunning, 
  FaProcedures 
} from "react-icons/fa";


const departments = [
  {
    icon: <FaHeadphones className="text-4xl text-blue-600 mb-2" />,
    name: "Ear Nose Throat",
    description: "Expert care for hearing, nasal and throat disorders."
  },
  {
    icon: <FaUserNurse className="text-4xl text-blue-600 mb-2" />,
    name: "Gynaecology & Obstetrics",
    description: "Comprehensive women's health and pregnancy care."
  },
  {
    icon: <FaStethoscope className="text-4xl text-blue-600 mb-2" />,
    name: "Gastroenterology",
    description: "Specialized treatment for digestive system disorders."
  },
  {
    icon: <FaProcedures className="text-4xl text-blue-600 mb-2" />,
    name: "General & Laparoscopic Surgery",
    description: "Advanced minimally invasive and general surgeries."
  },
  {
    icon: <FaBone className="text-4xl text-blue-600 mb-2" />,
    name: "Joint Replacement",
    description: "Expert orthopedic care for joint replacement surgeries."
  },
  {
    icon: <FaBrain className="text-4xl text-blue-600 mb-2" />,
    name: "Neurosurgery & Neurology",
    description: "Comprehensive brain and nervous system care."
  },
  {
    icon: <FaRunning className="text-4xl text-blue-600 mb-2" />,
    name: "Sports Injury",
    description: "Diagnosis and treatment for sports-related injuries."
  },
  {
    icon: <FaSyringe className="text-4xl text-blue-600 mb-2" />,
    name: "Urology",
    description: "Specialized care for urinary and male reproductive health."
  },
];

const Departments = () => {
  return (
    <div className="bg-blue-50/30 py-14 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center 
                       transition-transform hover:scale-105 cursor-pointer"
          >
            {/* Icon */}
            {dept.icon}

            {/* Name */}
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
