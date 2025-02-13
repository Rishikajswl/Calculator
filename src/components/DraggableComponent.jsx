import React from "react";
import { useDrag } from "react-dnd";

const DraggableComponent = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { id: crypto.randomUUID(), type, label }, 
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-gray-500 text-white rounded-md cursor-grab ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {label}
    </div>
  );
};

export default DraggableComponent;
