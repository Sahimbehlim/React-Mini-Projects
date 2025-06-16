import { useWeather } from "../../context/WeatherContext";
import WeatherCard from "./WeatherCard";

const WeatherInfo = () => {
  const { todayWeather, fiveDayForecast } = useWeather();

  const weatherInfo = todayWeather?.info;
  const cityName = todayWeather?.cityName;
  const icon = weatherInfo?.weather?.[0]?.icon;
  const description = weatherInfo?.weather?.[0]?.description;

  if (!weatherInfo) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Top Box */}
      <div className="flex justify-between items-center gap-4">
        <WeatherCard cityName={cityName} weatherData={weatherInfo} currentDay />
        {icon && (
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              className="h-32 sm:h-40"
              alt="weather icon"
            />
            {description && (
              <p className="text-[#e5e7eb] italic capitalize">{description}</p>
            )}
          </div>
        )}
      </div>

      {/* Bottom Box */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          5-day forecast
        </h2>
        <div className="flex w-full flex-wrap gap-4">
          {fiveDayForecast?.map((data, index) => (
            <WeatherCard
              key={index}
              weatherData={data}
              className="flex-grow p-4 rounded-lg bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(171,203,222,0.05)_100%)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
