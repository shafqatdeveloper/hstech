import React from 'react'
import ServiceBg from "../assets/home/services-bg.jpg";
import logo from "../assets/home/logo.jpg";
import TeamCard from './TeamCard'
import { Link } from 'react-router-dom';

const Team = () => {
    const services = [
        {
          title: "Muhammad Ahsan Khan",
          description:
            "CEO & Founder",
          pic: logo,
        },
        {
          title: "Muhammad Ahsan Khan",
          description:
            "CEO & Founder",
          pic: logo,
        },
        {
          title: "Muhammad Ahsan Khan",
          description:
            "CEO & Founder",
          pic: logo,
        },
        {
          title: "Muhammad Ahsan Khan",
          description:
            "CEO & Founder",
          pic: logo,
        },
        {
          title: "Muhammad Ahsan Khan",
          description:
            "CEO & Founder",
          pic: logo,
        },
      ];
  return (
    <div className="my-5">
    <div
  className=" w-full h-85 flex items-center justify-center bg-cover bg-scroll  mb-8"
  style={{ backgroundImage: `url(${ServiceBg})`,
           backgroundAttachment:'fixed',
   }}
>
  {/* <div className="absolute inset-0 bg-black/30"></div> */}
  <div className=" flex flex-row justify-between items-center w-full">
    <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
      <h1 className="">Elexoft Team</h1>
      <p className="text-sm">We Are Elexoftians</p>
    </div>

    <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
      <h1>
        <span className="text-lg font-semibold text-gray-400">  About / Team</span>
      </h1>
    </div>
  </div>
</div>




    <div className="px-20 mt-10">
        <h1 className="text-center pb-9 text-gray-600 font-bold text-lg">
        About us
        </h1>
        <p className="text-gray-500">
        Elexoft is known as the well-established software house in Pakistan. We started our journey on September 2015 with an ambition to provide best-quality web services in Pakistan and develop a trustworthy strategic relationship. Due to new inventions in technology, all barriers of communication are eliminated and the world has become a global village. Many countries started outsourcing their IT departments to developing nations for making it cheaper and reliable for them due the higher currency rates. Elexoft is well respected and considered as the top-ranked software house in Pakistan.
        Elexoft software house was established in 2015 in Pakistan. With the extension of work, Elexoft got registered in 2017(PSEB). Elexoft software house is providing a wide range of services including website development, web designing, mobile apps development, search engine optimization (SEO), digital marketing including social media marketing (SMM) and much more.
        </p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center px-4 md:px-20 py-10 gap-5 md:g8">
      {services.map((card, index) => {
        return <TeamCard card={card} key={index} />;
      })}
    </div>
  </div>
   
  )
}

export default Team
