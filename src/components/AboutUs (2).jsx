import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-24 md:gap-8">
      <div className=" w-[60%]md:w-[50%] ">
        <img
          src="/src/assets/about-img.png"
          alt=""
          className=" object-contain md:w-[90%] mx-auto"
        />
      </div>
      <div className="md:w-[50%] flex flex-col justify-center">
        <h2 className="text-white font-[cursive]  font-extrabold mb-[12px] italic text-[30px]">
          We Are Feane
        </h2>
        <p className="text-white pb-[30px] font-[Open Sans] text-[16px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </p>
        <button className="bg-[#ffc107]  hover:bg-[#dbad24] justify-center flex  items-center mt-[10px] mb-[70px] text-white p-[10px] rounded-full w-[200px] ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
