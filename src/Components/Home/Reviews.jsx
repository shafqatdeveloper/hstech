import React from "react";
import ReviewsPic from "../../assets/home/reviews.png";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className=" p-5 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  place-items-center">
        <img src={ReviewsPic} alt="reviews" className="h-32" />
        <img src={ReviewsPic} alt="reviews" className="h-32" />
        <img src={ReviewsPic} alt="reviews" className="h-32" />
        <img src={ReviewsPic} alt="reviews" className="h-32" />
        <img src={ReviewsPic} alt="reviews" className="h-32" />
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
        {/* convert it to links  */}
        <Link to={'/testimonials'} className="px-5 w-48 py-4 bg-darkSky uppercase text-[#fff] hover:bg-violet transition-all duration-200 cursor-pointer rounded-sm">
          read testimonials
        </Link>
        <button className="px-5 py-4 bg-[#fff] w-48 uppercase text-[#333333] border-darkSky border hover:bg-darkSky hover:text-[#fff] transition-all duration-200 cursor-pointer rounded-sm">
          view team
        </button>
      </div>
    </div>
  );
};

export default Reviews;
