import React from "react";

const Divider = ({ direction = "horizontal", color = "gray" }) => {
  const className = `border-${
    direction === "vertical" ? "right" : "bottom"
  } border-${color}-500 border my-2`;

  return <div className={className}></div>;
};

export default Divider;
