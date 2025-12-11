import { useState, useEffect } from "react";

// Importing images
import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.webp";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery3.webp";
import img6 from "../../assets/images/gallery2.jpg";
import img7 from "../../assets/images/gallery4.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery-section" className="w-full py-12 bg-gray-50">
      
      {/* Heading Row */}
      <div className="max-w-5xl mx-auto px-4  lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
          Gallery of Hospital
        </h2>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-red-600 transition w-auto   sm:w-40 sm:ml-4  ">
          View Gallery
        </button>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover flex-shrink-0"
              alt="hospital"
            />
          ))}
        </div>
      </div>

    </section>
  );
}