import React from "react";
import WorkSlider from "./WorkSlider";

const WorkDelivered = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 ">
      <div className="md:w-1/2 py-10  mt-5">
        <h1 className="capitalize text-darkSky text-2xl md:text-4xl h-full w-full text-center md:text-left font-semibold">
          what we delivered
        </h1>
        <p className="mt-7 leading-8">
          Our clients are extremely pleased to work with us. A 100% satisfaction
          rate and immense respect reflect their appreciation for our company.
          Every client is like a shining star in our constellation, adding to
          the overall brilliance that wouldn’t be complete without them.
        </p>
      </div>
      <div>
        <WorkSlider />
      </div>
    </div>
  );
};

export default WorkDelivered;
