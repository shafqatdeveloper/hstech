import React from "react";
import uiuxDevelopmentGif from "../assets/home/uiux.gif";
import siteDesignGif from "../assets/home/siteDesign.gif";
import mobileAppDesignGif from "../assets/home/mobileAppDesign.gif";
import logoDesignGif from "../assets/home/logoDesign.gif";
import flyerPng from "../assets/home/flyer.png";
import logoDesigningPng from "../assets/home/logoDesigning.png";
import MainPic from "../assets/home/mainBgImage.jpg";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  return (
    <div className="mb-20">
     <div className="relative w-full h-48 flex items-center justify-center">
              <img src={MainPic} alt="bgPic" className="h-full w-full object-cover" />
              <div className="absolute bg-white/20 w-full h-full backdrop-blur-xs"></div>
              <div className="absolute flex flex-col justify-center items-center w-full">
                <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
                Best Graphic Designing Services
                </h1>
                <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
                  <h1>
                    <Link
                      className="text-gray-100 font-semibold hover:underline"
                      to={"/"}
                    >
                      Home
                    </Link>
                    <span className="text-lg font-semibold text-gray-400"> / services / graphic-design</span>
                  </h1>
                </div>
              </div>
            </div>
      <div className="px-6 sm:px-8 md:px-20  mt-10">
        <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
          Our Design For Your Business Achievement
        </h1>
        <div>
          <p className="text-gray-500 text-justify">
            At HS Technologies, we provide premium graphic design services
            across Pakistan. Our expert designers are not only skilled in
            graphic design but also stay up-to-date with the latest trends in
            web promotion. This means you get multiple benefits under one
            roof—our specialty. HS Technologies is known for delivering the best
            logo designs in Pakistan.
          </p>
        </div>
        <div className=" mt-10">
          <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
            One Stop Shop To Avail Of Full Graphic Designing Services
          </h1>
          <div className="space-y-7">
            <div>
              <p className="text-gray-500 text-justify">
                Creating a strong online presence in today’s competitive
                landscape can be challenging—but why worry when HS Technologies
                has the perfect solutions for you?
              </p>
              <p className="text-gray-500 text-justify">
                We offer complete graphic design services across Pakistan,
                specializing in solving visual branding challenges for
                businesses of all sizes. Our passion drives us to craft{" "}
                <Link className="text-darkSky font-medium" to={"/services/web"}>
                  modern websites
                </Link>{" "}
                and create impactful visuals for digital marketing campaigns,
                incorporating the best online marketing strategies.
              </p>
            </div>

            <p className="text-gray-500 text-justify">
              We understand that integrating graphic design into digital
              marketing is key to effectively communicating with your target
              audience. In a digital-first world, attention is everything. Do
              you know how to capture it? A creative graphic designer plays a
              crucial role in promoting products and services, ensuring your
              brand stands out and builds strong online awareness. The success
              of your brand today depends on how well you manage and establish
              your digital presence.
            </p>

            <p className="text-gray-500 text-justify">
              To help you expand your reach and strengthen your brand identity,
              we bring together Pakistan’s best graphic designers. At HS
              Technologies, customer trust and satisfaction are our top
              priorities. That’s why we deliver top-notch, competitive, and
              highly relevant graphic design services tailored to meet your
              business needs.
            </p>

            <p className="text-gray-500 text-justify">
              Let us take your brand to the next level!
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 md:px-20 mt-20 bg-gray-100 py-4 md:py-10 flex flex-col items-center md:flex-row gap-5">
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold pb-5 text-gray-600">
            Flyer and Brochures
          </h1>
          <p className="text-gray-500">
            Distinctive flyer designs are often missing in Pakistan, and HS
            Technologies is here to fill that gap with style and sophistication.
            Our brochures and flyers are designed to captivate your audience
            effortlessly. Looking for eye-catching marketing materials? Let HS
            Technologies handle it for you. We don’t just create modern and
            innovative flyers—we craft strategic marketing plans that enhance
            branding and advertising impact. With the expertise of our top-tier
            logo and graphic designers, we ensure your message is not only
            visually stunning but also powerfully engaging. Our designs will
            leave a lasting impression, making your brand stand out in a crowded
            market.
          </p>
        </div>
        <div className="w-3/5 flex items-center justify-center md:w-1/4">
          <img src={flyerPng} alt="Flyer and Brochures" />
        </div>
      </div>
      <div className="px-6 sm:px-8 md:px-20 mt-20  py-4 md:py-10 flex flex-col items-center md:flex-row gap-5">
        <div className="w-3/5 flex items-center justify-center md:w-1/4">
          <img src={logoDesigningPng} alt="Flyer and Brochures" />
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold pb-5 text-gray-600">
            Logo Design
          </h1>
          <div className="space-y-4">

          <p className="text-gray-500">
            At HS Technologies, we specialize in creating impactful and
            memorable logo designs that establish a strong brand identity. 
          </p>
          <p className="text-gray-500">
          We
            have everything it takes to design remarkable and distinctive logos
            that set your business apart. A well-designed logo is the foundation
            of your brand, and we ensure that yours stands out across Pakistan.
            Many businesses struggle with logos that fail to communicate their
            message effectively, leading to branding challenges. Our mission is
            to eliminate these hurdles by crafting logos that leave a lasting
            impression—designs so powerful that they instantly bring your brand
            to mind.
          </p>
          <p className="text-gray-500">
          With a blend of creativity and elegance, our logos go
            beyond visuals—they tell a story. Let HS Technologies create a
            timeless symbol for your business, ensuring your brand is recognized
            and remembered. 
          </p>
          <p className="text-gray-500">
          Let’s make your brand unforgettable!
          </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={uiuxDevelopmentGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            UI/UX design development
          </h1>
          <p className="text-sm text-gray-500 text-justify sm:h-36">
            We do design based on a long-term study of user behavior on sites of
            various subjects. This allows you to naturally bring a person to the
            desired action.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={siteDesignGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">Site design</h1>
          <p className="text-sm text-gray-500 text-justify sm:h-36">
            We take your corporate identity as a basis, so that loyal users
            remember it and want to return to an aesthetic and convenient
            resource.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={mobileAppDesignGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            Mobile app design
          </h1>
          <p className="text-sm text-gray-500 text-justify sm:h-36">
            The attractive design of mobile applications makes them more
            convenient for users, and therefore more effective for you. Elexoft
            is developing an application design for iOS and Android, which helps
            bring new customers and solve other business problems.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={logoDesignGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">Logo Design</h1>
          <p className="text-sm text-gray-500 text-justify sm:h-36">
            We immerse ourselves in the business of customers, study the target
            audience, and clearly indicate the marketing task that the logo
            should solve. Only after that we develop the concept.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-14">
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

export default GraphicDesign;
