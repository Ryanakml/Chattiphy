export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export const marketingConfig: { mainNav: MainNavItem[] } = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Demo",
      href: "/#chat",
    },
    {
      title: "Impact",
      href: "/#business-impact",
    },
    {
      title: "FAQ",
      href: "/#faq",
    },
  ],
};
