import React from "react";
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
  // Images with text for each slide
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
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
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

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 text-white">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-sm sm:text-lg max-w-md">
                    {slide.description}
                  </p>
                  <button className="bg-blue-700 hover:bg-blue-800 transition text-white py-2 px-6 rounded-md">
                    Book Appointment
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderSlider;
