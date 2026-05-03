"use client";

import { SignIn } from "@clerk/nextjs";

export default function AuthSignInPage() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full max-w-md",
            cardBox: "w-full",
          },
        }}
        redirectUrl="/dashboard/overview"
      />
    </div>
  );
}
