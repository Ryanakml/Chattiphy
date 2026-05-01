import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/landing/icons";
import { siteConfig } from "@/config/site";

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  simpleFooter?: boolean;
}

export function SiteFooter({ simpleFooter }: SiteFooterProps) {
  return (
    <footer className="z-50 m-5 p-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!simpleFooter && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base text-gray-500 hover:text-blue-500"
                    href="/#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-500 hover:text-blue-500"
                    href="/#business-impact"
                  >
                    Business Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base text-gray-500 hover:text-blue-500"
                    href="/#faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-500 hover:text-blue-500"
                    href="/auth/signin"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">About</h3>
              <p className="text-base text-gray-500">
                {siteConfig.description}
              </p>
            </div>
          </div>
        )}
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex flex-row text-sm text-gray-500">
            <Icons.bot className="mr-2" /> © 2026 {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4" />
        </div>
      </div>
    </footer>
  );
}
