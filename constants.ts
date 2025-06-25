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
    menu: "Features",
    url: "/features",
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
    url: "https://demo.rootscards.com",
  },
  {
    menu: "Documentation",
    url: "/",
  },
  {
    menu: "Sign In/Up",
    url: "https://app.rootscards.com",
  },
];
