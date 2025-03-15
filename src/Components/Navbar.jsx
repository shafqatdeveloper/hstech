import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMenu3Fill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import MainLogo from '../assets/MainLogo.png'

const Navbar = () => {
  const location = useLocation();
  const [isWebServicesHovered, setIsWebServicesHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div className="">
      {/* Contact Header */}
      <div className="px-2 sm:px-4 md:px-8 lg:px-16 border-b border-b-gray-300">
        <section className="flex text-sm items-center md:justify-between justify-center">
          <div className="lg:flex items-center hidden gap-3 text-gray">
            <Link
              className="flex items-center gap-0.5"
              to={"mailto:business@hstechnologies.pk"}
            >
              <IoMailOutline size={13} />
              business@hstechnologies.pk
            </Link>
            <h1>|</h1>
            <Link className="flex items-center gap-0.5" to={"tel:+92300029335"}>
              <MdOutlinePhoneIphone size={15} />
              +92300 0293355
            </Link>
          </div>
          <div className="flex items-center text-gray w-full lg:w-auto justify-center lg:justify-end ">
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-900 transition-all duration-200 hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-400 transition-all duration-200 hover:text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-sky-900 transition-all duration-200 hover:text-white"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-red-500 transition-all duration-200 hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="p-2 border border-gray-200 hover:bg-green-700 transition-all duration-200 hover:text-white"
            >
              <FaWhatsapp />
            </Link>
            <Link
              className=" bg-darkSky hover:bg-violet px-3 py-1.5 text-white transition-all duration-200 font-light"
              to={"/hire-us"}
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </div>
      {/* Desktop Navlinks */}
      <div className="px-16 hidden md:flex z-40 items-center justify-between">
        <Link to={'/'} className="py-2">
          <img src={MainLogo} alt="HS Logo" className="w-2/5" />
        </Link>
        <section className="py-4 flex items-center gap-7">
          {/* Home Link */}
          <Link
            className={`hover:text-darkSky hover:border-b-[1.5px] hover:border-b-darkSky ${
              location.pathname === "/"
                ? "text-darkSky border-b-[1.5px] border-b-darkSky"
                : "border-b-[1.5px] border-b-transparent"
            } pb-2`}
            to={"/"}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            onMouseEnter={() => setIsWebServicesHovered(true)}
            onMouseLeave={() => setIsWebServicesHovered(false)}
            className="flex items-center relative"
          >
            <Link
              className={`hover:text-darkSky hover:border-b-[1.5px] z-40 hover:border-b-darkSky transition-all duration-300 ease-in-out ${
                location.pathname === "/services"
                  ? "text-darkSky border-b-[1.5px] border-b-darkSky"
                  : "border-b-[1.5px] border-b-transparent"
              } pb-2`}
              to={"/services"}
            >
              Services
            </Link>
            <div
              className={`absolute bg-white z-50 shadow-sm left-0 top-10 w-max text-gray-500 flex flex-col text-sm transition-all duration-300 ease-in-out transform ${
                isWebServicesHovered
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
              }`}
              style={{ top: "100%", left: 0 }}
            >
              <Link
                to={"/services/web"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/services/web"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Web Development
              </Link>
              <Link
                to={"/services/andriod-development"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/services/andriod-development"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Android Apps
              </Link>
              <Link
                to={"/services/ios-development"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/services/ios-development"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                IOS Apps
              </Link>
              <Link
                to={"/services/graphic-design"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/services/graphic-design"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Graphic Designing
              </Link>
              <Link
                to={"/services/sqa"}
                className={`px-3 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/services/sqa"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                SQA
              </Link>
            </div>
          </div>

          {/* Portfolio Dropdown */}
          <div
            onMouseEnter={() => setIsPortfolioHovered(true)}
            onMouseLeave={() => setIsPortfolioHovered(false)}
            className="flex items-center relative"
          >
            <Link
              className={`hover:text-darkSky hover:border-b-[1.5px] hover:border-b-darkSky transition-all duration-300 ease-in-out ${
                location.pathname === "/portfolio"
                  ? "text-darkSky border-b-[1.5px] border-b-darkSky"
                  : "border-b-[1.5px] border-b-transparent"
              } pb-2`}
              to={"/portfolio"}
            >
              Portfolio
            </Link>
            <div
              className={`absolute bg-white z-40 shadow-sm left-0 top-10 w-max text-gray-500 flex flex-col text-sm transition-all duration-300 ease-in-out transform ${
                isPortfolioHovered
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
              }`}
              style={{ top: "100%", left: 0 }}
            >
              <Link
                to={"/portfolio"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/portfolio"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Portfolio
              </Link>
              <Link
                to={"/testimonials"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/testimonials"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* Team Link */}
          <Link
            className={`hover:text-darkSky hover:border-b-[1.5px] hover:border-b-darkSky ${
              location.pathname === "/team"
                ? "text-darkSky border-b-[1.5px] border-b-darkSky"
                : "border-b-[1.5px] border-b-transparent"
            } pb-2`}
            to={"/team"}
          >
            Team
          </Link>

          <div
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
            className="flex items-center relative"
          >
            <Link
              className={`hover:text-darkSky hover:border-b-[1.5px] hover:border-b-darkSky transition-all duration-300 ease-in-out ${
                location.pathname === "/contact"
                  ? "text-darkSky border-b-[1.5px] border-b-darkSky"
                  : "border-b-[1.5px] border-b-transparent"
              } pb-2`}
              to={"/portfolio"}
            >
              Contact
            </Link>
            <div
              className={`absolute bg-white z-40 shadow-sm left-0 top-10 w-max text-gray-500 flex flex-col text-sm transition-all duration-300 ease-in-out transform ${
                isContactHovered
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
              }`}
              style={{ top: "100%", left: 0 }}
            >
              <Link
                to={"/contact"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/contact"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Contact
              </Link>
              <Link
                to={"/hire-us"}
                className={`px-3 border-b border-b-gray-200 py-3.5 hover:text-darkSky hover:border-b-[1.5px] hover:bg-gray-100 hover:border-b-darkSky transition-colors duration-200 ${
                  location.pathname === "/hire-us"
                    ? "text-darkSky border-b-[1.5px] border-b-darkSky bg-gray-100"
                    : "border-b-[1.5px] border-b-transparent"
                }`}
              >
                Hire Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* Mobile Navbar */}
      <div className="flex relative items-center md:hidden px-3 justify-between py-3">
      <Link to={'/'} className="">
          <img src={MainLogo} alt="HS Logo" className="w-2/4" />
        </Link>
        <button
          onClick={() => setNavOpened(!navOpened)}
          className={`${
            navOpened
              ? "bg-darkSky transition-all duration-150 text-white border-[1.5px] border-darkSky py-1 px-2"
              : "border-darkSky text-darkSky border-[1.5px] py-1 px-2 transition-all duration-150"
          }`}
        >
          <RiMenu3Fill size={25} />
        </button>
        <div
  className={`${
    navOpened
      ? "left-0 z-50 top-[99px] w-full bg-white shadow-md absolute transition-all duration-200"
      : "top-[99px] z-50 left-[-100%] w-full bg-white shadow-md absolute transition-all duration-200"
  }`}
>
  {/* Mobile Links */}
  <div className="flex flex-col p-4">
    <Link
      to={"/"}
      onClick={()=>setNavOpened(false)}
      className={`py-3 px-2 hover:bg-gray-100 transition-colors duration-200  ${
        location.pathname === "/"
          ? "text-darkSky font-semibold"
          : "text-gray-700"
      }`}
    >
      Home
    </Link>

    {/* Services Dropdown */}
    <div className="flex flex-col">
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className={`py-3 px-2 hover:bg-gray-100 transition-colors duration-200  flex items-center justify-between ${
          location.pathname.startsWith("/services")
            ? "text-darkSky font-semibold"
            : "text-gray-700"
        }`}
      >
        <span>Services</span>
        {isServicesOpen ? (
          <RiArrowUpSLine size={18} />
        ) : (
          <RiArrowDownSLine size={18} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 grid grid-cols-1 ${
          isServicesOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <Link
          to={"/services/web"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 border-b pl-6 pr-2 hover:bg-gray-100  transition-colors duration-200 border-b-gray-200 text-sm  ${
            location.pathname === "/services/web"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Web Development
        </Link>
        <Link
          to={"/services/andriod-development"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 border-b pl-6 pr-2 hover:bg-gray-100  transition-colors duration-200 border-b-gray-200 text-sm  ${
            location.pathname === "/services/andriod-development"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Android Apps
        </Link>
        <Link
          to={"/services/ios-development"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 border-b pl-6 pr-2 hover:bg-gray-100  transition-colors duration-200 border-b-gray-200 text-sm  ${
            location.pathname === "/services/ios-development"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          IOS Apps
        </Link>
        <Link
          to={"/services/graphic-design"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 border-b pl-6 pr-2 hover:bg-gray-100 transition-colors  duration-200 border-b-gray-200 text-sm  ${
            location.pathname === "/services/graphic-design"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Graphic Designing
        </Link>
        <Link
          to={"/services/sqa"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 border-b pl-6 pr-2 hover:bg-gray-100 transition-colors  duration-200 border-b-gray-200 text-sm  ${
            location.pathname === "/services/sqa"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          SQA
        </Link>
      </div>
    </div>

    {/* Portfolio Dropdown */}
    <div className="flex flex-col">
      <button
        onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
        className={`py-3 px-2 hover:bg-gray-100 transition-colors  duration-200 flex items-center justify-between ${
          location.pathname.startsWith("/portfolio")
            ? "text-darkSky font-semibold"
            : "text-gray-700"
        }`}
      >
        <span>Portfolio</span>
        {isPortfolioOpen ? (
          <RiArrowUpSLine size={18} />
        ) : (
          <RiArrowDownSLine size={18} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all grid grid-cols-1 duration-300 ${
          isPortfolioOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <Link
          to={"/portfolio"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 pl-6 pr-2 hover:bg-gray-100 text-sm  transition-colors duration-200 border-b border-b-gray-200 ${
            location.pathname === "/portfolio"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Portfolio
        </Link>
        <Link
          to={"/testimonials"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 pl-6 pr-2 text-sm hover:bg-gray-100  transition-colors duration-200 border-b border-b-gray-200 ${
            location.pathname === "/testimonials"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Testimonials
        </Link>
      </div>
    </div>

    {/* Team Link */}
    <Link
      to={"/team"}
      onClick={()=>setNavOpened(false)}
      className={`py-3 px-2 hover:bg-gray-100 transition-colors  duration-200 ${
        location.pathname === "/team"
          ? "text-darkSky font-semibold"
          : "text-gray-700"
      }`}
    >
      Team
    </Link>

    <div className="flex flex-col">
      <button
        onClick={() => setIsContactOpen(!isContactOpen)}
        className={`py-3 px-2 hover:bg-gray-100 transition-colors  duration-200 flex items-center justify-between ${
          location.pathname.startsWith("/contact")
            ? "text-darkSky font-semibold"
            : "text-gray-700"
        }`}
      >
        <span>Contact</span>
        {isContactOpen ? (
          <RiArrowUpSLine size={18} />
        ) : (
          <RiArrowDownSLine size={18} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all grid grid-cols-1 duration-300 ${
          isContactOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <Link
          to={"/hire-us"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 pl-6 pr-2 hover:bg-gray-100 text-sm  transition-colors duration-200 border-b border-b-gray-200 ${
            location.pathname === "/hire-us"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Hire Us
        </Link>
        <Link
          to={"/contact"}
          onClick={()=>setNavOpened(false)}
          className={`py-3 pl-6 pr-2 text-sm hover:bg-gray-100  transition-colors duration-200 border-b border-b-gray-200 ${
            location.pathname === "/contact"
              ? "text-darkSky font-semibold"
              : "text-gray-500"
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Navbar;
