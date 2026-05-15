import { StaticImageData } from "next/image";
import robert_fox from "@/public/images/robert_fox.png";
import cameron_williamson from "@/public/images/cameron_williamson.png";
import esther_howard from "@/public/images/esther_howard.png";

export type Props = {
  testimony: string;
  person: string;
  role: string;
  avatar: string | StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Chattiphy cut our repetitive support tickets in half. The knowledge base actually works.",
    person: "Sarah K.",
    role: "Support Lead, E-commerce",
    avatar: "https://ui-avatars.com/api/?name=Sarah+K&background=4845D2&color=fff",
  },
  {
    testimony:
      "Leads from our website now come in with WhatsApp contacts attached. Zero manual work.",
    person: "Rizal M.",
    role: "Sales Ops, B2B SaaS",
    avatar: "https://ui-avatars.com/api/?name=Rizal+M&background=4845D2&color=fff",
  },
  {
    testimony:
      "Setup took 10 minutes. Our bot handles FAQs 24/7 and hands off to us when needed.",
    person: "Dina A.",
    role: "Founder, Online Coaching",
    avatar: "https://ui-avatars.com/api/?name=Dina+A&background=4845D2&color=fff",
  },
];

export const desktopHeaderPhrase = ["What our users", "are saying"];
