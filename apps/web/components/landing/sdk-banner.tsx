"use client";

import React, { useState } from "react";

import { Icons } from "@/components/landing/icons";

export function SDKBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-white px-6 py-2.5 shadow sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">WhatsApp-first AI workspace</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Launch support and lead capture flows with your own model keys, knowledge base,
          and escalation settings.
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3"
          onClick={() => setIsVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <Icons.close className="h-6 w-6 text-gray-900" />
        </button>
      </div>
    </div>
  );
}
