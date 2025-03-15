import React from "react";
import { Link } from "react-router-dom";
import MainPic from "../assets/home/mainBgImage.jpg";
import onlineStoreGif from "../assets/home/onlineStore.gif";
import responsiveGif from "../assets/home/responsive.gif";
import landingGif from "../assets/home/landing.gif";
import portalGif from "../assets/home/portal.gif";
import corporateWebsiteGif from "../assets/home/corporateWebsite.gif";
import cmsPng from '../assets/home/cms.png'
import ecommercePng from '../assets/home/ecommerce.png'

const WebDevelopment = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-48 flex items-center justify-center">
        <img src={MainPic} alt="bgPic" className="h-full w-full object-cover" />
        <div className="absolute bg-white/20 w-full h-full backdrop-blur-xs"></div>
        <div className="absolute flex flex-col justify-center items-center w-full">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
            Best Web Design and Development Services
          </h1>
          <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
            <h1>
              <Link
                className="text-gray-100 font-semibold hover:underline"
                to={"/"}
              >
                Home
              </Link>
              <span className="text-lg font-semibold text-gray-400"> / services / web</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="px-20 mt-10">
        <h1 className="text-center pb-5 text-gray-600 font-bold text-lg">
          Code For The Next Level Development
        </h1>
        <p className="text-gray-500">
          Elexoft, a very well renowned web development company currently
          working in Pakistan. We’re bunch of guys who’re adept and skillful web
          designers and we are master of this field. Site advancement has been
          an issue and we as web Development Company working enthusiastically to
          come up with first-rate solution. We’ll keep on working until we get
          the job done. Here at Elexoft, you’ll get any web of your choice and
          it’s our responsibility to give you our best through our website
          maintenance services.
        </p>
      </div>

      <div className="px-20 mt-10">
        <h1 className="text-center pb-5 text-gray-600 font-bold text-lg">
          Professional And Leading Web Design And Development Company
        </h1>
        <p className="text-gray-500">
          Elexoft Technologies is one of the leading web design and development
          company in Pakistan. we provide tailored end-to-end web design &
          development services, which are rich in creativity, functional, and
          highly flexible for your unique needs and preferences. We offer
          extraordinary services in web designing to create brand’s visibility.
          Our work helped us gain the recognition as best web design company and
          managed to create space in international industry as well. Our experts
          create most affordable web design and development services considering
          the size of every business. We hire the best resources to help you
          create flexible, user friendly, and trendsetting website in the
          market. Elexoft Technologies excells in web designing and development
          because we dive into customers’ business strategy and requirements to
          help create the competitive online presence.
        </p>
      </div>

      <div className="px-6 sm:px-8 md:px-20 mt-20 bg-gray-100 py-4 md:py-10 flex flex-col items-center md:flex-row gap-5 md:gap-12">
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold pb-5 text-gray-600">
            Content Management System
          </h1>
          <p className="text-gray-500">
            Managing a Content Management System (CMS) can be challenging, but
            at HS Technologies, we make it effortless with our innovative
            techniques. Our expert web developers ensure a user-friendly CMS
            that allows clients to easily review, edit, and manage their content
            without technical complexities. With our CMS web development
            solutions, you gain full control over your digital content, enabling
            seamless updates and efficient content management. Reach out to us
            and experience a hassle-free way to manage your website!
          </p>
        </div>
        <div className="w-3/5 flex items-center justify-center md:w-1/4">
          <img src={cmsPng} alt="CMS" />
        </div>
      </div>

       <div className="px-6 sm:px-8 md:px-20 mt-20  py-4 md:py-10 flex flex-col items-center md:flex-row gap-5 md:gap-10">
              <div className="w-3/5 flex items-center justify-center md:w-1/4">
                <img src={ecommercePng} alt="Wordpress, Joomla, Shopify Customization" />
              </div>
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-semibold pb-5 text-gray-600">
                Wordpress, Joomla, Shopify Customization
                </h1>
                <div className="space-y-2">
      
                <p className="text-gray-500">
                Looking for WordPress, Joomla, or Shopify solutions? At HS Technologies, we’ve got you covered! Whether you’re facing challenges with your website, project, or assignment, our expert web developers make the process smooth and hassle-free.
                </p>
                <p className="text-gray-500">
                We specialize in advanced WordPress, Joomla, and Shopify customization, bringing innovation and efficiency to your online presence. With our Shopify solutions, you can easily set up and manage your online store while we guide you as a leading web development company.
                </p>
                <p className="text-gray-500">
                Starting an e-commerce business can be overwhelming, but with our expertise, we ensure a seamless journey. From website development to maintenance, we help you establish a strong digital presence, turning your business into a success in just a few weeks or months.
                </p>
                <p className="text-gray-500">
                Let HS Technologies simplify your path to online success!
                </p>
                </div>
              </div>
            </div>

      <div className="px-6 sm:px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-5">
          <img className="w-2/4" src={onlineStoreGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">Online store</h1>
          <p className="text-sm text-gray-500 text-justify">
            A platform for an online sales business. It requires the development
            of a complex structure, several mandatory sections ("Delivery",
            "Payment", "Contacts", etc). Consists of dozens of pages with
            descriptions of products requiring promotion.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-5">
          <img className="w-2/4" src={corporateWebsiteGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            Corporate website
          </h1>
          <p className="text-sm text-gray-500 text-justify">
            Web-based platform for document management, personnel management and
            information exchange between branches and remote units. Requires
            exclusive design and 24/7 support.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-5">
          <img className="w-2/4" src={portalGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">Portal</h1>
          <p className="text-sm text-gray-500 text-justify">
            A large Internet resource with a large amount of information.
            Optimal for publishing news articles, sports reports, announcements.
            Attracts a lot of visitors and provides passive income by placing
            ads on the most visited pages.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-5">
          <img className="w-2/4" src={landingGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">Landing</h1>
          <p className="text-sm text-gray-500 text-justify">
            A one-page website to inform potential buyers about the benefits of
            the product. An autonomous advertising resource requiring a catchy
            design and quality content.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-5">
          <img className="w-2/4" src={responsiveGif} alt="" />
          <h1 className="uppercase font-medium text-gray-600">
            Responsive site
          </h1>
          <p className="text-sm text-gray-500 text-justify">
            A resource that provides the correct display of information on any
            devices (smartphones, tablets). Attracts mobile users, increases
            business competitiveness.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-14">
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

export default WebDevelopment;
