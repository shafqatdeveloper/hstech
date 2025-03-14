import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import MainPic from "../../assets/home/main.jpg";
import WebDevPic from "../../assets/home/reponsive-web.png";
import MobileAppPic from "../../assets/home/mobile-app.png";
import SoftwareDevPic from "../../assets/home/software-dev.png";
import SeoPic from "../../assets/home/seo-pic.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const slides = [
    {
      heading: "mobile apps development",
      subHeading: "we build awesome apps",
      desc: "we know how to build products that can scale your business' needs, with all necessary features",
      pic: MobileAppPic,
    },
    {
      heading: "web development",
      subHeading: "responsive & reliable",
      desc: "we plan, design & develop websites from start to finish, ensuring a high ROI for clients, Our major concern is the reliability of website",
      pic: WebDevPic,
    },
    {
      heading: "software development",
      subHeading: "we focus on quality",
      desc: "we work together with our clients to build a compelling product that provide lasting excitement and value to our customers, we have passionate, creative, experienced developers",
      pic: SoftwareDevPic,
    },
    {
      heading: "search engine",
      subHeading: "optimization",
      desc: "We start the SEO process with a full website audit and recommendations report, Our team will review your key metrics, perform keyword research, analyze your competitors, your linkscape, and key pages of your website, and create a detailed implementation plan",
      pic: SeoPic,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-screen"
    >
      <SwiperSlide className="h-full">
        <div className="relative h-full">
          <div className="absolute bg-black/80 text-white w-2/3 h-full flex justify-center items-center ">
            <div className="p-5 w-full flex flex-col justify-center md:block items-center px-20">
              <p className="text-red-500 font-bold uppercase text-2xl md:text-4xl lg:text-6xl text-center md:text-left">
                welcome to
              </p>
              <p className="text-[#fff] font-semibold capitalize text-2xl md:text-4xl lg:text-6xl md:mt-2 text-center md:text-left">
                HS Technologies
              </p>
              <p className="text-xs md:text-sm text-[#fff] mt-2 md:mt-7 capitalize text-center md:text-left ">
                Leading top software house in Pakistan. We offer our services in
                web designing, crm systems, digital marketing and mobile apps.
              </p>
            </div>
          </div>
          <img
            src={MainPic}
            alt="mainpic"
            className="h-full  w-full object-cover"
          />
        </div>
      </SwiperSlide>
      {slides.map((item, index) => {
        return (
          <SwiperSlide key={index} className="h-screen">
            <div className="h-full flex flex-col justify-center items-center md:flex-row bg-red-50 md:px-10">
              <div className="text-white w-2/3 flex justify-center items-center md:h-full">
                <div className="p-5 w-full flex flex-col justify-center md:block items-center ">
                  <p className="text-red-500 font-bold uppercase text-2xl md:text-4xl lg:text-6xl text-center md:text-left">
                    {item.heading}
                  </p>
                  <p className="text-[#333333] font-semibold capitalize text-2xl md:text-4xl lg:text-6xl md:mt-2 text-center md:text-left">
                    {item.subHeading}
                  </p>
                  <p className="text-xs md:text-sm text-[#333333] mt-2 md:mt-7 capitalize text-center md:text-left ">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={item.pic}
                  alt={item.pic}
                  className=" object-contain aspect-square"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
