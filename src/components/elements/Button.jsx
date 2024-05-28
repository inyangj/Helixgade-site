import React from "react";

const Button = ({ onClick, className, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={` shadow-btnShadow text-lg  border  rounded-[10px] ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
