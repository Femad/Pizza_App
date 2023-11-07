import React from "react";
import Contact from "./Contact";
import FeaneSocials from "./FeaneSocials";
import OpeningHour from "./OpeningHour";

const Footer = () => {
  return (
    <div>
      <section className="w-[95%] mx-auto md:flex md:w-[90%] md:flex-row md:justify-center ">
        <Contact />
        <FeaneSocials />
        <OpeningHour />
      </section>
      <p className="text-white flex justify-center items-center w-[80%] mx-auto py-1">
        <span className="mr-[3px] text-[16spx]">&#169; </span> 2003 All Right
        Reserved by{" "}
        <span className="text-[#ffc107] ml-[5px]">femadkon@gmail.com</span>
      </p>
    </div>
  );
};

export default Footer;
