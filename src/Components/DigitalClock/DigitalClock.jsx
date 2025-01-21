import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimeBox from "./TimeBox";

const DigitalClock = () => {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [period, setPeriod] = useState("");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const time = setInterval(() => {
      const now = new Date();
      let currentHour = now.getHours();
      const currentPeriod = currentHour < 12 ? "AM" : "PM";

      // Convert to 12-hour format
      currentHour = currentHour % 12 || 12;

      setHour(String(currentHour).padStart(2, "0"));
      setMinutes(String(now.getMinutes()).padStart(2, "0"));
      setSeconds(String(now.getSeconds()).padStart(2, "0"));
      setPeriod(currentPeriod);
    }, 1000);

    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(mode);

    return () => clearInterval(time);
  }, []);

  const modeHandler = () => {
    const currentMode = mode === "light" ? "dark" : "light";
    setMode(currentMode);
    document.querySelector("html").classList.replace(mode, currentMode);
  };

  return (
    <section
      style={{ fontFamily: "orbitron" }}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f0f8ff] px-4 *:transition-all *:duration-500 *:ease-linear"
    >
      <Link to="/" className="mb-4">
        <i className="ri-home-7-fill text-3xl text-[#222]"></i>
      </Link>
      <main className="bg-white shadow-clock rounded-md relative w-full max-w-xl flex flex-col gap-y-5 items-center justify-center pb-8 pt-4 dark:bg-[#323840]">
        <div
          onClick={modeHandler}
          className="bg-[#24292D] w-7 h-7 rounded-[50%] text-sm cursor-pointer flex items-center justify-center dark:bg-white"
        >
          <i
            className={`${mode === "light" ? "ri-moon-fill" : "ri-sun-fill"} text-white dark:text-black`}
          ></i>
        </div>
        <div className="flex items-center">
          {[
            { number: hour, text: "hours", marker: ":" },
            { number: minutes, text: "minutes", marker: ":" },
            { number: seconds, text: "seconds", marker: period },
          ].map((box, index) => (
            <TimeBox
              key={index}
              number={box.number}
              text={box.text}
              marker={box.marker}
              index={index}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default DigitalClock;
