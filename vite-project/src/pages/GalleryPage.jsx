import React from "react";

// Temporary images (baad me aap local images replace kar sakte ho)
import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.webp";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.webp";

const images = [img1, img2, img3, img4, img5, img6];

const GalleryPage = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE HEADING */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Hospital Gallery
        </h1>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt="Hospital Gallery"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
