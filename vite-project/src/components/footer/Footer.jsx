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
                    <p className="text-sm leading-6">
                        We are a medical clinic,
                        <br />
                        helping you for a better life.
                    </p>
                </div>

                {/* Medic Section */}
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="uppercase font-bold text-[16px]">Medic</li>
                        <li className="text-[14px] font-light cursor-pointer">Home</li>
                        <li className="text-[14px] font-light cursor-pointer">Medical Care</li>
                        <li className="text-[14px] font-light cursor-pointer">Medical Health</li>
                        <li className="text-[14px] font-light cursor-pointer">Medical Test</li>
                        <li className="text-[14px] font-light cursor-pointer">Medical Lab</li>
                    </ul>
                </div>

                {/* About Section */}
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="uppercase font-bold text-[16px]">About</li>
                        <li className="text-[14px] font-light cursor-pointer">Medic</li>
                        <li className="text-[14px] font-light cursor-pointer">Vision & Mission</li>
                        <li className="text-[14px] font-light cursor-pointer">Careers</li>
                        <li className="text-[14px] font-light cursor-pointer">Support</li>
                        <li className="text-[14px] font-light cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Our Specialities Section */}
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="uppercase font-bold text-[16px]">Our Specialities</li>
                        <li className="text-[14px] font-light cursor-pointer">Internal Medicine</li>
                        <li className="text-[14px] font-light cursor-pointer">Gynaecology</li>
                        <li className="text-[14px] font-light cursor-pointer">Neurosurgery</li>
                        <li className="text-[14px] font-light cursor-pointer">Plastic Surgery</li>
                        <li className="text-[14px] font-light cursor-pointer">Urology</li>
                        <li className="text-[14px] font-light cursor-pointer">ENT</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="uppercase font-bold text-[16px]">Social Media</li>
                        <li className="text-[14px] font-light cursor-pointer">Twitter / X</li>
                        <li className="text-[14px] font-light cursor-pointer">Facebook</li>
                        <li className="text-[14px] font-light cursor-pointer">Instagram</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="uppercase font-bold text-[16px]">Contact</li>
                        <li className="text-[14px] font-light cursor-pointer">Mahaveer Nagar S16A, S17, Tonk Rd, Gopal Pura Mode,<br /> Jaipur, Rajasthan 302018</li>
                        <li className="text-[14px] font-light cursor-pointer">+0141-2551500</li>
                        <li className="text-[14px] font-light cursor-pointer">jaipur.hospital@gmail.com</li>
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
                    font-light
                "
            >
                <p className="cursor-pointer">&copy; Medic 2028</p>
                <p className="cursor-pointer">Legal Policies</p>
                <p className="cursor-pointer">Sitemap</p>
                <p className="cursor-pointer">Cookies</p>
            </div>
        </>
    );
};

export default Footer;
