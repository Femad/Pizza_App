import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="fixed bg-[#222831]   z-50 h-[80px] mt-0  w-full px-[40px] py-[20px] text-white flex justify-between items-center">
      <h1 className="text-white font-[cursive] text-[30px] italic font-bold cursor-pointer">
        <a href="#home">Feane</a>
      </h1>
      <div className="bg-transparent w-[80%] ">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
