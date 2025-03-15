import React from "react";
import WebDevServicePic from '../../assets/home/web-development.jpg'
import androidAppDevPic from '../../assets/home/android-app.jpg'
import  iosAppDevPic from '../../assets/home/ios-app.jpg'
import  graphicDesignPic from '../../assets/home/graphic-design.jpg'
import  sqaServicePic from '../../assets/home/sqaService.jpeg'
import ServiceBg from "../../assets/home/services-bg.jpg";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const Services = () => {
  //NOTE: needs to be changed to useState if services are being fetched from backend
  const services = [
    {
      title: "Web Development",
      description:
        "We build custom, high-performance websites that enhance visibility, drive customer engagement, and accelerate business growth.",
      pic: WebDevServicePic,
      path: "services/web",
    },
    {
      title: "Android App Development",
      description:
        "Our team creates fast, scalable, and user-friendly Android apps that cater to modern mobile needs with cutting-edge technology.",
      pic: androidAppDevPic,
      path: "services/android-development",
    },
    {
      title: "iOS App Development",
      description:
        "We design and develop sleek, high-quality iOS apps that offer seamless experiences across iPhones and iPads, meeting global standards.",
      pic: iosAppDevPic,
      path: "services/ios-development",
    },
    {
      title: "Graphic Designing",
      description:
        "We craft visually compelling designs that strengthen brand identity, attract customers, and enhance digital and print marketing.",
      pic: graphicDesignPic,
      path: "services/graphic-design",
    },
    {
      title: "Software Quality Assurance",
      description:
        "Our SQA services ensure bug-free, high-performance software through rigorous testing, improving security, functionality, and reliability.",
      pic: sqaServicePic,
      path: "services/sqa",
    },
  ];
  
  
  
  
  return (
    <div className="my-10">
      <div
        className="h-32 md:h-40 w-full bg-cover bg-scroll"
        style={{
          backgroundImage: `url(${ServiceBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="uppercase text-[#fff] text-2xl md:text-4xl h-full w-full flex justify-center items-center bg-black/40">
          our services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-4 md:px-20 py-10 gap-5 md:g8">
        {services.map((card, index) => {
          return <ServicesCard card={card} key={index} />;
        })}
      </div>
      <div className="text-center my-20">
        <Link
          to={"/hire-us"}
          className="text-darkSky px-5 py-1.5 uppercase border-2 hover:bg-darkSky hover:text-white transition-all duration-300 border-darkSky rounded-sm"
        >
          get a free quote
        </Link>
      </div>
    </div>
  );
};

export default Services;
