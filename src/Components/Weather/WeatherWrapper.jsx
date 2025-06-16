import WeatherProvider from "../../context/WeatherContext";
import Weather from "./Weather";

const WeatherWrapper = () => {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
};

export default WeatherWrapper;
