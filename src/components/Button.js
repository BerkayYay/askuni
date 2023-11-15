import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
