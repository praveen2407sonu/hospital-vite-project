import ellipse from "../../assets/images/andrew.png";

const Banner = () => {
  return (
    <div
      className="w-full flex items-center justify-between px-20 py-16 
                 bg-[rgba(62,161,255,0.04)] box-border
                 max-xl:px-12 max-lg:flex-col max-lg:px-6 max-md:px-4"
    >

      {/* LEFT CONTENT */}
      <div
        className="flex flex-col justify-center gap-4 
                   max-w-[50%] 
                   max-lg:max-w-full max-lg:items-center max-lg:text-center"
      >
        <h2
          className="text-[52px] font-bold leading-tight
                     max-xl:text-[46px]
                     max-lg:text-[38px]
                     max-md:text-[32px]
                     max-sm:text-[28px]"
        >
          Every good thing <br /> starts with good <br /> health
        </h2>

        <p
          className="text-[18px] font-medium text-[#5C5C5C]
                     max-w-[440px] max-lg:max-w-full
                     max-lg:text-center
                     max-md:text-[16px]"
        >
          We are here to serve people with patient centered-care to deliver
          outstanding healthcare for better lives.
        </p>

        {/* BUTTON GROUP */}
        {/* BUTTON GROUP */}
<div
  className="
    flex gap-6 mt-5
    max-md:flex-col max-md:gap-4 max-md:w-full max-md:items-center
  "
>
  {/* Primary Button */}
  <button
    className="px-10 py-4 bg-[#34476c] text-white rounded-lg text-[16px]
               hover:bg-[#0F3D94] transition
               max-md:w-full"
  >
    Request appointment
  </button>

  {/* Secondary Button */}
  <button
    className="px-10 py-4 bg-white text-[#174EB2] rounded-lg text-[16px]
               border border-[#174EB2]
               hover:bg-[#174EB2] hover:text-white transition
               max-md:w-full"
  >
    Learn More
  </button>
</div>
</div>

      {/* RIGHT IMAGE AREA */}
      <div
        className="relative w-[500px] h-[500px]
                   max-xl:w-[420px] max-xl:h-[420px]
                   max-lg:w-[360px] max-lg:h-[360px]
                   max-md:w-[300px] max-md:h-[300px]
                   max-sm:w-[260px] max-sm:h-[260px]
                   mt-6 max-lg:mt-10 flex justify-center"
      >
        {/* BACK ELLIPSE */}
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-[380px] top-[60px] left-[40px]
                     max-xl:w-[320px] max-xl:left-[20px]
                     max-lg:w-[260px] max-lg:left-[0px]
                     max-md:w-[220px] max-sm:w-[180px]"
        />

        {/* DOCTOR IMAGE */}
        <img
          src={ellipse}
          alt="doctor"
          className="absolute w-[420px] top-[-10px] left-[120px]
                     max-xl:w-[350px] max-xl:left-[80px]
                     max-lg:w-[300px] max-lg:left-[20px]
                     max-md:w-[260px] max-md:left-[10px]
                     max-sm:w-[220px] max-sm:left-[0px]"
        />
      </div>
    </div>
  );
};

export default Banner;
