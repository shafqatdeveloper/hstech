import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#24242e] text-[#fff] px-4 md:px-8 lg:px-16 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* contact us  */}
        <div>
          <div className=" w-max">
            <p className=" uppercase font-semibold ">get in touch</p>
            <p className="bg-violet h-1 w-1/2 mt-[2px] rounded-xl"></p>
          </div>
          <div className=" w-max mt-3">
            <p className="capitalize">contact us!</p>
            <input
              type="email"
              className="bg-[#fff] px-3 py-2 text-gray-700 border border-[#fff] focus:border-purple-500 rounded-md outline-none mt-3"
              placeholder="mail@example.com"
            />
            <button className="uppercase bg-darkSky hover:bg-violet transition duration-200 cursor-pointer p-2 rounded-md ml-1">
              send
            </button>
          </div>
        </div>

        {/* follow us  */}
        <div>
          <div className=" w-max">
            <p className=" uppercase font-semibold ">follow us</p>
            <p className="bg-violet h-1 w-1/2 mt-[2px] rounded-xl"></p>
          </div>
          <div className="flex items-center text-gray  mt-3 gap-2">
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-900 transition-all duration-200 hover:text-white rounded-full"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-400 transition-all duration-200 hover:text-white rounded-full"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-900 transition-all duration-200 hover:text-white rounded-full"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-red-500 transition-all duration-200 hover:text-white rounded-full"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-green-700 transition-all duration-200 hover:text-white rounded-full"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* contact email  */}
        <div className="border-t border-t-gray-400 lg:border-t-transparent py-5 lg:py-0 flex gap-3 ">
          <div>Email:</div>
          <div className="flex flex-col text-gray-300">
            <Link to={"mailto:business@hstechnologies.pk"}>
              business@hstechnologies.pk
            </Link>
            <Link to={"mailto:ayazih485@gmail.com"}>ayazih485@gmail.com</Link>
          </div>
        </div>
      </div>

      <div className="w-full uppercase flex gap-2 justify-center mt-10 text-xs">
        <p className="">copyright &copy; 2025</p>
        <Link to={"/"} className="text-violet">
          HSTechnologies
        </Link>
      </div>
    </div>
  );
};

export default Footer;
