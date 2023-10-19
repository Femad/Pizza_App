import React, { useState } from "react";

import Hero from "./components/Hero";
import mealData from "./components/FoodApi";
import Meal from "./components/Meal";
import OrderNow from "./components/OrderNow";
import offer_img1 from "./assets/o1.jpg";
import offer_img2 from "./assets/o2.jpg";

const App = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCategory = (category) => {
    const filteredFoods = mealData.filter((item) => {
      return item.category === category;
    });
    setFoods(filteredFoods);
  };
  return (
    <div className="">
      <Hero />
      <section className="pt-[30px] px-[10px] my-[40px] mx-auto lg:flex lg:justify-evenly  ">
        <OrderNow
          offer_img={offer_img1}
          daysCaption={"Tasty Thursdays"}
          amountOff={20}
        />
        <OrderNow
          offer_img={offer_img2}
          daysCaption={"Pizza Days"}
          amountOff={15}
        />
      </section>

      {/* meals section */}
      <section className="flex mx-auto justify-center flex-col items-center">
        <h2 className="italic font-mono font-extrabold text-[30px] pb-[50px]">
          Our Menu
        </h2>
        <article className="mt-[20px] flex justify-center items-center flex-col w-[90%]">
          <section className=" flex justify-evenly lg:justify-around items-center w-[80%] lg:w-[50%]">
            <button
              onClick={() => setFoods(mealData)}
              className="py-[3px] px-[6px] rounded-[10px] text-center font-bold hover:text-white mr-2 hover:bg-black border-[1px] focus:text-white focus:bg-black"
            >
              All
            </button>
            <button
              onClick={() => filterCategory("burger")}
              className="py-[3px] px-[6px] rounded-[10px] text-center font-bold hover:text-white hover:bg-black border-[1px] focus:text-white focus:bg-black"
            >
              Burger
            </button>
            <button
              onClick={() => filterCategory("pizza")}
              className="py-[3px] px-[6px] rounded-[10px] text-center font-bold hover:text-white hover:bg-black border-[1px] focus:text-white focus:bg-black"
            >
              Pizza
            </button>
            <button
              onClick={() => filterCategory("pasta")}
              className="py-[3px] px-[6px] rounded-[10px] text-center font-bold hover:text-white hover:bg-black border-[1px] focus:text-white focus:bg-black"
            >
              Pasta
            </button>
            <button
              onClick={() => filterCategory("fries")}
              className="py-[3px] px-[6px] rounded-[10px] text-center font-bold hover:text-white hover:bg-black border-[1px]  focus:text-white focus:bg-black"
            >
              Fries
            </button>
          </section>
          <section className="mt-[30px] md:flex w-[100%] md:justify-center mx-auto md:flex-wrap h-[auto]">
            {foods.map((item) => {
              return (
                <Meal
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  detailText={item.detailText}
                  price={item.price}
                />
              );
            })}
          </section>
        </article>
      </section>
    </div>
  );
};

export default App;
