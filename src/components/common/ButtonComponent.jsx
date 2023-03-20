import React from "react";

const ButtonComponent = ({ classname, onClick, children }) => {
  return (
    <button
      className={`inline-block font-[500] text-base leading-[21px] border  px-2 sm:px-4 py-1 sm:py-2 cursor-pointer ${classname}`}
        onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
