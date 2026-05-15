import ic_code from "@/public/svgs/ic_code.svg";
import ic_palette from "@/public/svgs/ic_palette.svg";
import ic_chart_bar from "@/public/svgs/ic_chart_bar.svg";

// For desktop
export const desktopHeaderPhrase = ["Live in 3 simple", "steps"];
export const desktopParagraphPhrase = [
  "From zero to deployed — in less time than it takes to make coffee.",
  "Simple, fast, and powerful.",
];

// For mobile
export const mobileHeaderPhrase = ["Live in 3", "simple steps"];
export const mobileParagraphPhrase = [
  "From zero to deployed — in less time",
  "than it takes to make coffee.",
];

export const edges = [
  {
    point: "1. Configure",
    details:
      "Set your bot's personality, knowledge base, and escalation rules in one place.",
    icon: ic_palette,
  },
  {
    point: "2. Deploy",
    details:
      "Copy one script tag, paste it into your website — your bot is live instantly.",
    icon: ic_code,
  },
  {
    point: "3. Monitor & Improve",
    details:
      "Track conversations, see top intents, and optimize your bot's performance over time.",
    icon: ic_chart_bar,
  },
];
