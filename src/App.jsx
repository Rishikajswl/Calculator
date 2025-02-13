import React from "react";
import useCalculatorStore from "./store/useCalculatorStore";
import Calculator from "./components/Calculator";
import DraggableComponent from "./components/DraggableComponent";
import DropZone from "./components/DropZone";

const App = () => {
  const buttons = [
    { type: "number", label: "0" },
    { type: "number", label: "1" },
    { type: "number", label: "2" },
    { type: "number", label: "3" },
    { type: "number", label: "4" },
    { type: "number", label: "5" },
    { type: "number", label: "6" },
    { type: "number", label: "7" },
    { type: "number", label: "8" },
    { type: "number", label: "9" },
    { type: "operator", label: "+" },
    { type: "operator", label: "-" },
    { type: "operator", label: "*" },
    { type: "operator", label: "/" },
    { type: "clear", label: "C" },
    { type: "sqrt", label: "sqrt" },
    { type: "log", label: "log" },
    { type: "ln", label: "ln" },
    { type: "sin", label: "sin" },
    { type: "cos", label: "cos" },
    { type: "tan", label: "tan" },
    { type: "pi", label: "π" },
    { type: "exp", label: "x^y" },
    { type: "factorial", label: "!" },
    { type: "inverse", label: "1/x" },
    { type: "openParen", label: "(" },  
    { type: "closeParen", label: ")" },
  ];

  const { toggleDarkMode, isDarkMode } = useCalculatorStore();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-4">📱 Drag & Drop Calculator</h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="mb-6 p-2 rounded-lg text-lg font-semibold bg-blue-900 text-white"
      >
        Toggle {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Draggable Button Toolbar */}
      <div className="bg-gray-600 text-black p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-2">🖱️ Drag Components</h2>
        <div className="grid grid-cols-14 gap-2"> 
          {buttons.map((btn, index) => (
            <DraggableComponent key={index} id={index} {...btn} />
          ))}
        </div>
      </div>

      <DropZone />

      <Calculator />
    </div>
  );
};

export default App;


