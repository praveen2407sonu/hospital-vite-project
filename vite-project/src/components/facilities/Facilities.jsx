import facility1 from "../../assets/images/facility.jpg";
import facility2 from "../../assets/images/facility2.jpg";

const Facilities = () => {
  return (
    <div className="mt-2 px-4 sm:px-8 md:px-12 lg:px-16">

      {/* Heading */}
      <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-14">
        Our Facilities
      </h3>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:w-1/2 text-center lg:text-left">

          <h6 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug sm:leading-relaxed">
            Clinical facilities are the backbone of <br className="hidden lg:block" />
            modern healthcare systems
          </h6>

          <p className="text-[#5C5C5C] text-base sm:text-lg lg:text-lg leading-relaxed mt-2">
            Providing essential resources for the diagnosis, treatment, and management
            of various medical conditions. These facilities encompass a wide range of
            settings—hospitals, clinics, diagnostic labs, and rehabilitation centers.
            Here’s how these facilities help improve patient outcomes.
          </p>

          <button className="mt-4 px-6 py-3 bg-[#174EB2] text-white text-[15px] rounded-lg w-fit mx-auto lg:mx-0 hover:bg-[#0f3c8e] transition">
            Find Out More
          </button>
        </div>

        {/* RIGHT SECTION IMAGES */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">

          {/* Main Image */}
          <img
            src={facility1}
            alt="facility1"
            className="
              w-[78%] sm:w-[65%] lg:w-[420px]
              h-auto rounded-[22px] shadow-md
              transition-all duration-300
            "
          />

          {/* Overlapping Image */}
          <img
            src={facility2}
            alt="facility2"
            className="
              absolute
              w-[60%] sm:w-[48%] lg:w-[360px]
              h-auto rounded-[22px] shadow-lg
              left-8 sm:left-12 lg:left-10
              bottom-[-42px] sm:bottom-[-50px] lg:bottom-[-40px]
              transition-all duration-300
              z-[-1]
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Facilities;
