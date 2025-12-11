import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
      <h3 className="text-3xl font-bold italic mb-4 max-sm:text-2xl">
        Our Doctors
      </h3>

      <p className="text-gray-600 leading-relaxed mb-12 max-sm:text-sm max-sm:px-2">
        Teamwork and effective communication among Doctor members is critical to <br className="max-sm:hidden" />
        providing high-quality patient care and ensuring positive health outcomes.
      </p>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto relative px-2">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {doctors.concat(doctors).map((doc, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-3 cursor-pointer">

                {/* Image */}
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-[260px] sm:h-[280px] md:h-[300px] 
                             object-cover rounded-xl"
                />

                {/* TEXT SECTION */}
                <div className="mt-2 text-left px-1">
                  <h6 className="text-lg font-bold max-sm:text-base">
                    {doc.name}
                  </h6>
                  <p className="text-gray-600 text-sm max-sm:text-xs">
                    {doc.department}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <button className="mt-10 px-10 py-4 bg-[#34476c] text-white rounded-lg text-[16px]  border-blue-800  hover:bg-[#0F3D94] transition-all max-sm:px-7 max-sm:py-3">
        Explore More
      </button>
    </div>
  );
};

export default Doctors;
