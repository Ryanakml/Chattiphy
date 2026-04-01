"use client";

import Link from "next/link";
import { BookOpen, LifeBuoy, Send } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavIntegrations } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { sidebarGroups } from "@/components/dashboard/shell/sidebar-data";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

const platformGroup = sidebarGroups.find((group) => group.title === "Platform");
const integrationsGroup = sidebarGroups.find(
  (group) => group.title === "Integrations",
);

const supportItems = [
  {
    title: "Documentation",
    url: "/dashboard/webchat/deploy-settings",
    icon: BookOpen,
  },
  {
    title: "Support",
    url: "/dashboard/settings/general",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "/dashboard/settings/profile",
    icon: Send,
  },
];

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="border-none"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border/60 border-b">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {platformGroup ? (
          <NavMain
            title={platformGroup.title}
            items={platformGroup.items.map((item) => ({
              ...item,
              isActive: false,
            }))}
          />
        ) : null}
        {integrationsGroup ? (
          <NavIntegrations
            integrations={integrationsGroup.items.map((item) => ({
              name: item.title,
              url: item.url,
              icon: item.icon!,
            }))}
          />
        ) : null}
      </SidebarContent>
      <SidebarFooter className="gap-4 border-t border-sidebar-border/60">
        <SidebarMenu>
          {supportItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
