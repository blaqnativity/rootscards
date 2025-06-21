import { RiArrowUpLine } from "@remixicon/react";

const CTA = () => {
  return (
    <div className="my-20">
      <div className="py-8 px-6 sm:px-6 sm:py-20 flex flex-col items-center gap-4">
        {/* Arrow Icon */}
        <div>
          <RiArrowUpLine
            size={120}
            className="cursor-pointer text-[var(--color-primary)]"
          />
        </div>

        {/* Heading and CTA Button */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="cta-title text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Let’s show, earn, and simplify!
          </h1>
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://app.rootscards.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition font-medium"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
