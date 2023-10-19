import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const OurMenu = (props) => {
  return (
    <div className="h-[425px] w-[98%]  mb-[15px] md:w-[30%] mx-2  bg-[#343a40] rounded-[10px] relative  ">
      <div className=" bg-[#f1f2f3] mt-0 h-[40%] w-[100%] rounded-es-[45px] rounded-ss-[6px] rounded-se-[6px] absolute">
        <div className="w-[150px]mx-auto pt-4 flex items-center justify-center">
          <img
            src={props.img}
            alt="burger"
            className="w-[50%] md:w-[50%] hover:scale-110"
          />
        </div>
      </div>
      <div className="absolute top-[215px] p-[25px] md:p-[15px] text-white">
        <h5 className="text-[20px] font-semibold md:text-15">{props.name}</h5>
        <p className="text-[15px] md:text-[14px]">{props.detailText}</p>
        <div className=" mt-[10px] flex justify-between items-center  ">
          <h6 className="font-500">=N={props.price}</h6>
          <span className="rounded-full bg-[#ffbe33] p-2 cursor-pointer">
            <BsFillCartFill className="cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
