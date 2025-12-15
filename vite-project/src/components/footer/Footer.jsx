import { FaHospital } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* MAIN FOOTER SECTION */}
      <div
        className="
          bg-[#6a7c9e] text-white 
          px-6 md:px-12 lg:px-16 
          py-10 
          flex flex-col md:flex-row 
          justify-between 
          gap-10
        "
      >
        {/* LOGO + TEXT */}
        <div className="flex flex-col gap-3 max-w-[220px]">
          <FaHospital className="text-[70px] text-white" />
          <p className="text-sm leading-6 font-medium">
            We are a medical clinic,
            <br />
            helping you for a better life.
          </p>
        </div>

        {/* Medic Section */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="uppercase font-bold text-[16px]">Medic</li>
            {[
              "Home",
              "Medical Care",
              "Medical Health",
              "Medical Test",
              "Medical Lab",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="uppercase font-bold text-[16px]">About</li>
            {[
              "Medic",
              "Vision & Mission",
              "Careers",
              "Support",
              "FAQ",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Specialities Section */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="uppercase font-bold text-[16px]">
              Our Specialities
            </li>
            {[
              "Internal Medicine",
              "Gynaecology",
              "Neurosurgery",
              "Plastic Surgery",
              "Urology",
              "ENT",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="uppercase font-bold text-[16px]">Social Media</li>
            {["Twitter / X", "Facebook", "Instagram"].map((item, i) => (
              <li
                key={i}
                className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="uppercase font-bold text-[16px]">Contact</li>
            <li className="text-[14px] font-medium">
              Mahaveer Nagar S16A, S17, Tonk Rd, Gopal Pura Mode,
              <br /> Jaipur, Rajasthan 302018
            </li>
            <li className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105">
              +0141-2551500
            </li>
            <li className="text-[14px] font-medium cursor-pointer inline-block
                           transition-all duration-300
                           hover:underline hover:scale-105">
              jaipur.hospital@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          bg-[#2b4468] 
          text-white 
          h-[50px] 
          flex 
          justify-around 
          items-center 
          text-[12px] 
          font-medium
        "
      >
        {["© Medic 2028", "Legal Policies", "Sitemap"].map((item, i) => (
          <p
            key={i}
            className="cursor-pointer inline-block
                       transition-all duration-300
                       hover:underline hover:scale-105"
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default Footer;
