import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*+-~";

    for (let index = 0; index < length; index++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <section className="min-h-screen w-screen bg-sky-800 flex flex-col justify-center items-center">
      <Link to="/" className="mb-4">
        <i className="ri-home-7-fill text-3xl text-white"></i>
      </Link>
      <div className="bg-white p-5 sm:p-8 rounded-md shadow-lg flex flex-col gap-5 select-none">
        <h1 className="text-xl sm:text-2xl  text-center font-medium">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden">
          <input
            ref={passwordRef}
            type="text"
            placeholder="Password"
            value={password}
            className="w-full outline-none py-1 px-3 bg-black text-white"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 px-4 py-2 text-white shrink-0 transition-all active:bg-blue-400"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col text-black gap-y-2 sm:flex-row sm:gap-x-3 sm:items-center sm:gap-y-0">
          <div className="flex sm:gap-x-1 gap-x-2 items-center">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length ({length})</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
