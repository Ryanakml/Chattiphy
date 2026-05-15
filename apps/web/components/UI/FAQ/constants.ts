type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "Can I bring my own API key (BYOK)?",
    answer:
      "Yes. Chattiphy supports bring-your-own-key — connect your own OpenAI or compatible API key from the Configurations page.",
  },
  {
    question: "How do I embed the chatbot on my website?",
    answer:
      "Copy one script tag from your Deploy Settings and paste it before </body>. Your bot goes live immediately.",
  },
  {
    question: "Can it capture leads like WhatsApp numbers or emails?",
    answer:
      "Yes. You can configure lead capture forms inside the chat widget — visitors submit their contact and it flows into your dashboard.",
  },
  {
    question: "How does human handoff work?",
    answer:
      "When a visitor's query exceeds the bot's scope, it automatically escalates and notifies your team via WhatsApp or email based on your escalation config.",
  },
  {
    question: "Does it work on any website platform?",
    answer:
      "Yes — any platform that allows custom scripts: WordPress, Shopify, Webflow, Wix, Framer, custom HTML, etc.",
  },
  {
    question: "Is WhatsApp and Instagram integration available?",
    answer:
      "WhatsApp and Instagram channel integrations are on the roadmap. Web widget is fully available now.",
  },
];
