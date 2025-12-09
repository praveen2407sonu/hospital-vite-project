import services from "../../assets/services";

const Services = () => {
  return (
    <div className="bg-blue-50/30 px-6 py-14">

      <h3 className="text-center text-3xl font-semibold mb-10">
        Our Services
      </h3>

      <div className="flex flex-wrap justify-center gap-6">

        {services.map((item, index) => (
          <div
            key={index}
            className="relative group bg-white w-[240px] p-5 rounded-xl shadow-md flex flex-col 
                       items-center text-center overflow-hidden cursor-pointer
                       transition-transform duration-300 hover:scale-105"
          >

            {/* BLUE SLIDE OVERLAY */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-blue-600 text-white 
                         px-5 py-6 flex flex-col justify-center z-20
                         -translate-x-full opacity-0
                         group-hover:translate-x-0 
                         group-hover:opacity-100
                         transition-all duration-500 ease-in-out"
            >
              <h4 className="text-xl font-semibold mb-2">Hospital Care</h4>
              <p className="text-sm leading-relaxed">
                We provide expert doctors and advanced medical services for patients.
              </p>
            </div>

            {/* MAIN CONTENT (Icon, Title, Body) */}
            <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
              {/* Icon */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h5 className="text-xl font-semibold mb-2">{item.name}</h5>

              {/* Body */}
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
