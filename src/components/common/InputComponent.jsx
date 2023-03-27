import React, { useRef, memo } from "react";
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
          className="max-h-[240px] overflow-auto outline-none bg-transparent border border-cadet-blue font-[400] text base w-full p-2 resize-none focus:border-lavender"
          rows={4}
          value={value}
          onChange={typeMessage}
          name={name}
          required
        ></textarea>
      ) : (
        <input
          type={type === "email" ? type:""}
          placeholder={placeholder}
          className="outline-none bg-transparent border border-cadet-blue font-[400] text base w-full p-2 focus:border-lavender"
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
