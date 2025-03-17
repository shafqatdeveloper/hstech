import React from "react";
import logo from "../../assets/MainLogo.png";

const Welcome = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center my-10 gap-5 md:gap-10 p-5 md:px-10">
      <div>
        <img src={logo} alt="logo" className="w-40 md:w-72 object-contain" />
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-2xl mb-5">
          Welcome to HS Technologies – Fastest Growing IT Company
        </h1>
        <p>
          Elevate Your Digital Presence! We specialize in web & mobile app
          development, graphic design, and software quality assurance to help
          businesses thrive. From custom websites to high-performance apps and
          flawless software solutions, we ensure innovation, efficiency, and
          growth. Partner with us for cutting-edge digital solutions that drive
          success!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
