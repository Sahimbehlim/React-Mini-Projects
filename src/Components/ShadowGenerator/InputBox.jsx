import React, { useId } from "react";

const InputBox = ({
  label = "",
  type = "number",
  isReadOnly = false,
  value,
  onChangeHandler,
}) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={`font-semibold capitalize`}>
        {label}:
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={`border border-gray-400 w-full h-full outline-none rounded-md p-2 ${
          type === "color" && "bg-transparent p-0"
        } ${isReadOnly && "bg-[#f3f4f6]"} ${
          type === "text" ? "font-semibold py-3" : "font-medium"
        }`}
        readOnly={isReadOnly}
      />
    </div>
  );
};

export default InputBox;
