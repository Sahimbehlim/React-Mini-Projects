import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  FormValidation,
  WeatherWrapper,
} from "./Components/index";

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="form-validation" element={<FormValidation />} />
        <Route path="weather-app" element={<WeatherWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
