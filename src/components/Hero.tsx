import avatarOne from "../assets/images/human1.jpg";
import avatarTwo from "../assets/images/human2.jpg";
import rollingSvg from "../assets/rollingsvg.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero: React.FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power1.out", opacity: 0 },
    });

    tl.from(".hero-title", { y: -80 })
      .from(".hero-text", { x: 80 }, "-=1.5")
      .from(".hero-avatar", { y: 80 }, "-=1.5");

    gsap.to(".img", {
      rotation: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-20 py-16 text-[var(--color-primary)] md:h-[80vh]">
      <div className="relative container mx-auto flex flex-col md:flex-1/2 gap-8 items-start justify-center h-full">
        <Title />
        <Content />
      </div>
    </section>
  );
};

const Title = () => (
  <div className="col-span-3 md:col-span-5">
    <h1 className="hero-title">
      —build, engage, earn, <br />
      and check-in
      <br />
      <span className="inline-flex items-center gap-2">
        <img
          src={rollingSvg}
          className="img hidden md:block mr-5 ml-20 fill-[currentColor]"
          alt="Rolling icon"
        />
        effortlessly.
      </span>
    </h1>
  </div>
);

const Content = () => (
  <div className="md:absolute lg:bottom-24 flex flex-col gap-6 md:self-end">
    <p className="hero-text text-lg md:text-lg text-[var(--text-secondary)] max-w-md">
      One tool for all—showcase your work, grow your business, and speed up
      check-ins with ease.
    </p>
    <UserStats />
  </div>
);

const UserStats = () => (
  <div className="hero-avatar w-full border-t border-gray-300 pt-6 flex items-center gap-4">
    <div className="flex -space-x-3">
      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold border-2 border-white">
        +
      </div>
      <img
        src={avatarOne}
        alt="User 1"
        className="w-10 h-10 rounded-full border-2 border-white object-cover object-top"
      />
      <img
        src={avatarTwo}
        alt="User 2"
        className="w-10 h-10 rounded-full border-2 border-white object-cover object-top"
      />
    </div>
    <div>
      <p className="font-bold text-[var(--color-primary)]">12k+ Users</p>
      <p className="text-sm text-[var(--text-secondary)]">Get Started</p>
    </div>
  </div>
);

export default Hero;
