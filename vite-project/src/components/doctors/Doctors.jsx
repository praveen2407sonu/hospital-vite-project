import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Pagination हटा दिया
import "swiper/css";
import "swiper/css/navigation";

import doctors from "../../assets/doctors";

const Doctors = () => {
  return (
    <div className="relative text-center px-5 py-14 mb-10 overflow-hidden">

      {/* Background Spheres */}
      <div className="absolute left-10 top-5 w-40 h-40 bg-blue-200 rounded-full opacity-40 blur-2xl -z-10"></div>
      <div className="absolute right-10 top-40 w-48 h-48 bg-blue-300 rounded-full opacity-40 blur-2xl -z-10"></div>

      {/* Heading */}
      <h3 className="text-3xl font-bold italic mb-4">Our Doctors</h3>

      <p className="text-gray-600 leading-relaxed mb-12">
        Teamwork and effective communication among Doctor members is critical to <br />
        providing high-quality patient care and ensuring positive health outcomes.
      </p>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation]}       // Pagination module हटा दिया
          navigation={true}           // Arrow navigation enabled
          loop={true}                 // Continuous loop
          spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {doctors.concat(doctors).map((doc, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-3 cursor-pointer transform transition-transform hover:scale-105">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
                <div className="text-left mt-1">
                  <h6 className="text-lg font-bold">{doc.name}</h6>
                  <p className="text-gray-600 text-sm">{doc.department}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <button className="mt-10 px-10 py-4 bg-blue-700 text-white rounded-xl border border-blue-900 hover:bg-blue-900 transition-all">
        Explore More
      </button>
    </div>
  );
};

export default Doctors;
