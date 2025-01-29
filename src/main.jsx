import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  PasswordGenerator,
  Recipe,
  Home,
  ShadowGenerator,
  BgChanger,
  Counter,
  BudgetTracker,
  DigitalClock,
  DynamicGallery,
  Calculator,
  CurrencyConverter,
  ToDo,
} from "./Components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="password-generator" element={<PasswordGenerator />} />
      <Route path="recipe-app" element={<Recipe />} />
      <Route path="shadow-generator" element={<ShadowGenerator />} />
      <Route path="background-changer" element={<BgChanger />} />
      <Route path="counter" element={<Counter />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="budget-tracker" element={<BudgetTracker />} />
      <Route path="digital-clock" element={<DigitalClock />} />
      <Route path="dynamic-gallery" element={<DynamicGallery />} />
      <Route path="currency-converter" element={<CurrencyConverter />} />
      <Route path="todo-app" element={<ToDo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
