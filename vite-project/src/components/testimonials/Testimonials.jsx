import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";

const Testimonials = () => {
  const feedbacks = [
    {
      img: "https://i.pravatar.cc/150?img=32",
      name: "Rohit Kumar, 42",
      rating: 5,
      message:
        "The doctors were extremely caring and the treatment was very effective. One of the best hospital experiences I've had.",
    },
    {
      img: "https://i.pravatar.cc/150?img=47",
      name: "Priya Sharma, 29",
      rating: 5,
      message:
        "Great service! Quick response and excellent emergency care. Highly recommended for quality medical support.",
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      name: "Amit Verma, 36",
      rating: 4,
      message:
        "The staff was friendly and supportive. Doctors explained everything clearly. Overall wonderful experience.",
    },
    {
      img: "https://i.pravatar.cc/150?img=55",
      name: "Sanjay Saini, 50",
      rating: 5,
      message:
        "Emergency care was quick and professional. Hospital staff handled everything smoothly.",
    },
    {
      img: "https://i.pravatar.cc/150?img=60",
      name: "Neha Joshi, 32",
      rating: 5,
      message:
        "Best doctors! They treated my health issue with full care and guidance. Highly satisfied.",
    },
    {
      img: "https://i.pravatar.cc/150?img=22",
      name: "Deepak Kumar, 40",
      rating: 4,
      message:
        "Very clean hospital, great facilities and expert doctors. Highly recommended.",
    },
    {
      img: "https://i.pravatar.cc/150?img=13",
      name: "Komal Verma, 25",
      rating: 5,
      message:
        "The treatment was excellent, and staff was very polite. Thank you for wonderful support.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
        What Our Patients Say
      </h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center text-center h-[380px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-100 shadow object-cover"
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                {/* Stars */}
                <div className="flex justify-center mt-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                  {Array.from({ length: 5 - item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gray-300 text-xl" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mt-4 leading-relaxed px-2">
                  "{item.message}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
