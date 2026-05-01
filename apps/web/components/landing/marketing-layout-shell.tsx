"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/landing/main-nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { Background } from "@/components/landing/background";
import { SDKBanner } from "@/components/landing/sdk-banner";
import { AOSInit } from "@/components/landing/aos-init";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

export function MarketingLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const hadDark = html.classList.contains("dark");
    const hadLight = html.classList.contains("light");

    html.classList.remove("dark");
    html.classList.add("light", "landing-light");
    body.classList.add("landing-body");

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderTransparent(scrollTop === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      body.classList.remove("landing-body");
      html.classList.remove("landing-light");

      if (!hadLight) {
        html.classList.remove("light");
      }

      if (hadDark) {
        html.classList.add("dark");
      }
    };
  }, []);

  return (
    <div className="landing-theme flex min-h-screen flex-col">
      <AOSInit />
      <Background />
      <header
        className={`z-40 sticky inset-x-0 top-0 w-full transition-all duration-1000 ${
          isHeaderTransparent ? "bg-transparent" : "border-b bg-white/75 backdrop-blur-lg"
        }`}
      >
        <SDKBanner />
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/auth/signin"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "border px-4 shadow-md",
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="z-10 flex-1">{children}</main>
      <SiteFooter simpleFooter={false} />
    </div>
  );
}
