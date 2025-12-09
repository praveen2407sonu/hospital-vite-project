import ellipse from "../../assets/images/andrew.png";

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-between px-20 py-16 bg-[rgba(62,161,255,0.04)] 
                    box-border max-lg:flex-col max-lg:text-center max-lg:px-6 max-lg:py-10">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center gap-4 max-w-[50%] max-lg:max-w-full max-lg:items-center">

        <h2 className="text-[52px] font-bold leading-tight max-md:text-[40px]">
          Every good thing <br /> starts with good <br /> health
        </h2>

        <p className="text-[18px] font-medium text-[#5C5C5C] max-w-[440px] max-lg:text-center">
          We are here to serve people with patient centered-care to deliver
          outstanding healthcare for better lives.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-5 max-lg:justify-center max-lg:flex-wrap">

          {/* Primary Button */}
          <button className="px-10 py-4 bg-[#174EB2] text-white rounded-lg text-[16px] 
                             hover:bg-[#0F3D94] transition">
            Request appointment
          </button>

          {/* Secondary Button */}
          <button className="px-10 py-4 bg-white text-[#174EB2] rounded-lg text-[16px] 
                             border border-[#174EB2] hover:bg-[#174EB2] hover:text-white transition">
            Learn More
          </button>

        </div>
      </div>

      {/* RIGHT GRAPHIC SECTION */}
      <div className="relative w-[500px] h-[500px] max-lg:w-[350px] max-lg:h-[350px] mt-6">

        {/* BACK ELLIPSE */}
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-[380px] top-[60px] left-[40px]
                     max-lg:w-[260px] max-lg:top-[60px] max-lg:left-[-40px]"
        />

        {/* DOCTOR IMAGE (SECOND IMAGE) */}
        <img
          src={ellipse}
          alt="doctor"
          className="absolute w-[420px] top-[-10px] left-[120px]
                     max-lg:w-[420px] max-lg:top-[40px] max-lg:left-[-130px]"
        />
      </div>
    </div>
  );
};

export default Banner;
