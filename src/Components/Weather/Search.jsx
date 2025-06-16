import { useWeather } from "../../context/WeatherContext";

const Search = () => {
  const { cityName, setCityName, getCityCoordinates } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityCoordinates();
  };

  return (
    <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-md">
      <input
        type="search"
        className="w-full outline-none border-none py-1 px-3.5 text-black placeholder:text-[#6b7280] placeholder:text-sm"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name..."
        required
      />
      <button className="text-sm py-2 px-4 shrink-0 border-none cursor-pointer bg-[#0284c7] hover:bg-[#0ea5e9] transition-all duration-200">
        Search
      </button>
    </form>
  );
};

export default Search;
