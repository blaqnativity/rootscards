import card from "../assets/images/rootscard.svg";
import dashboard from "../assets/images/rootdashboard.svg";
import gradient from "../assets/images/gradientBg.png";
import vector from "../assets/images/Vector.svg";

const Hero = () => {
  return (
    <section className=" text-white my-10 lg:h-[700px] overflow-hidden">
      {/* Centered headline */}
      <div className="relative py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center relative">
          Rootscards is the AI operating layer for{" "}
          <span className="relative inline-block">
            {/* The image sits on top */}
            <img
              src={vector}
              alt="overlay"
              className="absolute top-1/2 left-1/2 h-10 w-auto md:h-auto max-w-none -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            />
            {/* The text stays below */}
            <span className="relative z-0 text-white">smart check-ins</span>
          </span>
        </h1>
      </div>

      {/* Two feature cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full">
        {/* card one (RootsCards Feature) */}
        <div
          className="relative p-5 md:p-10 flex flex-col gap-2 md:gap-4 justify-between md:justify-start h-full rounded-2xl"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="flex">
            <div className="flex-1 space-y-1 md:space-y-4">
              <h2 className="text-lg md:text-3xl font-medium">RootsCards</h2>
              <p className="text-md md:text-xl font-normal">
                Your smart card. Instantly connected.
              </p>
            </div>
            <div className="justify-end">
              <a href="" className="btnp">
                Explore Rootscards
              </a>
            </div>
          </div>

          {/* IMAGE - Centered Absolutely on md+ */}

          <img
            src={card}
            alt="RootsCard"
            className="h-[8rem] md:h-[12rem] lg:absolute top-1/3 lg:top-1/2 left-1/4 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/4"
          />

          <div>
            <p className="text-[12px] md:text-lg text-[var(--text-color)]">
              Your NFC-powered RootsCard instantly lets you check in, make
              transactions, share your portfolio, and manage your digital
              identity — wherever you go.
            </p>
          </div>
        </div>

        {/* card two (Rootscard Suite Feature) */}
        <div
          className="relative p-5 md:p-10 flex flex-col gap-2 md:gap-4 justify-between md:justify-start overflow-hidden h-full  rounded-2xl"
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
              <p className="text-md md:text-xl font-normal">
                Your smart card + Helpdesk
              </p>
            </div>
            <div className="justify-end">
              <a href="" className="btnp">
                Explore Rootscards
              </a>
            </div>
          </div>

          {/* IMAGE - Centered Absolutely on md+ */}

          <img
            src={dashboard}
            alt="RootsCard"
            className="h-[10rem] md:h-[30rem] lg:absolute top-1/3 lg:top-1/2 left-1/4 lg:left-1/2 lg:-translate-x-1/3 lg:-translate-y-1/4"
          />

          <div className="">
            <p className="text-[12px] md:text-lg text-[var(--text-color)]">
              One seamless contact intelligence suite that gives deep insight
              into user behavior, card interactions, and engagement — offering a
              unified view across physical and digital touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
