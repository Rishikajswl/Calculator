import React from "react";
import { useDrop } from "react-dnd";
import useCalculatorStore from "../store/useCalculatorStore";
import { v4 as uuidv4 } from "uuid";

const DropZone = () => {
  const { appendValue } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT", 
    drop: (item) => {
      appendValue(item.label); 
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), 
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-1/3 mb-2 h-20 border-2 border-dashed flex items-center justify-center ${
        isOver ? "bg-green-200" : "bg-white"
      }`}
    >
      Drop Components Here
    </div>
  );
};

export default DropZone;
