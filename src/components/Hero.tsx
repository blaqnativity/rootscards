import avatarOne from "../assets/images/human1.jpg";
import avatarTwo from "../assets/images/human2.jpg";

const Hero: React.FC = () => {
  return (
    <div>
      <section className="w-full px-6 md:px-20 py-16 bg-white text-[var(--color-primary)]">
        <div className="container mx-auto flex flex-col md:flex-1/2 gap-8 items-start">
          {/* Left Section - Big Heading */}
          <div className="col-span-3">
            <h1>
              —build, engage, earn, <br />
              and check-in
              <br />
              <span className="inline-flex items-center gap-2">
                effortlessly.
              </span>
            </h1>
          </div>

          {/* Right Section - Paragraph and Users */}
          <div className="flex flex-col gap-6 md:self-end">
            <p className="text-lg md:text-lg text-[var(--text-secondary)] max-w-md">
              One tool for all—showcase your work, grow your business, and speed
              up check-ins with ease.
            </p>

            <div className="w-full border-t border-gray-300 pt-6 flex items-center gap-4">
              {/* User avatars */}
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

              {/* Text */}
              <div>
                <p className="font-bold text-[var(--color-primary)]">
                  12k+ Users
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Get Started
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
