type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
};

export const siteConfig: SiteConfig = {
  name: "Chattiphy",
  description:
    "WhatsApp-first AI chatbot workspace for support, lead capture, and BYOK automation.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard.png`,
};
