import React, { useState } from "react";

import Hero from "./components/Hero";
import {
  mealData,
  orderNow,
  catButon,
  testimonies,
} from "./components/FoodApi";
import Meal from "./components/Meal";
import OrderNow from "./components/OrderNow";
import FilterBtn from "./components/FilterBtn";
import AboutUs from "./components/AboutUs";
import Booking from "./components/Booking";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";

const App = () => {
  const [foods, setFoods] = useState(mealData);
  const [selectedFood, setSelectedFood] = useState({
    id: "",
    img: "",
    name: "",
    price: "",
  });

  const filterCategory = (category) => {
    const filteredFoods = mealData.filter((item) => {
      return item.category === category;
    });
    setFoods(filteredFoods);
  };
  const copyObject = (id) => {
    const id1 = mealData.filter((item) => item.id === id);
    console.log(id1);
    setSelectedFood(id1);
    console.log(selectedFood);
  };
  return (
    <div id="home">
      <Hero />
      <section className="pt-[30px] px-[10px] my-[40px] mx-auto lg:flex lg:justify-evenly  ">
        {orderNow.map((item) => {
          return (
            <OrderNow
              key={item.id}
              offer_img={item.image}
              daysCaption={item.dayCaption}
              amountOff={item.amountOff}
            />
          );
        })}
      </section>

      {/* meals section */}
      <section
        id="menu"
        className="flex mx-auto justify-center flex-col items-center"
      >
        <h2 className="italic font-[cursive] font-extrabold text-[40px] pb-[50px]">
          Our Menu
        </h2>
        <article className="mt-[20px] flex justify-center items-center flex-col w-[90%]">
          <section className=" flex justify-evenly lg:justify-around items-center w-[80%] lg:w-[50%]">
            {/* filter button section */}
            <button
              onClick={() => setFoods(mealData)}
              className="py-[3px] px-[8px] rounded-[15px] text-center font-bold hover:text-white mr-2 hover:bg-black border-[1px] focus:text-white focus:bg-black"
            >
              All
            </button>
            {catButon.map((item) => {
              return (
                <FilterBtn
                  key={item.id}
                  onClick={() => filterCategory(item.catValue)}
                  btnValue={item.btnValue}
                />
              );
            })}
          </section>
          {/* meal section */}
          <section className="mt-[30px] md:flex w-[100%] md:justify-center mx-auto md:flex-wrap h-[auto]">
            {foods.map((item) => {
              return (
                <Meal
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  detailText={item.detailText}
                  price={item.price}
                  onClick={() => copyObject(item.id)}
                />
              );
            })}
          </section>
          <button className="bg-[#ffc107]  hover:bg-[#dbad24] justify-center flex mx-auto items-center mt-[50px] mb-[70px] text-white p-[8px] rounded-full w-[180px] ">
            View More
          </button>
        </article>
      </section>
      {/* About section */}
      <section className="bg-[#222831] px-[15px]" id="about">
        <AboutUs />
      </section>
      {/* Booking a table section */}
      <section id="booking">
        <Booking />
      </section>
      {/* Testimonies section */}
      <section className="w-[100%] px-[15px] mx-auto pb-[30px]">
        <h2 className="my-[30px] py-4 mx-auto text-center text-[35px] font-[cursive] italic font-semibold">
          What Our Costumers Are Saying
        </h2>
        <section className="w-[95%] md:flex mb-[50px]">
          {testimonies.map((item) => {
            return (
              <Testimonies
                key={item.id}
                img={item.image}
                name={item.name}
                text={item.testimonyText}
              />
            );
          })}
        </section>
      </section>
      <section className="bg-[#222831] py-[35px] mx-auto ">
        <Footer />
      </section>
    </div>
  );
};

export default App;
