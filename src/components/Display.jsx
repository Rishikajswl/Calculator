import React from "react";
import useCalculatorStore from "../store/useCalculatorStore";

const Display = () => {
  const { expression, result } = useCalculatorStore();

  return (
    <div className="bg-gray-200 text-black p-4 text-right text-2xl rounded-md h-24 mb-4">
      {/* Display the ongoing expression or "0" if empty */}
      <div className="text-xl">{expression || "0"}</div>

      {/* Display the result or "Error" if invalid */}
      <div className="text-xl text-gray-600">{result || ""}</div>
    </div>
  );
};

export default Display;
