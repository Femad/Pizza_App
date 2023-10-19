import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="absolute h-[80px] mt-0  w-full px-[40px] py-[20px] text-white flex justify-between items-center">
      <img src="" alt="logo" className="w-[15%]" />
      <div className="bg-transparent w-[80%] ">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
