import type { ReactNode } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface ConversationsShellProps {
  sidebar: ReactNode;
  detail: ReactNode;
  detailOpen?: boolean;
}

export function ConversationsShell({
  sidebar,
  detail,
  detailOpen = false,
}: ConversationsShellProps) {
  return (
    <div className="flex h-full w-full overflow-hidden bg-[#09090b] px-4 py-4 text-zinc-100 md:px-6 md:py-6">
      <section className="relative flex h-full w-full overflow-hidden gap-4 lg:gap-6">
        <div
          className={cn(
            "flex h-full w-full min-w-0 md:w-[340px] md:max-w-[340px] md:shrink-0",
            detailOpen ? "hidden md:flex" : "flex",
          )}
        >
          {sidebar}
        </div>

        <div
          className={cn(
            "absolute inset-0 z-10 flex h-full w-full min-w-0 transition-transform duration-200 md:static md:z-auto md:flex md:translate-x-0",
            detailOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          )}
        >
          {detail}
        </div>
      </section>
    </div>
  );
}
