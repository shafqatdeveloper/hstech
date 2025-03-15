import React from "react";
import nativeApplicationGif from "../assets/home/nativeApplication.gif";
import mobileWebAppGif from "../assets/home/mobileWebApp.gif";
import hybridAppGif from "../assets/home/hybridApp.gif";
import MainPic from "../assets/home/mainBgImage.jpg";
import { Link } from "react-router-dom";

const IosApps = () => {
  return (
    <div className="mb-20">
      <div className="relative w-full h-48 flex items-center justify-center">
              <img src={MainPic} alt="bgPic" className="h-full w-full object-cover" />
              <div className="absolute bg-white/20 w-full h-full backdrop-blur-xs"></div>
              <div className="absolute flex flex-col justify-center items-center w-full">
                <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
                Design and Development of IOS Application
                </h1>
                <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
                  <h1>
                    <Link
                      className="text-gray-100 font-semibold hover:underline"
                      to={"/"}
                    >
                      Home
                    </Link>
                    <span className="text-lg font-semibold text-gray-400"> / services / ios-development</span>
                  </h1>
                </div>
              </div>
            </div>
      <div className="px-6 sm:px-8 md:px-20  mt-10">
        <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
          Development of IOS App
        </h1>
        <div>
          <p className="text-gray-500 text-justify">
            When it comes to iOS app development, HS Technologies stands out as
            a leading provider in Pakistan. Our dedicated team of skilled
            developers and designers crafts user-centric and innovative iOS
            applications, prioritizing usability, performance, and user
            experience. We closely follow the latest trends and Apple's
            development standards to create powerful and intuitive iOS apps,
            helping businesses effectively engage their users on iPhones and
            iPads.
          </p>
        </div>
        <div className=" mt-10">
          <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
            Delivering Exceptional Services Of Development Of Apps
          </h1>
          <div className="space-y-7">
            <p className="text-gray-500 text-justify">
              Do you want to elevate your business through cutting-edge iOS app
              development services? A strong presence on Apple's ecosystem
              significantly boosts customer engagement and retention. At HS
              Technologies, we specialize in creating tailored iOS apps that
              deliver smooth, engaging, and memorable experiences, turning
              casual users into loyal customers.
            </p>

            <p className="text-gray-500 text-justify">
              HS Technologies brings together an experienced team of iOS
              developers committed to delivering high-quality, customized apps
              specifically designed to accelerate your business growth. We begin
              by thoroughly analyzing your business goals and target audience to
              craft apps that not only attract but also retain users. Our
              comprehensive app development services cover design, integration,
              and long-term support.
            </p>

            <p className="text-gray-500 text-justify">
              Our iOS app development team ensures robust, secure, and scalable
              applications capable of thriving in today's competitive market.
              Whether you're seeking a consumer-facing app or an
              enterprise-level solution, our developers expertly handle the
              complete lifecycle—from conceptualization and design through
              deployment and continuous improvement.
            </p>

            <p className="text-gray-500 text-justify">
              Choose HS Technologies as your iOS app development partner to
              create exceptional applications that resonate with your customers,
              align with your brand identity, and significantly enhance your
              business reach and profitability.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={nativeApplicationGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            native application
          </h1>
          <p className="text-sm text-gray-500 text-justify">
            Native iOS apps are built specifically for Apple's platforms
            (iPhone, iPad) using Swift or Objective-C. These apps provide
            superior performance, seamless integration with device capabilities,
            and offer exceptional user experience through the App Store.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={mobileWebAppGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            MOBILE WEB APPLICATION
          </h1>
          <p className="text-sm text-gray-500 text-justify">
            The mobile web application is a thin. Long neglected in favor of the
            native application, it is back in force with the development of
            HTML5 and CSS3 standards which will improve the user experience and
            offer more richness and functionality on mobile
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4">
          <img className="w-2/4" src={hybridAppGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            hybrid APPLICATION
          </h1>
          <p className="text-sm text-gray-500 text-justify">
            A hybrid application combines the use of HTML5, JavaScript and CSS
            web technologies which are directly encapsulated in a native
            application. This allows you to benefit from all the functionalities
            of the mobile terminal.
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

export default IosApps;
