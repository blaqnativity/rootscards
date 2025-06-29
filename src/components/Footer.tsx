import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pb-2">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex flex-col space-y-6 md:flex-row gap-x-6">
          <Link className="custom-link" to="/">
            Terms & Conditions
          </Link>
          <Link className="custom-link" to="/">
            Usecases
          </Link>
          <Link className="custom-link" to="/">
            Privacy
          </Link>
        </div>

        <div>
          <Link className="custom-link" to="/">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
