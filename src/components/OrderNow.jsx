import React from "react";
import { BsFillPersonFill, BsFillCartFill, BsList } from "react-icons/bs";

const OrderNow = (props) => {
  return (
    <div className="bg-[#222831] px-[15px] w-[100%] h-[380px] lg:h-[250px] mb-[35px]  rounded-[5px] lg:w-[45%] items-center flex justify-start  flex-col lg:flex-row">
      <div className="rounded-[50%] border-[6px] border-[#ffc107] w-[180px] h-[180px] flex items-center justify-center mt-[20px] z-30">
        <img
          src={props.offer_img}
          alt=""
          className="w-[100%] h-[100%]  object-contain mx-auto my-auto rounded-[50%] hover:scale-105 hover:duration-300"
        />
      </div>
      <div className="mt-[15px] flex flex-col justify-center mb-[15px] ">
        <h3 className="text-white italic font-[cursive] font-bold text-[20px] ">
          {props.daysCaption}
        </h3>
        <div className="text-[40px] text-white italic font-[cursive] font-bold text-center ">
          {props.amountOff}%
          <span className="font-thin text-[16px] ml-[5px] ">off</span>
        </div>
        <button className="bg-[#ffc107] hover:bg-[#dbad24] self-center flex justify-center items-center text-white p-[8px] rounded-full w-[160px] ">
          Order Now
          <BsFillCartFill className="text-white text-[20px] ml-[8px]" />
        </button>
      </div>
    </div>
  );
};

export default OrderNow;
