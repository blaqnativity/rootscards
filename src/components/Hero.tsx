import card from "../assets/images/rootscard.svg";
import dashboard from "../assets/images/rootdashboard.svg";
import gradient from "../assets/images/gradientBg.png";
import vector from "../assets/images/Vector.svg";

const Hero = () => {
  return (
    <section className=" text-white py-20 lg:h-[750px] overflow-hidden">
      {/* Centered headline */}
      <div className="relative  mb-15">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Rootscards is the AI operating layer for smart check-ins
        </h1>

        <img
          src={vector}
          alt="skew-vector"
          className="absolute w-40 md:w-fit top-8 right-10 md:right-85 md:-top-1"
        />
      </div>
      {/* Two feature cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full">
        {/* RootsCards Feature */}
        <div
          className="relative p-5 md:p-10 flex flex-col gap-2 md:gap-4 justify-between md:justify-start h-[250px] md:h-full"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="flex">
            <div className="flex-1 space-y-1 md:space-y-4">
              <h2 className="text-lg md:text-3xl font-medium">RootsCards</h2>
              <p className="text-md md:text-xl">
                Your smart card. Instantly connected.
              </p>
            </div>
            <div className="justify-end">
              <a href="" className="btnSmall">
                Explore Rootscards
              </a>
            </div>
          </div>

          {/* IMAGE - Centered Absolutely on md+ */}

          <img
            src={card}
            alt="RootsCard"
            className="h-[5rem] md:h-[8rem] lg:h-[10rem] absolute top-1/3 md:top-1/2 left-1/4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/4"
          />

          <div className="w-fit">
            <small className="text-[8px] md:text-lg text-[var(--text-color)]">
              Your NFC-powered RootsCard instantly lets you check in, make
              transactions, share your portfolio, and manage your digital
              identity — wherever you go.
            </small>
          </div>
        </div>

        {/* Rootscard Suite Feature */}
        <div
          className="relative p-5 md:p-10 flex flex-col gap-2 md:gap-4 justify-between md:justify-start overflow-hidden h-[250px] md:h-[500px] lg:h-full"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex">
            <div className="flex-1 space-y-1 md:space-y-4">
              <h2 className="text-lg md:text-3xl font-medium">
                Rootscard Suite
              </h2>
              <p className="text-md md:text-xl">Your smart card + Helpdesk</p>
            </div>
            <div className="justify-end">
              <a href="" className="btnSmall">
                Explore Rootscards
              </a>
            </div>
          </div>

          {/* IMAGE - Centered Absolutely on md+ */}

          <img
            src={dashboard}
            alt="RootsCard"
            className="h-[10rem] md:h-[20rem] lg:h-[30rem] absolute bottom-0 md:-bottom-10 lg:-bottom-40 md:-right-30 -right-40"
          />

          <div className="">
            <small className="text-[8px] md:text-lg text-[var(--text-color)]">
              One seamless contact intelligence suite that gives deep insight
              into user behavior, card interactions, and engagement — offering a
              unified view across physical and digital touchpoints.
            </small>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Hero;
