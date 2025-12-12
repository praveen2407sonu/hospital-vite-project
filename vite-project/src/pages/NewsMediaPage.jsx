import { FiChevronRight } from "react-icons/fi";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.webp";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg"; // Extra images
import img6 from "../assets/images/gallery6.webp";

const newsItems = [
  {
    title: "New ICU Wing Inaugurated",
    description:
      "Our hospital launched a state-of-the-art ICU wing to provide advanced patient care.",
    image: img1,
  },
  {
    title: "COVID-19 Vaccination Drive",
    description:
      "Successfully conducted a large-scale vaccination drive for our community.",
    image: img2,
  },
  {
    title: "Award for Best Hospital 2025",
    description:
      "We have been awarded as the best hospital for patient safety and quality care.",
    image: img3,
  },
  {
    title: "New Diagnostic Center Opened",
    description:
      "Our diagnostic center now equipped with AI-based imaging and lab facilities.",
    image: img4,
  },
];

const mediaHighlights = [
  {
    title: "Featured in Health Weekly Magazine",
    description:
      "Our hospital's advanced technology and patient care have been featured in Health Weekly.",
    image: img5,
  },
  {
    title: "TV Coverage of Blood Donation Camp",
    description:
      "Local TV covered our hospital’s community blood donation drive successfully.",
    image: img6,
  },
];

const NewsMediaPage = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            News & Media
          </h1>

          {/* SECTION 1: Latest News */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Latest News
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
                    Read More <FiChevronRight className="ml-1 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 2: Media Highlights */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Media Highlights
          </h2>
          <div className="flex flex-col gap-12">
            {mediaHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
                />
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
                    Read More <FiChevronRight className="ml-1 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMediaPage;
