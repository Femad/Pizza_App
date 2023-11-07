import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col  items-center pt-[25px] md:w-[30%]">
      <h4 className="font-[cursive] text-[28px] text-center text-white italic font-semibold mb-[20px]">
        Contact Us
      </h4>
      <section className="flex flex-row justify-around items-center mb-[5px]">
        <HiLocationMarker className="text-white text-[20px] mr-[8px]" />
        <span className="text-white text-[20px]">Location</span>
      </section>
      <section className="flex flex-row justify-around items-center mb-[5px]">
        <IoIosCall className="text-white text-[20px] mr-[8px]" />
        <span className="text-white text-[20px]"> Call +234 8055839503</span>
      </section>
      <section className="flex flex-row justify-around items-center mb-[5px]">
        <FaEnvelope className="text-white text-[20px] mr-[8px]" />
        <span className="text-white text-[20px]">femadkon@gmail.com</span>
      </section>
    </section>
  );
};

export default Contact;
