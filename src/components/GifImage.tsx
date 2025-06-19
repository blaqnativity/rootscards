import bubble from "../assets/images/bubble.gif";

const GifImage = () => {
  return (
    <div className="container mx-auto py-4 px-6 md:px-0">
      <img
        src={bubble}
        alt="Human Illustration"
        className="w-full max-h-[800px] object-cover object-top rounded-lg"
      />
    </div>
  );
};

export default GifImage;
