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

// mobile menu icons
import homeIcon from "/home.png";
import loginIcon from "/login.png";
import featIcon from "/features.png";
import conIcon from "/contact.png";
import checkIcon from "/checkin.png";
import pcIcon from "/pc.png";
import codeIcon from "/code.png";
import priceIcon from "/price.png";

// exporting them to be used
export const icons = {
  home: homeIcon,
  login: loginIcon,
  features: featIcon,
  contact: conIcon,
  checkin: checkIcon,
  pricing: priceIcon,
  demo: pcIcon,
  docs: codeIcon,
} as const;

export type IconKey = keyof typeof icons; // "home" | "login" | ...

// mobile menu links and labels
export const mobileMenu = [
  { label: "Home", url: "/", icon: homeIcon },
  { label: "Sign In/Up", url: "https://app.rootscards.com", icon: loginIcon },
  { label: "Features", url: "/features", icon: featIcon },
  { label: "Documentation", url: "/", icon: codeIcon },
  { label: "Pricing", url: "/pricing", icon: priceIcon },
  { label: "Check-in Suite", url: "/check-in-suite", icon: checkIcon },
  { label: "Contact sales", url: "/contact-sales", icon: conIcon },
  { label: "Demo", url: "https://demo.rootscards.com", icon: pcIcon },
];
