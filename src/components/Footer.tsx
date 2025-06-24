import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="leading-6 mt-8">
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-6">
        <div className="mb-6 sm:mb-0 flex flex-col space-y-6 md:flex-row gap-x-6">
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
