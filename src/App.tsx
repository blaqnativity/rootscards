import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-[1680px] mx-auto  px-4">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
