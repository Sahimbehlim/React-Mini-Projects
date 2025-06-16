const WeatherCard = ({ cityName, weatherData, currentDay, className }) => {
  if (!weatherData) return null;

  const date = weatherData.dt_txt?.split(" ")[0] ?? "N/A";
  const icon = weatherData.weather?.[0]?.icon;
  const temperatureC = weatherData.main?.temp
    ? (weatherData.main.temp - 273.15).toFixed(2)
    : "N/A";
  const windSpeed = weatherData.wind?.speed ?? "N/A";
  const humidity = weatherData.main?.humidity ?? "N/A";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h2
        className={`font-semibold text-white ${currentDay ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
      >
        {cityName && <span>{cityName} - </span>}
        <span>({date})</span>
      </h2>

      {!currentDay && icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          className="w-16"
          alt="weather icon"
        />
      )}

      <p className="text-[#d1d5db]">Temperature: {temperatureC}°C</p>
      <p className="text-[#d1d5db]">Wind: {windSpeed} M/S</p>
      <p className="text-[#d1d5db]">Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;
