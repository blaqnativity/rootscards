import card from "../assets/images/rootscard.svg";
import dashboard from "../assets/images/rootdashboard.svg";
import gradient from "../assets/images/gradientBg.png";

const Hero = () => {
  return (
    <section className=" text-white py-20 h-[750px]">
      {/* Centered headline */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Rootscards is the AI operating layer for smart check-ins
      </h1>

      {/* Two feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* RootsCards Feature */}
        <div
          className="relative p-10 flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <div className="flex items-start">
            <div className="flex-1/3 space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium">RootsCards</h2>
              <p className="text-lg md:text-sl">
                Your smart card. Instantly connected.
              </p>
              <small className="text-sm md:text-md text-[var(--text-color)]">
                Your NFC-powered RootsCard instantly lets you check in, make
                transactions, share your portfolio, and manage your digital
                identity — wherever you go.
              </small>
            </div>
            <div className="justify-end">
              <a href="" className="btnSmall">
                Explore Rootscards
              </a>
            </div>
          </div>
          <img
            src={card}
            alt="RootsCard"
            className="absolute bottom-40 left-50 h-[10rem]"
          />
        </div>

        {/* Rootscard Suite Feature */}
        <div
          className="relative p-8 flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="flex items-start">
            <div className="flex-1/3 space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium">
                Rootscard Suite
              </h2>
              <p className="text-lg md:text-sl">Your smart card + Helpdesk</p>
              <small className="text-sm md:text-md text-[var(--text-color)]">
                One seamless contact intelligence suite that gives deep insight
                into user behavior, card interactions, and engagement — offering
                a unified view across physical and digital touchpoints.
              </small>
            </div>
            <div className="justify-end">
              <a href="" className="btnSmall">
                Explore Rootscards
              </a>
            </div>
          </div>

          <img
            src={dashboard}
            alt="Rootscard Dashboard"
            className="absolute -bottom-5 -right-30 w-full mt-10 rounded-2xl h-[20rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
