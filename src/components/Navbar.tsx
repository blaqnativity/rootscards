import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../../constants";
import { RiMenuFill, RiCloseFill } from "@remixicon/react";
import { useState } from "react";

// mobile menu icons
import homeIcon from "/home.png";
import loginIcon from "/login.png";
import featIcon from "/features.png";
import conIcon from "/contact.png";
import checkIcon from "/checkin.png";
import pcIcon from "/pc.png";
import codeIcon from "/code.png";
import priceIcon from "/price.png";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <nav className="relative py-5 dark:bg-[var(--color-text)]">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-[1.25em] mr-3" alt="rootscards_logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex font-medium space-x-8 items-center">
          {navMenu.map((link, index) => (
            <li key={index}>
              <Link to={link.url} className="custom-link">
                {link.menu}
              </Link>
            </li>
          ))}
          <Link to="/" className="btnMain">
            start free trial
          </Link>
        </ul>

        {/* Toggle Button */}
        <div className="lg:hidden z-50" onClick={() => setMenu(!menu)}>
          {menu ? <RiCloseFill size={24} /> : <RiMenuFill size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-6 w-1/2 right-0 lg:hidden p-10 z-40 bg-[var(--color-body)]/95 rounded-bl-lg transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-4 items-start font-medium w-full">
            <Link to="/" className="custom-link flex items-center space-x-3">
              <img src={homeIcon} alt="" />
              <span>Home</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={loginIcon} alt="" />
              <span>Sign In/Up</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={featIcon} alt="" />
              <span>Features</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={codeIcon} alt="" />
              <span>Documentation</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={priceIcon} alt="" />
              <span>Pricing</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={checkIcon} alt="" />
              <span>Check-in Suite</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={conIcon} alt="" />
              <span>Contact sales</span>
            </Link>
            <Link
              to="https://app.rootscards.com"
              className="custom-link flex items-center space-x-3"
            >
              <img src={pcIcon} alt="" />
              <span>Demo</span>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
