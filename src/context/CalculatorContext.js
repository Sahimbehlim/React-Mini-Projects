import { createContext, useContext } from "react";

export const CalculatorContext = createContext({
  result: "",
  timeline: "",
  showHistory: false,
  history: [],
  setShowHistory: () => {},
  setHistory: () => {},
  calculatorHandler: () => {},
});

export const CalculatorProvider = CalculatorContext.Provider;

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
