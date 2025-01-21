import React, { useEffect, useState } from "react";
import FrontSide from "./FrontSide";
import HistoryTab from "./HistoryTab";
import { CalculatorProvider } from "../../context/CalculatorContext";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("");
  const [timeline, setTimeline] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const calculatorHandler = (btnValue) => {
    if (btnValue === "C") {
      setTimeline(timeline.slice(0, -1));
    } else if (btnValue === "AC") {
      setTimeline("");
      setResult("");
    } else if (btnValue === "=") {
      if (timeline === "") return alert("Enter value to proceed!");
      if (!/[+\-\/\*]/.test(timeline))
        return alert("Perform operation to proceed!");
      setResult(eval(timeline));
      setHistory((prev) => [{ result: eval(timeline), timeline }, ...prev]);
      setTimeline("");
    } else {
      setResult("");
      setTimeline((prev) => prev + btnValue);
    }
  };

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("calc"));
    if (history && history.length > 0) {
      setHistory(history);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calc", JSON.stringify(history));
  }, [history]);

  return (
    <CalculatorProvider
      value={{
        result,
        timeline,
        history,
        showHistory,
        setHistory,
        setShowHistory,
        calculatorHandler,
      }}
    >
      <section className="w-screen h-screen bg-orange-300 flex flex-col justify-center items-center relative">
        <Link to="/" className="mb-4">
          <i className="ri-home-7-fill text-3xl text-white"></i>
        </Link>
        {showHistory ? <HistoryTab /> : <FrontSide />}
      </section>
    </CalculatorProvider>
  );
};

export default Calculator;
