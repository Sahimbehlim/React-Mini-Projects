import { FadeLoader } from "react-spinners";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-96">
      <FadeLoader color="#0ea5e9" size={80} />
      <p className="text-sm sm:text-base">{text}</p>
    </div>
  );
};

export default Loader;
