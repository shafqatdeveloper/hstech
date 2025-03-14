import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import Welcome from "../Components/Home/Welcome";
import Reviews from "../Components/Home/Reviews";

const Home = () => {
  return (
    <div className="text-primary">
      <HomeSlider />
      <Welcome />
      <Reviews />
    </div>
  );
};

export default Home;
