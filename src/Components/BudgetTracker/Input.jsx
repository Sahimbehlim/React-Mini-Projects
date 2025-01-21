import React from "react";

const Input = ({
  type = "text",
  className = "",
  value,
  onChange,
  placeholder = "",
  ...rest
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} bg-gray-300 px-3 py-2 font-medium focus:outline-none`}
      {...rest}
    />
  );
};

export default Input;
