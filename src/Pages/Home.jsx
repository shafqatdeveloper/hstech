import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import Welcome from "../Components/Home/Welcome";
import Reviews from "../Components/Home/Reviews";
import Services from "../Components/Home/Services";

const Home = () => {
  return (
    <div className="text-primary">
      <HomeSlider />
      <Welcome />
      <Reviews />
      <Services />
    </div>
  );
};

export default Home;
