import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  Bot,
  Clock3,
  FolderClosed,
  Inbox,
  LockKeyhole,
  MessageSquare,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import { FAQ } from "@/components/landing/faq";
import { buttonVariants } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

const featureCards = [
  {
    title: "OpenAI Assistants",
    description:
      "Use OpenAI Assistants to power richer chatbot behavior across support, lead capture, and customer follow-up flows.",
    icon: OpenAIIcon,
  },
  {
    title: "SAML/SSO Authentication",
    description:
      "Create private chat experiences with SAML/SSO controls so access can stay limited to your internal team.",
    icon: LockKeyhole,
  },
  {
    title: "User Inquiry",
    description:
      "Collect contact information together with customer questions so your team can follow up on qualified leads faster.",
    icon: Inbox,
  },
  {
    title: "AI Agent Actions",
    description:
      "Trigger structured actions against external APIs with dynamic parameters so the bot can do more than just reply.",
    icon: Workflow,
  },
  {
    title: "Web Search",
    description:
      "Query the web for fresh information when the use case requires more current context than your static knowledge base.",
    icon: Search,
  },
  {
    title: "File Attachments",
    description:
      "Let users attach CSV, XML, PDF, and image files so the bot can analyze them directly inside the conversation.",
    icon: FolderClosed,
  },
];

const impactCards = [
  {
    value: "35%",
    title: "Support Tickets Reduction",
    description:
      "Reduce repetitive inbound tickets by automating answers to common questions and repetitive status checks.",
    icon: MessageSquare,
  },
  {
    value: "60%",
    title: "Resolution Time Improvement",
    description:
      "Resolve customer issues faster with instant context, persistent history, and consistent AI-assisted replies.",
    icon: Clock3,
  },
  {
    value: "$25,000",
    title: "Annual Cost Savings",
    description:
      "Lower support overhead by letting the bot handle first-line conversations before a human steps in.",
    icon: BadgeDollarSign,
  },
];

export default function IndexPage() {
  return (
    <>
      <section
        id="overview"
        data-aos="fade-up"
        className="space-y-6 pb-8 pt-6 py-12 md:py-24 lg:py-32"
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="rounded-2xl border bg-muted px-4 py-1.5 text-sm font-medium shadow-md">
            Built for WhatsApp-first support and lead capture
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Run AI support workflows on top of your own model keys
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Chattiphy helps teams launch AI chat experiences for support, lead capture,
            and business automation without platform markups. Bring your own provider
            key, connect your knowledge base, and stay in control.
          </p>
          <div className="space-x-4 space-y-4">
            <Link href="/auth/signin" className={cn(buttonVariants({ size: "lg" }))}>
              <Bot className="mr-2 h-4 w-4" />
              Get Started for Free
            </Link>
            <Link
              href="/auth/signin"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-white")}
            >
              Login
            </Link>
          </div>
          <Image
            data-aos="zoom-in"
            priority={false}
            className="mt-10 border shadow-lg"
            src="/dashboard.png"
            width={810}
            height={540}
            alt="Chattiphy dashboard"
          />
        </div>
      </section>

      <section data-aos="fade-up" id="chat" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Test Chatbot
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            The interactive demo is not connected yet. We are keeping this section as a
            preview area while the widget migration is finalized.
          </p>
          <div className="mt-6 flex min-h-[22rem] w-full items-center justify-center rounded-2xl border border-dashed bg-white/80 px-8 py-12 shadow-lg">
            <div className="max-w-xl space-y-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Sparkles className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Interactive demo coming soon</h3>
              <p className="text-muted-foreground">
                Soon you will be able to test a real Chattiphy assistant directly from
                this page. For now, use the dashboard to continue setup and configuration.
              </p>
              <Link href="/auth/signin" className={cn(buttonVariants({ size: "lg" }))}>
                Open the Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        id="business-impact"
        className="container space-y-8 py-12 md:py-24 lg:py-32"
      >
        <div className="mx-auto flex max-w-[72rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-4xl leading-[1.05] sm:text-5xl md:text-7xl">
            How We Improve Your Business
          </h2>
          <p className="max-w-[70rem] text-lg leading-8 text-muted-foreground md:text-2xl">
            Our AI-powered chatbots deliver measurable business results by reducing
            support costs, speeding up responses, and helping your team focus on the
            conversations that actually need a human.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {impactCards.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="rounded-3xl border bg-white/90 py-10 shadow-md">
                <CardContent className="flex flex-col items-center gap-6 px-8 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
                    <Icon className="h-12 w-12 text-slate-900" />
                  </div>
                  <div className="text-6xl font-bold tracking-tight text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-3xl font-semibold leading-tight text-slate-900">
                    {item.title}
                  </div>
                  <p className="text-xl leading-9 text-slate-500">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center">
          <Link href="/auth/signin" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started for Free
          </Link>
          <p className="text-sm text-muted-foreground">No platform fee. Bring your own key.</p>
        </div>
      </section>

      <section data-aos="fade-up" id="features" className="container space-y-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Core capabilities designed for AI support, internal assistants, and
            business workflows that need more than a simple chatbot widget.
          </p>
        </div>
        <div className="mx-auto mt-6 grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {featureCards.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative overflow-hidden rounded-2xl border bg-white/90 p-2 shadow-sm">
                <div className="flex min-h-[220px] flex-col justify-between rounded-xl p-6">
                  <Icon className="h-8 w-8 text-slate-900" />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-base leading-8 text-slate-700">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section data-aos="fade-up" id="faq" className="container space-y-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQ
          </h2>
          <div className="w-full text-left">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}

function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 260"
      className={className}
      fill="currentColor"
    >
      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
    </svg>
  );
}
