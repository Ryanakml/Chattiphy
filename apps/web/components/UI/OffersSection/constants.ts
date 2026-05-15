import ic_user_plus from "@/public/svgs/ic_user_plus.svg";
import ic_database from "@/public/svgs/ic_database.svg";
import ic_users from "@/public/svgs/ic_users.svg";
import ic_code from "@/public/svgs/ic_code.svg";

export const sectionLabel = "CORE FEATURES";
// For desktop
export const desktopHeaderPhrases = [
  "Everything you need",
  "to run a smarter chatbot",
];
export const desktopParagraphPhrase = [
  "From setup to lead capture — Chattiphy handles it all,",
  "so your team doesn't have to.",
];

// For mobile
export const mobileParagraphPhrase = [
  "From setup to lead capture —",
  "Chattiphy handles it all,",
  "so your team doesn't have to.",
];

export const offers = [
  {
    illustration: ic_user_plus,
    title: "Instant Lead Capture",
    details:
      "Visitors drop their WhatsApp or email directly in chat — your pipeline fills itself.",
  },
  {
    illustration: ic_database,
    title: "Knowledge Base (BYOK)",
    details:
      "Upload your docs, FAQs, or URLs — your bot answers based on your actual content.",
  },
  {
    illustration: ic_users,
    title: "Human Handoff",
    details:
      "When a conversation needs a human touch, your bot escalates to the right person automatically.",
  },
  {
    illustration: ic_code,
    title: "Deploy in Minutes",
    details:
      "One script tag. Any website. Your bot is live before your next coffee break.",
  },
];
