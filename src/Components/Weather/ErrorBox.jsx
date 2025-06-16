const ErrorBox = ({ errorMsg }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mx-auto text-center min-h-96">
      <h2 className="text-[2rem] sm:text-[3.5rem] font-semibold">Oops!</h2>
      <p className="text-base sm:text-[1.15rem] text-[#ef4444]">{errorMsg}</p>
    </div>
  );
};

export default ErrorBox;
