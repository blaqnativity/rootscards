import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../../constants";

const Navbar = () => {
  // Helper to detect external URLs
  const isExternalLink = (url: string) => {
    // If it starts with http/https or includes a known domain
    return url.startsWith("http://") || url.includes("rootscards.com");
  };

  // Normalize external URL
  const normalizeExternalUrl = (url: string) => {
    const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
    return cleanUrl.startsWith("http") ? cleanUrl : `https://${cleanUrl}`;
  };

  return (
    <nav className="py-5 dark:bg-[var(--color-text)]">
      <div className="flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-[1.25em] mr-3" alt="rootscards_logo" />
        </Link>

        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col gap-5 md:gap-0 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:items-center">
            {navMenu.map((link, index) => {
              const external = isExternalLink(link.url);

              return (
                <li key={index}>
                  {external ? (
                    <a
                      href={normalizeExternalUrl(link.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      {link.menu}
                    </a>
                  ) : (
                    <Link to={link.url} className="custom-link">
                      {link.menu}
                    </Link>
                  )}
                </li>
              );
            })}

            <a href="#" className="btnMain">
              Start Free Trial
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
