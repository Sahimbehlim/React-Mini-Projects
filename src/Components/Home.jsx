import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      name: "Password Generator",
      className: "ri-keyboard-line",
    },
    { name: "Recipe App", className: "ri-restaurant-line" },
    {
      name: "Shadow Generator",
      className: "ri-shadow-line",
    },
    {
      name: "Background Changer",
      className: "ri-color-filter-line",
    },
    {
      name: "Counter",
      className: "ri-add-line",
    },
    {
      name: "Calculator",
      className: "ri-calculator-line",
    },
    {
      name: "Budget Tracker",
      className: "ri-coin-line",
    },
    {
      name: "Digital Clock",
      className: "ri-time-line",
    },
    {
      name: "Dynamic Gallery",
      className: "ri-gallery-line",
    },
    {
      name: "Currency Converter",
      className: "ri-currency-line",
    },
    {
      name: "Todo App",
      className: "ri-todo-line",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section className="min-h-screen w-full bg-gray-100 flex flex-col gap-6 py-6 items-center">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center">
        React Mini Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <Link to={card.name.toLowerCase().split(" ").join("-")} key={index}>
            <div className="bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center py-5 px-6 rounded-md w-[250px] h-full flex flex-col justify-center items-center transition-all ease-linear hover:scale-90 cursor-pointer hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              <div className="mt-3">
                <i
                  className={`${card.className} text-black p-5 border-2 border-black rounded-full text-[40px]`}
                ></i>
              </div>
              <h2 className="font-semibold text-[20px] pt-5">{card.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
