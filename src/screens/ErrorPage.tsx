import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="mb-8 h-20" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
          We'll be back soon!
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl my-8">
          Sorry for the inconvenience. We’re performing some maintenance at the
          moment.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/")}
            className="border-2 border-white font-bold py-3 px-6 rounded cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
