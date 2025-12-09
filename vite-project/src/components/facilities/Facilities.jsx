import facility1 from "../../assets/images/facility.jpg";
import facility2 from "../../assets/images/facility2.jpg";

const Facilities = () => {
  return (
    <div className="mt-24 px-6 sm:px-10 lg:px-16">
      <h3 className="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold italic mb-20 lg:mb-36">
        Our Facilities
      </h3>

      <div className="
        flex flex-col lg:flex-row 
        gap-12 lg:gap-16
      ">

        {/* Left Section */}
        <div className="flex flex-col gap-8 lg:gap-11">
          <div>
            <h6 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-7">
              Clinical facilities are the backbone of <br className="hidden lg:block" /> 
              modern healthcare systems
            </h6>
          </div>

          <div>
            <p className="text-start text-[#5C5C5C] 
              w-full lg:w-[42vw]
            ">
              Providing essential resources for the diagnosis, treatment, and management
              of various medical conditions. These facilities encompass a wide range of
              settings, from hospitals and clinics to diagnostic laboratories and
              rehabilitation centers. In this article, we will explore the vital role that
              clinical facilities play in delivering high-quality healthcare and improving
              patient outcomes.
            </p>
          </div>

          <div>
            <button className="px-8 py-4 sm:px-10 sm:py-5 rounded-[10px] cursor-pointer bg-[#174EB2] text-white">
              Find Out More
            </button>
          </div>
        </div>

        {/* Right Section Images */}
        <div className="relative flex justify-center lg:block">
          <img
            className="
              w-[280px] h-[250px] sm:w-[320px] sm:h-[300px] 
              lg:w-[365px] lg:h-[349px] 
              object-cover rounded-[20px]
            "
            src={facility1}
            alt="facility1"
          />

          <img
            className="
              w-[260px] h-[230px] sm:w-[300px] sm:h-[270px] 
              lg:w-[365px] lg:h-[349px] 
              object-cover rounded-[20px]
              
              absolute 
              right-[-40px] bottom-[20px] 
              sm:right-[-60px] sm:bottom-[40px]
              lg:right-[-160px] lg:bottom-[120px]

              -z-10
            "
            src={facility2}
            alt="facility2"
          />
        </div>

      </div>
    </div>
  );
};

export default Facilities;
