export interface NavItem {
  menu: string;
  url: string;
}

export const navMenu: NavItem[] = [
  {
    menu: "Home",
    url: "/",
  },
  {
    menu: "Demo",
    url: "https://demo.rootscards.com/",
  },
  {
    menu: "Early access",
    url: "https://app.rootscards.com/",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqQuestions: FAQ[] = [
  {
    question: "What is RootsCards?",
    answer:
      "RootsCards is a 3-in-1 tool for individuals, businesses, and organizations—create a digital portfolio, grow your earnings, and simplify check-ins.",
  },
  {
    question: "Who can use RootsCards?",
    answer:
      "Anyone! Individuals can showcase their work, businesses can boost engagement and sales, and organizations can streamline check-ins.",
  },
  {
    question: "How does RootsCards help businesses?",
    answer:
      "Businesses can create interactive profiles, share links, and increase revenue with easy-to-use tools for promotions and customer engagement.",
  },
  {
    question: "How does the check-in feature work?",
    answer:
      "With a tap, scan, click, geo-fencing or Messaging, Organizations can use RootsCards to simplify check-ins, reducing wait times and improving visitor experience with digital check-in solutions.",
  },
  {
    question: "How do I get started with RootsCards?",
    answer:
      "Simply sign up, create your profile, and start sharing your links, portfolio, or business details in minutes!",
  },
];
