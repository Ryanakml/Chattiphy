import { ReactNode } from "react";

import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

export interface DashboardHeaderProps {
  breadcrumb?: ReactNode;
  centerSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export function DashboardHeader({
  breadcrumb = <DynamicBreadcrumb />,
  centerSlot,
  rightSlot,
}: DashboardHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-zinc-800/60 bg-[#09090b] px-4 md:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <SidebarTrigger className="-ml-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100" />
        <Separator orientation="vertical" className="mr-2 h-4 bg-zinc-800" />
        <div className="min-w-0 flex-1">{breadcrumb}</div>
      </div>
      {centerSlot ? (
        <div className="flex items-center gap-2">{centerSlot}</div>
      ) : null}
      {rightSlot ? (
        <div className="flex items-center gap-2">{rightSlot}</div>
      ) : null}
    </header>
  );
}
