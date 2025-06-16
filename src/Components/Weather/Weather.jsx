import { Link } from "react-router-dom";
import { useWeather } from "../../context/WeatherContext";
import Search from "./Search";
import DefaultScreen from "./DefaultScreen";
import Loader from "./Loader";
import ErrorBox from "./ErrorBox";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  const { loading, todayWeather, error } = useWeather();

  const renderContent = () => {
    if (loading) return <Loader text="Fetching weather..." />;
    if (error) return <ErrorBox errorMsg={error || "Something went wrong!"} />;
    if (todayWeather) return <WeatherInfo />;
    return <DefaultScreen />;
  };

  return (
    <section className="font-poppins w-full min-h-screen bg-no-repeat bg-contain bg-center text-white flex justify-center px-4 bg-gradient-to-r from-[#000428] to-[#004e92]">
      <div className="flex flex-col gap-4 w-full border border-[#ffffff4d] rounded-md p-4 max-w-7xl my-6 shadow-[0 10px 15px -3px rgba(0, 0, 0, 0.1)]">
        <div className="flex justify-between items-center mb-2.5">
          <img src="/logo.png" className="h-6 sm:h-7 w-auto" alt="logo" />
          <Link to="/">
            <i className="ri-home-7-fill text-3xl text-white"></i>
          </Link>
        </div>
        <Search />
        {renderContent()}
      </div>
    </section>
  );
};

export default Weather;
