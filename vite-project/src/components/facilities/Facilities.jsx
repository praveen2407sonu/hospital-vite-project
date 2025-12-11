import facility1 from "../../assets/images/facility.jpg";
import facility2 from "../../assets/images/facility2.jpg";

const Facilities = () => {
  return (
    <div className="mt-[5px] px-4 sm:px-8 md:px-12 lg:px-16">

      {/* Heading */}
      <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-12 sm:mb-16 lg:mb-20">
        Our Facilities
      </h3>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:w-1/2 text-center lg:text-left">

          {/* Title */}
          <h6 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug sm:leading-relaxed">
            Clinical facilities are the backbone of <br className="hidden lg:block" />
            modern healthcare systems
          </h6>

          {/* Description */}
          <p className="text-[#5C5C5C] text-base sm:text-lg lg:text-lg leading-relaxed mt-2">
            Providing essential resources for the diagnosis, treatment, and management
            of various medical conditions. These facilities encompass a wide range of
            settings, from hospitals and clinics to diagnostic laboratories and
            rehabilitation centers. In this article, we will explore the vital role that
            clinical facilities play in delivering high-quality healthcare and improving
            patient outcomes.
          </p>

          {/* Button */}
          <button className="mt-4 px-6 sm:px-10 py-3 sm:py-4 bg-[#174EB2] text-white rounded-[10px] w-full sm:w-auto mx-auto lg:mx-0">
            Find Out More
          </button>

        </div>

        {/* RIGHT SECTION IMAGES */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">

          {/* Main Image */}
          <img
            src={facility1}
            alt="facility1"
            className="w-3/4 sm:w-2/3 lg:w-[365px] h-auto rounded-[20px]"
          />

          {/* Overlapping Image */}
          <img
            src={facility2}
            alt="facility2"
            className="
              w-2/3 sm:w-1/2 lg:w-[320px] h-auto rounded-[20px]
              absolute 
              -right-6 sm:-right-10 lg:-right-16
              -bottom-6 sm:-bottom-10 lg:-bottom-8
              z-[-1]
            "
          />

        </div>

      </div>
    </div>
  );
};

export default Facilities;
