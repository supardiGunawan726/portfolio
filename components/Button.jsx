import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={
        className ||
        "inline-block px-[20px] py-[10px] font-bold text-white bg-primary rounded uppercase transition-colors ease-in-out duration-300 hover:bg-primary-dark hover:outline-none active:ring active:ring-offset-2 active:ring-primary"
      }
    >
      {children}
    </button>
  );
}
