import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  return (
    <Link
      className="bg-[#fff] shadow-xl rounded-xl overflow-hidden"
      to={`/${card.path}`}
    >
      <div>
        <img src={card.pic} alt="cardPic" className="" />
      </div>
      <div className="p-4">
        <h1 className="text-center capitalize text-xl font-semibold underline">
          {card.title}
        </h1>
        <p className="text-center mt-2">{card.description}</p>
      </div>
      <div className="text-center my-5">
        <Link
          className="uppercase bg-darkSky hover:bg-violet transition duration-200 cursor-pointer px-4 py-2 rounded-md text-[#fff]"
          to={"/hire-us"}
        >
          contact us
        </Link>
      </div>
    </Link>
  );
};

export default ServicesCard;
