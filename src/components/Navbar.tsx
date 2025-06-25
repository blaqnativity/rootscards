import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../../constants";
import { RiMenuFill } from "@remixicon/react";
import type { NavItem } from "../../constants";

const Navbar = () => {
  const renderLink = (link: NavItem): JSX.Element => {
    const isExternal = link.url.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          {link.menu}
        </a>
      );
    }

    return (
      <Link to={link.url} className="custom-link">
        {link.menu}
      </Link>
    );
  };
  return (
    <nav className="relative py-5 dark:bg-[var(--color-text)]">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-[1.25em] mr-3" alt="rootscards_logo" />
        </Link>

        <ul className="hidden lg:flex font-medium space-x-8 items-center">
          {navMenu.map((link, index) => (
            <li key={index}>{renderLink(link)}</li>
          ))}

          <Link to="/" className="btnMain">
            start free trial
          </Link>
        </ul>

        {/* toggle Link */}
        <div className="lg:hidden">
          <RiMenuFill />
        </div>
      </div>

      {/* mobile menu */}
      <div className="absolute top-10 right-0 block lg:hidden w-1/2 p-10 z-50 bg-[var(--color-body)]/95 rounded-bl-lg">
        <ul className="flex flex-col gap-4 items-start font-medium">
          {navMenu.map((link, index) => (
            <li key={index}>{renderLink(link)}</li>
          ))}

          <Link to="/" className="btnMain">
            start free trial
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
