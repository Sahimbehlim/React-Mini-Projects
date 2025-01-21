import React from "react";
import { useCalculator } from "../../context/CalculatorContext";

const FrontSide = () => {
  const { result, timeline, history, calculatorHandler, setShowHistory } =
    useCalculator();

  return (
    <div className="bg-[#ebebeb] rounded-2xl px-4 py-6 flex flex-col gap-4 w-[90%] md:w-1/2 xl:w-1/3 ">
      <div className="text-right flex flex-col gap-2 text-[#3c3d46]">
        <input
          type="text"
          value={result}
          className={`outline-none text-right font-medium text-3xl bg-transparent ${
            result !== "" ? "block" : "hidden"
          }`}
          readOnly
        />
        <h2 className="text-[18px]">{timeline}</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 text-[#989a9e] font-medium ">
        <button
          onClick={() => setShowHistory(true)}
          className={`transition-all active:scale-90 disabled:pointer-events-none disabled:text-red-500 text-2xl`}
          disabled={history.length === 0}
        >
          <i className="ri-history-line"></i>
        </button>
        {[
          "AC",
          "C",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <button
            onClick={(e) => calculatorHandler(e.target.value)}
            key={btn}
            value={btn}
            className={`bg-[#efedee] px-3 py-2 shadow-lg rounded-md transition-all active:scale-90 ${
              btn === "=" ? "bg-orange-500 text-[#fff] col-span-2" : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrontSide;
