const DefaultScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-96 text-center">
      <img
        src="/splash-icon.svg"
        className="opacity-90 w-28 sm:w-32"
        alt="splash icon"
      />
      <p className="max-w-96 text-[#ffffffe6] text-sm">
        Explore current weather data and 5-day forecast of more than 200,000
        cities!
      </p>
    </div>
  );
};

export default DefaultScreen;
