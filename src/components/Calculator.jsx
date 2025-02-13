import React from "react";
import useCalculatorStore from "../store/useCalculatorStore";
import Button from "./Button";
import Display from "./Display"; // Import the Display component

const Calculator = () => {
  const { undo, redo } = useCalculatorStore();

  const row1 = [  "sqrt","log","7", "8", "9"];
  const row2 = [ "ln", "π","4", "5", "6"];
  const row3 = ["+","0","1", "2", "3"];
  const row4 = ["-","/", "*", "=", "C","(",")"];
  const row5 = ["x^y", "1/x", "sin", "cos", "tan"];

  return (
    <div className="w-80 p-6 bg-gray-800 rounded-lg shadow-lg ">
      {/* Display Expression and Result */}
      <Display />

      {/* Undo/Redo Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={undo}
          className="bg-yellow-400 p-2 rounded-md text-lg font-semibold"
        >
          Undo
        </button>
        <button
          onClick={redo}
          className="bg-blue-400 p-2 rounded-md text-lg font-semibold"
        >
          Redo
        </button>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-5 gap-2 mb-4 mr-5">
        {row1.map((btn, index) => (
          <Button key={index} label={btn} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-5 gap-2 mb-4 mr-5">
        {row2.map((btn, index) => (
          <Button key={index} label={btn} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-5 gap-2 mb-4 mr-5">
        {row3.map((btn, index) => (
          <Button key={index} label={btn} />
        ))}
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-7 gap-2 mb-4 mr-9">
        {row4.map((btn, index) => (
          <Button key={index} label={btn} />
        ))}
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-5 gap-2 mb-4 mr-5">
        {row5.map((btn, index) => (
          <Button key={index} label={btn} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;







