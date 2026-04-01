import { IconBrandTelegram } from "@tabler/icons-react";
import {
  Bot,
  ChartLineIcon,
  MessageCircle,
  MessageCircleCodeIcon,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

export interface SidebarNavLink {
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: string;
}

export interface SidebarNavCollapsible {
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: string;
  items: SidebarNavLink[];
}

export type SidebarNavItem = SidebarNavLink | SidebarNavCollapsible;

export interface SidebarNavGroup {
  title: string;
  items: SidebarNavItem[];
}

export const sidebarGroups: SidebarNavGroup[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Overview",
        url: "/dashboard/overview",
        icon: SquareTerminal,
      },
      {
        title: "Configurations",
        url: "/dashboard/configurations",
        icon: Bot,
      },
      {
        title: "Monitor",
        url: "/dashboard/monitor",
        icon: ChartLineIcon,
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
        url: "/dashboard/webchat",
        icon: MessageCircleCodeIcon,
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
        url: "/dashboard/settings",
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
  },
  {
    title: "Integrations",
    items: [
      {
        title: "WhatsApp",
        url: "/dashboard/integrations/whatsapp",
        icon: MessageCircle,
      },
      {
        title: "Telegram",
        url: "/dashboard/integrations/telegram",
        icon: IconBrandTelegram,
      },
      {
        title: "Omnichannel",
        url: "/dashboard/integrations/omnichannel",
        icon: ShoppingCart,
      },
    ],
  },
];
