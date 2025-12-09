const Testimonials = () => {
  return (
    <div className="mt-20 bg-[rgba(62,161,255,0.04)] px-6 sm:px-10 lg:px-16 py-10">
      <h3 className="text-center text-[30px] sm:text-[34px] lg:text-[38px] font-bold mb-14">
        What people say
      </h3>

      <div
        className="
          flex flex-col md:flex-row 
          justify-center md:justify-evenly 
          gap-10 md:gap-0
        "
      >
        {/* Card 1 */}
        <div
          className="
            flex flex-col justify-center items-center
            bg-white w-[300px] sm:w-[330px] lg:w-[350px] 
            h-[390px] sm:h-[410px] lg:h-[426px]
            rounded-[10px] shadow-[0px_0px_2px_rgba(0,0,0,0.1)]
            gap-5 mx-auto
          "
        >
          <div>
            <img
              src="https://i.pravatar.cc/300"
              alt="avatar"
              className="w-[100px] sm:w-[110px] lg:w-[121px] rounded-full cursor-pointer"
            />
          </div>

          <div className="flex flex-col text-center gap-3">
            <h6 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold">
              Andrea Andy, 35
            </h6>
            <p className="text-[13px] sm:text-[14px] text-[#5C5C5C] px-4">
              "I had a great experience at this clinic. The doctors were
              knowledgeable and caring."
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="
            flex flex-col justify-center items-center
            bg-white w-[300px] sm:w-[330px] lg:w-[350px] 
            h-[390px] sm:h-[410px] lg:h-[426px]
            rounded-[10px] shadow-[0px_0px_2px_rgba(0,0,0,0.1)]
            gap-5 mx-auto
          "
        >
          <div>
            <img
              src="https://i.pravatar.cc/500"
              alt="avatar"
              className="w-[100px] sm:w-[110px] lg:w-[121px] rounded-full cursor-pointer"
            />
          </div>

          <div className="flex flex-col text-center gap-3">
            <h6 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold">
              Ricky Reynold, 27
            </h6>
            <p className="text-[13px] sm:text-[14px] text-[#5C5C5C] px-4">
              "The clinic provided a comfortable and welcoming atmosphere."
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="
            flex flex-col justify-center items-center
            bg-white w-[300px] sm:w-[330px] lg:w-[350px] 
            h-[390px] sm:h-[410px] lg:h-[426px]
            rounded-[10px] shadow-[0px_0px_2px_rgba(0,0,0,0.1)]
            gap-5 mx-auto
          "
        >
          <div>
            <img
              src="https://i.pravatar.cc/400"
              alt="avatar"
              className="w-[100px] sm:w-[110px] lg:w-[121px] rounded-full cursor-pointer"
            />
          </div>

          <div className="flex flex-col text-center gap-3">
            <h6 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold">
              Grelish David, 30
            </h6>
            <p className="text-[13px] sm:text-[14px] text-[#5C5C5C] px-4">
              "The treatments I received at this clinic were effective."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
