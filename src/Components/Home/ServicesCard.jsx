import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  return (
    <Link
      className="bg-[#fff] border border-gray-200 rounded-xl overflow-hidden"
      to={`/${card.path}`}
    >
      <div className="h-60">
        <img src={card.pic} alt="cardPic" className="" />
      </div>
      <div className="p-4 min-h-48">
        <h1 className="text-center capitalize text-xl font-semibold py-2 text-gray-700">
          {card.title}
        </h1>
        <p className="text-center mt-2 text-gray-500">{card.description}</p>
      </div>
      <div className="text-center mb-10 mt-5">
        <Link
          className="uppercase bg-darkSky hover:bg-violet transition duration-200 cursor-pointer px-6 tracking-wide py-2 rounded-md text-[#fff]"
          to={"/contact"}
        >
          contact us
        </Link>
      </div>
    </Link>
  );
};

export default ServicesCard;
