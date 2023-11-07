import React from "react";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const Feane_Socials = () => {
  return (
    <section className="flex flex-col  items-center pt-[25px] md:w-[50%]">
      <h4 className="font-[cursive] text-[38px] text-center text-white italic font-semibold mb-[20px]">
        Feane
      </h4>
      <p className="font-[open-sans] text-center text-[#dbdbdb] mb-4 text-base font-normal md:w-[50%]">
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <section className="flex flex-row justify-center items-center md:mb-[20px]">
        <TiSocialFacebookCircular className="text-white text-[35px] mr-[5px]" />
        <TiSocialTwitterCircular className="text-white text-[40px] mr-[5px]" />
        <TiSocialLinkedinCircular className="text-white text-[45px] mr-[5px]" />
        <FaInstagram className="text-white text-[30px] mr-[5px]" />
        <ImPinterest2 className="text-white text-[30px] mr-[5px]" />
      </section>
    </section>
  );
};

export default Feane_Socials;
