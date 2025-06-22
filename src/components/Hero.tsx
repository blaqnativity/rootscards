import rcCards from "../assets/images/rc-cards.svg";
import rcSuites from "../assets/images/rc-suites.svg";

const Hero = () => {
  return (
    <section className="container mx-auto text-center py-6 px-4 grid grid-cols-1 gap-10 mt-10">
      <h1 className="header-text">
        Rootscards is the AI operating layer for smart check-ins
      </h1>

      {/* flex images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img className="" src={rcCards} alt="" />
        </div>
        <div>
          <img className="" src={rcSuites} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
