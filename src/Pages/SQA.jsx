import React from "react";
import sqaTestPng from "../assets/home/sqa.png";
import { Link } from "react-router-dom";
import MainPic from "../assets/home/mainBgImage.jpg";

const SQAPage = () => {
  return (
    <div className="mb-20">
      <div className="relative w-full h-48 flex items-center justify-center">
        <img src={MainPic} alt="bgPic" className="h-full w-full object-cover" />
        <div className="absolute bg-white/20 w-full h-full backdrop-blur-xs"></div>
        <div className="absolute flex flex-col justify-center items-center w-full">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
           SQA for Flawless Software!
          </h1>
          <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
            <h1>
              <Link
                className="text-gray-100 font-semibold hover:underline"
                to={"/"}
              >
                Home
              </Link>
              <span className="text-lg font-semibold">
                {" "}
                / services / sqa
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-8 md:px-20 mt-10">
        <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
          Ensuring Software Excellence with Our QA Services
        </h1>
        <div>
          <p className="text-gray-500 text-justify">
            At HS Technologies, we provide industry-leading **Software Quality
            Assurance (SQA)** services across Pakistan. Our team of QA experts
            ensures that your software meets the highest standards of
            **performance, security, functionality, and reliability**. By
            incorporating **manual and automated testing**, we help businesses
            deliver **flawless digital solutions** with confidence.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-center pb-4 text-2xl font-bold text-gray-600">
            Comprehensive Software Testing & QA Solutions
          </h1>
          <div className="space-y-7">
            <div>
              <p className="text-gray-500 text-justify">
                In today’s fast-paced digital landscape, software failures can
                be costly. But with **HS Technologies**, you can rest assured
                that your applications are rigorously tested and ready for
                deployment.
              </p>
              <p className="text-gray-500 text-justify">
                We offer **end-to-end software testing services**, ensuring that
                your products perform optimally under various conditions. Our
                expertise includes:
                <h1
                  className="text-darkSky font-medium"
                  to={"/services/testing"}
                >
                  Functional Testing, Security Testing, Performance Testing and
                  Test Automation.
                </h1>
              </p>
            </div>

            <p className="text-gray-500 text-justify">
              Our **SQA approach** ensures that your software is **free from
              defects, meets business requirements, and delivers seamless user
              experiences**. We follow a **structured testing process** to
              identify and resolve issues early in the development cycle, saving
              you both time and costs.
            </p>

            <p className="text-gray-500 text-justify">
              With the latest **QA tools and methodologies**, we guarantee
              software quality at every stage—from development to deployment.
              Whether you're launching a new product or improving an existing
              one, our **QA specialists** are here to ensure maximum efficiency
              and reliability.
            </p>

            <p className="text-gray-500 text-justify">
              Elevate your software quality today with **HS Technologies**!
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 md:px-20 mt-20 bg-gray-100 py-4 md:py-10 flex flex-col items-center md:flex-row gap-5">
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold pb-5 text-gray-600">
            Manual & Automated Testing
          </h1>
          <p className="text-gray-500">
            At **HS Technologies**, we offer both **manual and automated
            testing** to ensure thorough validation of your applications.
            **Manual testing** helps us uncover **user experience issues** that
            automation may overlook, while **automated testing** enhances
            efficiency by identifying recurring defects quickly.
          </p>
          <p className="text-gray-500">
            Our advanced **automation frameworks** streamline the testing
            process, improving **test coverage, accuracy, and speed**—allowing
            for faster software releases without compromising on quality.
          </p>
        </div>
        <div className="w-3/5 flex items-center justify-center md:w-1/4">
          <img src={sqaTestPng} alt="Software Testing Services" />
        </div>
      </div>

      <div className="px-6 sm:px-8 md:px-20 mt-20 py-4 md:py-10 flex flex-col items-center md:flex-row gap-5">
        <div className="w-3/5 flex items-center justify-center md:w-1/4">
          <img src={sqaTestPng} alt="Quality Assurance Services" />
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold pb-5 text-gray-600">
            Performance & Security Testing
          </h1>
          <div className="space-y-4">
            <p className="text-gray-500">
              Ensuring that your software performs **flawlessly under any load**
              is our priority. Our **performance testing** services help detect
              bottlenecks and optimize application speed, scalability, and
              stability.
            </p>
            <p className="text-gray-500">
              Additionally, our **security testing** identifies
              **vulnerabilities** that could put your software and users at
              risk. We conduct **penetration testing, vulnerability assessments,
              and compliance checks** to safeguard your applications from cyber
              threats.
            </p>
            <p className="text-gray-500">
              At **HS Technologies**, we make sure your applications are **fast,
              secure, and highly reliable**—delivering exceptional user
              experiences.
            </p>
            <p className="text-gray-500">
              Get in touch today and let’s enhance your software quality!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-14">
        <Link
          to={"/hire-us"}
          className="text-darkSky px-5 py-1.5 uppercase border-2 hover:bg-darkSky hover:text-white transition-all duration-300 border-darkSky rounded-sm"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
};

export default SQAPage;
