import React from "react";
import Header from "./Header";
import hero_img from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div>
      <Header />
      <img src={hero_img} alt="" className="fit-contain w-full  mt-0 " />
    </div>
  );
};

export default Hero;
