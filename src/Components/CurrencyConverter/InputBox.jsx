import React, { useState } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency,
  onCurrencyChange,
  className,
  inputDisabled = false,
  imgSrc,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-1">
      <label className="font-semibold text-white">{label}</label>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <div
          className="flex items-center w-full justify-center gap-2 border-[1px] border-[rgba(255, 255, 255, .3)] 
        sm:py-[0px] py-[6px] px-[2px] sm:px-[0px] rounded-md bg-[#ffffff1a]"
        >
          <img
            src={`https://flagsapi.com/${imgSrc}/flat/64.png`}
            className="w-12 sm:w-14"
            alt="flagImg"
          />
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="bg-transparent w-1/2 uppercase outline-none cursor-pointer font-bold text-[16px] sm:text-[17px] text-white"
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency} className="text-black">
                {currency}
              </option>
            ))}
          </select>
        </div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={inputDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`py-4 px-3 bg-[#ffffff1a] text-white border-[1px] rounded-md font-bold text-[16px] sm:text-[17px] outline-none w-44 ${className} w-full`}
        />
      </div>
    </div>
  );
};

export default InputBox;
