"use client";

import * as React from "react";
import {
  Bot,
  ChartLine,
  Instagram,
  MessageCircle,
  MessageCircleCode,
  LifeBuoy,
  Send,
  Settings2,
  ShoppingCart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@workspace/ui/components/sidebar";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard/overview",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Configurations",
      url: "/dashboard/configurations",
      icon: Bot,
    },
    {
      title: "Monitor",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "Conversations",
          url: "/dashboard/monitor/conversations",
        },
        {
          title: "Users",
          url: "/dashboard/monitor/users",
        },
      ],
    },
    {
      title: "Webchat",
      url: "#",
      icon: MessageCircleCode,
      items: [
        {
          title: "Bot Profile",
          url: "/dashboard/webchat/bot-profile",
        },
        {
          title: "Bot Appearance",
          url: "/dashboard/webchat/bot-appearance",
        },
        {
          title: "Deploy Settings",
          url: "/dashboard/webchat/deploy-settings",
        },
        {
          title: "Features",
          url: "/dashboard/webchat/features",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Profile",
          url: "/dashboard/settings/profile",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/dashboard/settings/general",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/dashboard/configurations",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "WhatsApp",
      url: "/dashboard/integrations/whatsapp",
      icon: MessageCircle,
    },
    {
      name: "Instagram",
      url: "/dashboard/integrations/instagram",
      icon: Instagram,
    },
    {
      name: "Omnichannel",
      url: "/dashboard/integrations/omnichannel",
      icon: ShoppingCart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
