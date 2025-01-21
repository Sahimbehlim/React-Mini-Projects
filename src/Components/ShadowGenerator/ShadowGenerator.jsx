import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import InsetSwitch from "./InsetSwitch";

const ShadowGenerator = () => {
  const [xOffset, setxOffset] = useState(0);
  const [yOffset, setyOffset] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [transparency, setTransparency] = useState(100);
  const [insetSwitch, setinsetSwitch] = useState(false);

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    const [r, g, b] = [0, 2, 4].map((i) =>
      parseInt(hex.substring(i, i + 2), 16)
    );
    return `rgba(${r}, ${g}, ${b}, ${transparency / 100})`;
  };
  const rgbaColor = hexToRgb(color);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 50) {
      setter(value);
    } else {
      alert("Value must be between 0-50");
    }
  };

  const cssCode = `box-shadow: ${
    insetSwitch ? "inset " : ""
  }${xOffset}px ${yOffset}px ${blur}px ${spread}px ${rgbaColor};`;

  const tailwindCode = `${
    insetSwitch ? "inset-" : ""
  }shadow-[${xOffset}px_${yOffset}px_${blur}px_${spread}px_${rgbaColor}]`;

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#325933] to-[#266880] flex flex-col justify-center items-center">
      <Link to="/" className="mb-4">
        <i className="ri-home-7-fill text-3xl text-white"></i>
      </Link>
      <div className="bg-white shadow-lg w-[90%] sm:w-[80%] lg:w-1/2 p-4 rounded-md flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold">Shadow Generator</h1>
          <InsetSwitch
            value={insetSwitch}
            handler={() => setinsetSwitch(!insetSwitch)}
          />
        </div>
        <div className="grid sm:grid-cols-4 gap-3">
          <InputBox
            label="x offset"
            value={xOffset}
            onChangeHandler={handleInputChange(setxOffset)}
          />
          <InputBox
            label="y offset"
            value={yOffset}
            onChangeHandler={handleInputChange(setyOffset)}
          />
          <InputBox
            label="blur"
            value={blur}
            onChangeHandler={handleInputChange(setBlur)}
          />
          <InputBox
            label="spread"
            value={spread}
            onChangeHandler={handleInputChange(setSpread)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <InputBox
            label="color"
            type="color"
            value={color}
            onChangeHandler={(e) => setColor(e.target.value)}
          />
          <InputBox
            label="transparency"
            value={transparency}
            onChangeHandler={(e) =>
              e.target.value >= 0 && e.target.value <= 100
                ? setTransparency(e.target.value)
                : alert("Value must be between 0-100")
            }
          />
        </div>
        <div className="grid gap-4">
          <InputBox label="CSS code" isReadOnly type="text" value={cssCode} />
          <InputBox
            label="tailwind code"
            isReadOnly
            type="text"
            value={tailwindCode}
          />
        </div>
      </div>
    </section>
  );
};

export default ShadowGenerator;
