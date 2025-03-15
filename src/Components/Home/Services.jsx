import React from "react";
import WebDevServicePic from "../../assets/home/web-dev-service.jpg";
import ServiceBg from "../../assets/home/services-bg.jpg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  //NOTE: needs to be changed to useState if services are being fetched from backend
  const services = [
    {
      title: "web development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem soluta architecto tenetur odio voluptatum eaque nihil dolorem. Esse doloribus quidem est, magnam ab exercitationem voluptatibus possimus quis alias impedit fuga sunt culpa voluptates?",
      pic: WebDevServicePic,
      path: "services/web",
    },
    {
      title: "mobile app development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem soluta architecto tenetur odio voluptatum eaque nihil dolorem. Esse doloribus quidem est, magnam ab exercitationem voluptatibus possimus quis alias impedit fuga sunt culpa voluptates?",
      pic: WebDevServicePic,
      path: "services/andriod-development",
    },
    {
      title: "graphics designing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem soluta architecto tenetur odio voluptatum eaque nihil dolorem. Esse doloribus quidem est, magnam ab exercitationem voluptatibus possimus quis alias impedit fuga sunt culpa voluptates?",
      pic: WebDevServicePic,
      path: "services/graphic-design",
    },
    {
      title: "SQA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem soluta architecto tenetur odio voluptatum eaque nihil dolorem. Esse doloribus quidem est, magnam ab exercitationem voluptatibus possimus quis alias impedit fuga sunt culpa voluptates?",
      pic: WebDevServicePic,
      path: "services/sqa",
    },
  ];
  return (
    <div className="my-10">
      <div
        className="h-28 w-full bg-cover bg-scroll"
        style={{
          backgroundImage: `url(${ServiceBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="uppercase text-[#fff] text-2xl md:text-4xl h-full w-full flex justify-center items-center bg-black/40">
          our services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-4 md:px-8 lg:px-16 py-10 gap-5 md:g8">
        {services.map((card, index) => {
          return <ServicesCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Services;
