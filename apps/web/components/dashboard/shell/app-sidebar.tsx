"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";
import { sidebarGroups } from "./sidebar-data";
import { TeamSwitcher } from "./team-switcher";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {sidebarGroups.map((group, index) => (
          <React.Fragment key={group.title}>
            {index > 0 ? <SidebarSeparator /> : null}
            <NavGroup group={group} />
          </React.Fragment>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
