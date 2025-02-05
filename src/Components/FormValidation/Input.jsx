import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  onChangeHandler,
  placeholder = "",
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChangeHandler}
      className={`${className} bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-600 outline-none`}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
