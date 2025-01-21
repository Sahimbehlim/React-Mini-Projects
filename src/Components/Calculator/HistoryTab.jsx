import React from "react";
import { useCalculator } from "../../context/CalculatorContext";

const HistoryTab = () => {
  const { history, setShowHistory, setHistory } = useCalculator();
  return (
    <div className="bg-[#ebebeb] h-72 w-[90%] md:w-1/2 xl:w-1/3 overflow-auto rounded-2xl px-4 py-3 flex flex-col items-end gap-3 absolute scrollbar">
      <i
        onClick={() => setShowHistory(false)}
        className="ri-arrow-go-back-line text-2xl cursor-pointer text-[#3c3d46]"
      ></i>
      <div className="flex flex-col gap-3 text-right">
        {history.map((item, index) => (
          <ul key={index}>
            <li>{item.timeline}</li>
            <li className="font-semibold text-[18px] text-green-600">
              ={item.result}
            </li>
          </ul>
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("calc");
          setHistory([]);
          setShowHistory(false);
        }}
        className="mt-auto mb-1 bg-black text-white px-3 py-2 rounded-md transition-all active:scale-95"
      >
        Clear All
      </button>
    </div>
  );
};

export default HistoryTab;
