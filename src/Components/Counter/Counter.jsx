import React, { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  let [count, setCount] = useState(0);
  const decrem = () => {
    if (count > 0) {
      setCount((count = count - 1));
    } else {
      alert("Sorry, Zero Limit Reached !");
    }
  };
  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#7ea02d]">
        <Link to="/" className="mb-4">
          <i className="ri-home-7-fill text-3xl text-white"></i>
        </Link>
        <div className="bg-white shadow-lg w-64 rounded-md px-3 py-6">
          <h1 className="text-2xl text-center ">Counter : {count}</h1>
          <div className="flex justify-evenly items-center mt-5">
            <button
              onClick={() => setCount((count = count + 1))}
              className="bg-green-700 p-3 rounded-md text-white"
            >
              Increm
            </button>
            <button
              onClick={decrem}
              className=" bg-red-700 p-3 rounded-md text-white"
            >
              Decrem
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
