import React, { useEffect, useState } from "react";
import InputBox from "./InputBox.jsx";
import { Link } from "react-router-dom";

const CurrencyConverter = () => {
  const [data, setData] = useState({});
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const options = Object.keys(data);

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${from}.json`)
      .then((res) => res.json())
      .then((result) => {
        setData(result[from]);
        setLoading(false);
      });
  }, [from]);

  const convertCurrency = () => {
    if (amount < 0) {
      setErrorMsg("Amount Can't Be Negative");
      setConvertedAmount(0);
    } else if (amount === 0) {
      setErrorMsg("Amount Can't Be Zero");
      setConvertedAmount(0);
    } else {
      setErrorMsg("");
      setConvertedAmount(amount * data[to]);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <section
      style={{ backgroundImage: `url('/bg-currency.png')` }}
      className="min-h-screen w-full py-6 sm:py-0 flex items-center justify-center bg-cover bg-no-repeat bg-center"
    >
      {loading ? (
        <p className="text-white text-3xl font-semibold">Loading....</p>
      ) : (
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-4">
            <i className="ri-home-7-fill text-3xl text-white"></i>
          </Link>
          <div className="bg-[#02072880] backdrop-blur-[30px] border-[1px] border-[rgba(255, 255, 255, .3)] p-6 rounded-xl flex flex-col items-center shadow-xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center pb-5">
              Currency Converter
            </h1>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amnt) => setAmount(amnt)}
              imgSrc={from.substring(0, 2).toUpperCase()}
            />
            <div
              onClick={swap}
              className="bg-[#ffffff1a] border-[1px] border-[rgba(255, 255, 255, .3)] cursor-pointer text-white w-10 h-10 flex items-center justify-center rounded-full mt-4 transition-all hover:bg-[#ffffff4d]"
            >
              <i className="ri-arrow-up-down-line text-[17px] sm::text-[20px]"></i>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              imgSrc={to.substring(0, 2).toUpperCase()}
              className={`cursor-not-allowed`}
              inputDisabled
            />
            {errorMsg != "" ? (
              <p className="py-5 font-bold text-white text-[16px] sm:text-[17px]">
                {errorMsg}
              </p>
            ) : null}
            <button
              onClick={convertCurrency}
              className={`bg-white text-black transition-all font-bold w-full px-4 py-3 rounded-md text-[16px] hover:bg-[#ffffffb3] sm:text-[17px] ${
                errorMsg === "" ? "mt-7" : null
              } `}
            >
              Convert From {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrencyConverter;
