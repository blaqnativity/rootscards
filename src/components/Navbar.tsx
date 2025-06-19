import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../../dataStore";
import { RiMenu4Fill, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative container mx-auto flex items-center justify-between sm:h-10 md:justify-center py-10 px-4 mt-2">
      {/* Logo + Mobile Menu Button */}
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" aria-label="Home">
            <img src={Logo} alt="Logo" height="auto" width="50" />
          </Link>

          {/* Mobile Hamburger Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              aria-label="Main menu"
              onClick={toggleMenu}
              className="text-blue-950 font-light text-4xl"
            >
              {isOpen ? <RiCloseLine size={30} /> : <RiMenu4Fill size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex md:space-x-10">
        {navMenu.map((item, index) => (
          <Link to={item.url} className="custom-link" key={index}>
            {item.menu}
          </Link>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex rounded-md ml-2">
          <Link to="https://app.rootscards.com/" className="button">
            Get Started
          </Link>
        </span>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full h-screen left-0 w-full bg-white z-50 flex flex-col items-start space-y-4 py-6 px-4 md:hidden transition-all duration-300 ease-in-out">
          {navMenu.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              onClick={closeMenu}
              className="block text-blue-950 text-lg font-medium"
            >
              {item.menu}
            </Link>
          ))}
          <Link
            to="https://app.rootscards.com/"
            className="mt-4 inline-block button"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
