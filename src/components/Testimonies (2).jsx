import React from "react";

const Testimonies = (props) => {
  return (
    <div className="w-[100%] md:w-[50%]">
      <div className="bg-[#222831] w-[98%] mx-auto py-4 rounded-[5px] text-white">
        <p className="w-[90%] mx-auto text-[18px] ">{props.text}</p>
        <h6 className="ml-[15px] text-[18px] font-bold mb-[5px]">
          {props.name}
        </h6>
        <p className="ml-[15px] text-[15px] mb-[10px]">magna aliqua</p>
      </div>

      <div className="py-[20px]">
        <div className="w-[140px] h-[140px] bg-[#ffc107] p-[1px] rounded-[50%] flex justify-center items-center relative">
          <img
            src={props.img}
            alt=""
            className="  w-[95%] mx-auto rounded-[50%] z-40"
          />
          <div className="w-[50px] z-30 h-[50px] rotate-45 bg-[#ffc107] absolute mt-[-90px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
