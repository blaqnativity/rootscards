import card from "../assets/images/rootscard.svg";
import dashboard from "../assets/images/rootdashboard.svg";
import gradient from "../assets/images/gradientBg.png";

const Hero = () => {
  return (
    <section className=" text-white py-20">
      {/* Centered headline */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Rootscards is the AI operating layer for smart check-ins
      </h1>

      {/* Two feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* RootsCards Feature */}
        <div
          className="relative py-10 px-5 flex flex-col justify-between overflow-hidden h-[400px]"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <a
            href="#"
            className="absolute top-6 right-6 bg-white text-black rounded-full px-4 py-1 text-[8px] font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Explore Rootscards
          </a>

          <div>
            <h2 className="text-[14px] font-medium mb-2">Rootscard Suite</h2>
            <p className="mb-2 text-[12px]">Your smart card + Helpdesk</p>
            <p className="text-[10px] text-gray-300">
              One seamless contact intelligence suite that gives deep insight
              into user behavior, card interactions, and engagement — offering a
              unified view across physical and digital touchpoints.
            </p>
          </div>

          <img src={card} alt="RootsCard" className="h-[10rem] mt-20 mx-auto" />
        </div>

        {/* Rootscard Suite Feature */}
        <div
          className="relative p-8 flex flex-col justify-between overflow-hidden h-[400px]"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <a
            href="#"
            className="absolute top-6 right-6 bg-white text-black rounded-full px-4 py-1 text-[8px] font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Explore Rootscards
          </a>

          <div>
            <h2 className="text-[14px] font-medium mb-2">Rootscard Suite</h2>
            <p className="mb-2 text-[12px]">Your smart card + Helpdesk</p>
            <p className="text-[10px] text-gray-300">
              One seamless contact intelligence suite that gives deep insight
              into user behavior, card interactions, and engagement — offering a
              unified view across physical and digital touchpoints.
            </p>
          </div>

          <img
            src={dashboard}
            alt="Rootscard Dashboard"
            className="absolute -bottom-25 -right-40 w-full mt-10 rounded-2xl h-[20rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
