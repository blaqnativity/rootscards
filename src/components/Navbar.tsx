import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu, mobileMenu } from "../../constants"; // ✅ Import mobileMenu here
import { RiMenuFill, RiCloseFill } from "@remixicon/react";
import { useState } from "react";

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
            {mobileMenu.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="custom-link flex items-center space-x-3"
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="w-5 h-5"
                />
                <span>{item.label}</span>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
