export interface NavItem {
  menu: string;
  url: string;
  icon?: string | React.FC<{ size?: number }>;
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
import {
  RiMoreLine,
  RiLoginBoxLine,
  RiCodeSSlashFill,
  RiPriceTag3Line,
  RiTv2Line,
  RiQrScan2Line,
  RiContactsBook3Line,
  RiListCheck,
} from "@remixicon/react";

// exporting them to be used
export const icons = {
  home: RiMoreLine,
  login: RiLoginBoxLine,
  features: RiListCheck,
  contact: RiContactsBook3Line,
  checkin: RiQrScan2Line,
  pricing: RiPriceTag3Line,
  demo: RiTv2Line,
  docs: RiCodeSSlashFill,
} as const;

export type IconKey = keyof typeof icons; // "home" | "login" | ...

// mobile menu links and labels
export const mobileMenu = [
  { label: "Home", url: "/", icon: RiMoreLine },
  {
    label: "Sign In/Up",
    url: "https://app.rootscards.com",
    icon: RiLoginBoxLine,
  },
  { label: "Features", url: "/features", icon: RiListCheck },
  { label: "Documentation", url: "/", icon: RiCodeSSlashFill },
  { label: "Pricing", url: "/pricing", icon: RiPriceTag3Line },
  { label: "Check-in Suite", url: "/check-in-suite", icon: RiQrScan2Line },
  { label: "Contact sales", url: "/contact-sales", icon: RiContactsBook3Line },
  { label: "Demo", url: "https://demo.rootscards.com", icon: RiTv2Line },
];
