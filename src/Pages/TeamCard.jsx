import React from "react";

const TeamCard = ({ card }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div className="h-48 relative">
      <img src={card.pic} alt="cardPic" className="w-full h-full object-cover" />
      
      <div className="absolute right-0 bottom-0 bg-black/80 p-1 rounded-lg text-white">
        <span className="block text-center text-xs font-medium text-red-400">
          {card.title}
        </span>
        <p className="text-center text-xs mt-1 text-gray-200">{card.description}</p>
      </div>
    </div>
  </div>
  
  );
};

export default TeamCard;
