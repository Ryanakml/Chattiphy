"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";

import type {
  SidebarNavCollapsible,
  SidebarNavGroup,
  SidebarNavItem,
} from "./sidebar-data";

const SIDEBAR_STORAGE_KEY = "dashboard_sidebar_expanded_groups";

function isCollapsible(item: SidebarNavItem): item is SidebarNavCollapsible {
  return "items" in item;
}

function getExpandedState(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

function setExpandedState(items: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(items));
}

function normalizePathname(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

function isActivePath(pathname: string, url: string) {
  const current = normalizePathname(pathname);
  const target = normalizePathname(url);

  return current === target || current.startsWith(`${target}/`);
}

function itemIsActive(pathname: string, item: SidebarNavItem) {
  if (isCollapsible(item)) {
    return (
      isActivePath(pathname, item.url) ||
      item.items.some((subItem) => isActivePath(pathname, subItem.url))
    );
  }

  return isActivePath(pathname, item.url);
}

interface NavGroupProps {
  group: SidebarNavGroup;
}

export function NavGroup({ group }: NavGroupProps) {
  const pathname = usePathname();
  const { state, isMobile, setOpenMobile } = useSidebar();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setExpandedItems(getExpandedState());
    setIsMounted(true);
  }, []);

  const handleToggle = (itemTitle: string, isOpen: boolean) => {
    setExpandedItems((current) => {
      const next = isOpen
        ? Array.from(new Set([...current, itemTitle]))
        : current.filter((title) => title !== itemTitle);

      setExpandedState(next);
      return next;
    });
  };

  const handleNavigate = () => {
    setOpenMobile(false);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
      <SidebarMenu>
        {group.items.map((item) => {
          const key = `${group.title}-${item.title}`;

          if (!isCollapsible(item)) {
            return (
              <SidebarMenuItem key={key}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={itemIsActive(pathname, item)}
                >
                  <Link href={item.url} onClick={handleNavigate}>
                    {item.icon ? <item.icon /> : null}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          const isOpen = isMounted
            ? expandedItems.includes(item.title) || itemIsActive(pathname, item)
            : itemIsActive(pathname, item);

          if (state === "collapsed" && !isMobile) {
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={item}
                pathname={pathname}
              />
            );
          }

          return (
            <Collapsible
              key={key}
              asChild
              open={isOpen}
              onOpenChange={(open) => handleToggle(item.title, open)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={itemIsActive(pathname, item)}
                  >
                    {item.icon ? <item.icon /> : null}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={itemIsActive(pathname, subItem)}
                        >
                          <Link href={subItem.url} onClick={handleNavigate}>
                            {subItem.icon ? <subItem.icon /> : null}
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function SidebarMenuCollapsedDropdown({
  item,
  pathname,
}: {
  item: SidebarNavCollapsible;
  pathname: string;
}) {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton tooltip={item.title} isActive={itemIsActive(pathname, item)}>
            {item.icon ? <item.icon /> : null}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={4}>
          <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items.map((subItem) => (
            <DropdownMenuItem key={subItem.title} asChild>
              <Link
                href={subItem.url}
                className={itemIsActive(pathname, subItem) ? "bg-accent" : ""}
              >
                {subItem.icon ? <subItem.icon /> : null}
                <span>{subItem.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}
