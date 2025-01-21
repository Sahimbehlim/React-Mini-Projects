import React from "react";

const TimeBox = ({ number = "00", text = "units", marker = ":", index }) => {
  return (
    <div className="flex items-center relative">
      <div className="flex flex-col sm:gap-y-1 justify-center items-center bg-[#F0F8FF] rounded-md shadow-clock px-4 py-3 sm:px-6 sm:py-4 dark:bg-[#24292d]">
        <span className="text-2xl sm:text-4xl font-semibold dark:text-white">
          {number}
        </span>
        <span className="font-bold text-[10px] sm:text-[12px] capitalize text-gray-600 dark:text-gray-400">
          {text}
        </span>
      </div>
      <span
        className={`uppercase font-bold ${index === 2 ? "absolute -top-1 -right-6 sm:-right-9 text-[9px] sm:text-sm" : "mx-3 text-2xl sm:text-4xl"} dark:text-white`}
      >
        {marker}
      </span>
    </div>
  );
};

export default TimeBox;
