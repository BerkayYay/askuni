import React from "react";
import { twMerge } from "tailwind-merge";

const RoundedText = ({ text, className, children }) => {
  return (
    <div
      className={twMerge(
        "rounded-xl bg-white py-1 px-2 mr-2 mb-2 border justify-center items-center flex",
        className
      )}
    >
      {children}
      {text}
    </div>
  );
};

export default RoundedText;
