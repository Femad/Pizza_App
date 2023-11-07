import React from "react";

const Booking = () => {
  return (
    <div className="w-[100% pt-[60px] md:flex md:items-center">
      <section className="w-[90%] mx-auto md:w-[45%]">
        <h2 className="font-[cursive] italic font-bold text-[33px] mb-7">
          Book A Table
        </h2>
        <form className="mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-[100%] text-[18px] indent-4  placeholder:text-black border-[1px] border-gray-400 p-[10px] mx-auto rounded-[5px] mb-5"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-[100%] text-[18px] indent-4 placeholder:text-black border-[1px] border-gray-400 p-[10px] mx-auto rounded-[5px] mb-5"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-[100%] text-[18px] indent-4 placeholder:text-black border-[1px] border-gray-400 p-[10px] mx-auto rounded-[5px] mb-5"
          />

          <select className="w-[100%] text-[18px] indent-4 placeholder:text-black border-[1px] border-gray-400 p-[10px] mx-auto rounded-[5px] mb-5">
            <option value="">How many persons?</option>
            <option value="2">2</option>
            <option value="4">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="date"
            className="w-[100%] text-[18px] indent-4 placeholder:text-black border-[1px] border-gray-400 p-[10px] mx-auto rounded-[5px] mb-5"
          />
          <button className="bg-[#ffc107]  hover:bg-[#dbad24] justify-center flex  items-center mt-[10px] mb-[70px] text-white p-[10px] rounded-full w-[200px] ">
            BOOK NOW
          </button>
        </form>
      </section>
      <section className="w-[90%] mx-auto md:w-[45%]">
        <iframe
          height="384"
          scrolling="no"
          style={{ borderRadius: "10px", width: "100%" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=372&amp;height=384&amp;hl=en&amp;q=road%203%20nepa%20cooperative%20housing%20estate%20road,%20ikorodu%20lagos+(tutorial)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
    </div>
  );
};

export default Booking;
