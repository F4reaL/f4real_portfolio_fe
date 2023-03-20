import React, { useRef, useState, memo } from "react";
const InputComponent = ({ type, placeholder, value, setValue, name, required }) => {
  const textArea = useRef(null);
  const typeMessage = (e) => {
    setValue(e.target.value);
    if (textArea.current) {
      textArea.current.style.height = "116px";
      textArea.current.style.height = textArea.current.scrollHeight + "px";
    }
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {type === "textbox" ? (
        <textarea
          ref={textArea}
          placeholder={placeholder}
          className="max-h-[240px] overflow-auto outline-none bg-transparent border border-cadet-blue font-[400] text base w-full p-2 resize-none"
          rows={4}
          value={value}
          onChange={typeMessage}
          name={name}
          required
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          className="outline-none bg-transparent border border-cadet-blue font-[400] text base w-full p-2"
          value={value}
          onChange={handleInputChange}
          name={name}
          required={required}
        />
      )}
    </>
  );
};

export default memo(InputComponent);
