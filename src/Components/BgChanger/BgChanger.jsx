import React, { useState } from "react";
import { Link } from "react-router-dom";

function BgChanger() {
  const [color, setColor] = useState("#213363");
  return (
    <section
      style={{ background: color }}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-4 transition-all duration-300`}
    >
      <Link to="/" className="mb-4">
        <i
          className={`ri-home-7-fill text-3xl ${color == "White" || color == "Yellow" || color == "Pink" ? "text-black" : "text-white"}`}
        ></i>
      </Link>
      <div className="bg-white text-white rounded-lg shadow-lg px-4 py-3 flex flex-wrap gap-4">
        {[
          "Red",
          "Green",
          "Blue",
          "Olive",
          "Gray",
          "Purple",
          "Black",
          "Yellow",
          "White",
          "Pink",
        ].map((color, index) => {
          return (
            <button
              onClick={() => setColor(color)}
              style={{ backgroundColor: color }}
              key={index}
              className={`px-4 py-2 rounded-full ${index > 6 && "text-black"}`}
            >
              {color}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default BgChanger;
