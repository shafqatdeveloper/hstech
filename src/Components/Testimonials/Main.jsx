import React from "react";
import MainPic from "../../assets/home/main.jpg";
import TestimonialSlider from "./TestimonialSlider";

const Main = () => {
  return (
    <div className="relative h-screen">
      <img src={MainPic} alt="mainPic" className="h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-xs text-[#fff] px-4 md:px-8 lg:px-16 pt-16">
        <div className="md:w-1/2 p-4">
          <h1 className="capitalize text-[#fff] text-2xl md:text-4xl h-full w-full text-center md:text-left font-semibold">
            testimonials
          </h1>
          <p className="mt-7 leading-8">
            Our clients are extremely pleased to work with us. A 100%
            satisfaction rate and immense respect reflect their appreciation for
            our company. Every client is like a shining star in our
            constellation, adding to the overall brilliance that wouldn’t be
            complete without them.
          </p>
        </div>
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Main;
