import { useState, useEffect } from "react";

// Importing images
import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.webp";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery6.webp";
import img6 from "../../assets/images/gallery5.jpg";
import img7 from "../../assets/images/gallery4.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery-section" className="w-full py-12 bg-gray-50">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
          Gallery of Hospital
        </h2>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-red-600 transition w-auto sm:w-40">
          View Gallery
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Inner Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${
              current *
              (100 /
                (window.innerWidth < 640
                  ? 1      // Mobile: 1 image
                  : window.innerWidth < 1024
                  ? 2      // Tablet: 2 images
                  : 3))    // Desktop: 3 images
            }%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
