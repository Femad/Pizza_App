import React, { useState } from "react";
import { BsFillPersonFill, BsFillCartFill, BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const openHandler = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <nav
      className={
        showNav
          ? "bg-[#0c0c0c]/90  w-[90%] absolute  h-[40vh]  self-center flex justify-center py-5 font-sans top-0 right-[7px]"
          : "w-[100%] relative  h-full items-center self-center flex font-sans top-0"
      }
    >
      <BsList
        onClick={openHandler}
        className={
          showNav
            ? " hidden "
            : " absolute right-[10px] text-[35px]  text-white lg:hidden hover:text-[#ffc107] "
        }
      />

      <AiOutlineClose
        onClick={openHandler}
        className={
          showNav
            ? " absolute text-[35px]   z-40 p-[3px] top-[15px] right-[15%] text-bolder  text-white lg:hidden hover:text-[#ffc107] "
            : " hidden "
        }
      />

      <ul
        className={
          showNav
            ? " block leading-relaxed top-[30px]   transition-transform  text-white lg:flex  absolute duration-600 w-[100%] content-center"
            : " hidden lg:flex justify-between items-center duration-700 "
        }
      >
        <li className=" font-semibold duration-300 list-none hover:text-[#ffc107] px-[25px] cursor-pointer ">
          <a href="#home"> HOME</a>
        </li>
        <li className=" font-semibold duration-300 list-none hover:text-[#ffc107] px-[25px] cursor-pointer ">
          <a href="#menu"> MENU</a>
        </li>
        <li className=" font-semibold duration-300 list-none hover:text-[#ffc107] px-[25px] cursor-pointer ">
          <a href="#about">ABOUT</a>
        </li>
        <li className=" font-semibold duration-300 list-none hover:text-[#ffc107] px-[25px] cursor-pointer ">
          <a href="#booking">BOOK TABLE</a>
        </li>
        <li className="ml-[5px]">
          <ul className="flex flex-row justify-between items-center w-[60%] lg:w-[100%] ">
            <BsFillPersonFill className=" font-bold text-[15px] cursor-pointer hover:text-[#ffc107] duration-300  mr-[15px]" />
            <BsFillCartFill className=" font-bold text-[15px] cursor-pointer hover:text-[#ffc107] duration-300  mr-[15px]" />
            <FaSearch className=" font-bold text-[15px] cursor-pointer hover:text-[#ffc107] duration-300  mr-[15px]" />

            <span className=" cursor-pointer mx-auto w-[100px] lg:w-[130px] lg:mx-auto md:ml-[5px] hover:bg-yellow-600 bg-[#ffc107] py-[4px] md:py-[8px] px-1 md:px-4 rounded-full duration-300">
              Order Online
            </span>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
