import React from "react";
import useCalculatorStore from "../store/useCalculatorStore";

const Button = ({ label }) => {
  const { appendValue, calculateResult, clearExpression } = useCalculatorStore();
  const { isDarkMode } = useCalculatorStore();

  const handleClick = () => {
    if (label === "=") {
      calculateResult(); // Evaluate the expression
    } else if (label === "C") {
      clearExpression(); // Clear input
    } else {
      appendValue(label); // Append numbers/operators
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isDarkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-300 hover:bg-gray-400"
      } text-black p-4 text-xl rounded-md m-1 w-16 transition-all`}
    >
      {label}
    </button>
  );
};

export default Button;

  