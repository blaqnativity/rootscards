export interface NavItem {
  menu: string;
  url: string;
}

export const navMenu: NavItem[] = [
  {
    menu: "About",
    url: "/about",
  },
  {
    menu: "Sign In/Up",
    url: "/",
  },
  {
    menu: "Features",
    url: "/features",
  },
  {
    menu: "Documentation",
    url: "/documentation",
  },
  {
    menu: "Pricing",
    url: "/pricing",
  },
  {
    menu: "Check-in Suite",
    url: "/check-in-suite",
  },
  {
    menu: "Contact sales",
    url: "/contact-sales",
  },
  {
    menu: "View demo",
    url: "/demo",
  },
];
