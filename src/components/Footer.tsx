import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 px-4 z-10 flex justify-content-center align-items-center">
      <p className="text-lg font-normal text-[var(--color-primary)]">
        All rights reserved — 2025 © Rootscards
      </p>
      <div className="flex ml-auto gap-4">
        <Link to="#" className="custom-link">
          Usecase
        </Link>
        <Link to="#" className="custom-link">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
