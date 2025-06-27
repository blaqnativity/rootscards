import HomeView from "./screens/HomeView";
import ErrorPage from "./screens/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1680px] mx-auto  px-4">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
