/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "budget-gradient":
          "linear-gradient(90deg, rgba(18,16,62,1) 0%, rgba(39,39,95,1) 45%)",
      },
      boxShadow: {
        clock: "0 5px 10px rgba(0, 0, 0, 0.2)", // Clock shadow
      },
    },
  },
  plugins: [scrollbar],
};
