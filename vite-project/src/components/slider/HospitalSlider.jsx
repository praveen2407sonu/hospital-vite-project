import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

// Local images
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jfif";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";
import slider5 from "../../assets/images/slider5.webp";
import slider6 from "../../assets/images/slider6.jpg";

const HeaderSlider = () => {
  const [openModal, setOpenModal] = useState(false);

  const slides = [
    {
      image: slider1,
      title: "Advanced Healthcare for Everyone",
      description: "We provide world-class medical care with a compassionate approach."
    },
    {
      image: slider2,
      title: "Your Health, Our Commitment",
      description: "Our team of experts is dedicated to your well-being."
    },
    {
      image: slider3,
      title: "Trusted Specialists at Your Service",
      description: "We ensure the highest standard of care for all patients."
    },
    {
      image: slider4,
      title: "Comprehensive Medical Solutions",
      description: "From diagnostics to treatment, we cover all your healthcare needs."
    },
    {
      image: slider5,
      title: "Patient-Centered Care Always",
      description: "We prioritize your comfort and safety in every step."
    },
    {
      image: slider6,
      title: "Innovative Healthcare Facilities",
      description: "Modern equipment and skilled staff for best treatment outcomes."
    },
  ];

  return (
    <div className="w-full">
      {/* SLIDER */}
      <div className="w-full h-[350px] sm:h-[500px] lg:h-[650px] relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full rounded-xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center 
                  items-center sm:items-start px-4 sm:px-10 lg:px-24 text-white text-center sm:text-left">

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-3 drop-shadow-lg">
                    {slide.title}
                  </h2>

                  <p className="mb-6 text-sm sm:text-lg lg:text-xl max-w-md drop-shadow-lg">
                    {slide.description}
                  </p>

                  {/* Book Appointment Button */}
                  <button
                    onClick={() => setOpenModal(true)}
                    className="bg-blue-700 hover:bg-blue-800 transition text-white py-2 px-6 rounded-md text-sm sm:text-base"
                  >
                    Book Appointment
                  </button>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* APPOINTMENT POPUP MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-xl p-6 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
              Book Appointment
            </h2>

            <form className="grid grid-cols-1 gap-4">

              {/* FIRST NAME */}
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded-md w-full"
              />

              {/* LAST NAME */}
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded-md w-full"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 rounded-md w-full"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 rounded-md w-full"
              />

              {/* SELECT DEPARTMENT */}
              <select className="border p-2 rounded-md w-full">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>General Surgery</option>
                <option>ENT</option>
              </select>

              {/* MESSAGE */}
              <textarea
                rows="3"
                placeholder="Your Message"
                className="border p-2 rounded-md w-full"
              ></textarea>

              {/* BUTTONS */}
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => setOpenModal(false)}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default HeaderSlider;
