import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

export const useCalculatorDisplay = () => {
  const context = useContext(CalculatorContext);

  if (!context)
    throw new Error(
      "useCalculatorContext must be used within a CalculatorProvider"
    );
  return context;
};
