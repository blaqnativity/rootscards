import Navbar from "./components/Navbar";
import HomeView from "./screens/HomeView";
import ErrorPage from "./screens/ErrorPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1680px] mx-auto  px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
