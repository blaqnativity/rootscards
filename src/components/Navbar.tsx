import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../../constants";

const Navbar = () => {
  return (
    <nav className="py-8 dark:bg-[var(--color-text)]">
      <div className="flex flex-wrap items-center justify-between container px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="rootscards_logo" />
        </Link>

        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col gap-5 md:gap-0 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:items-center">
            {navMenu.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="custom-link">
                  {link.menu}
                </Link>
              </li>
            ))}

            <button className="btnMain">start free trial</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
