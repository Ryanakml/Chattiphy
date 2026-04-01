// import { OrganizationGuard } from "@/components/organization-guard";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <OrganizationGuard>
    <SidebarProvider className="bg-[#09090b] text-zinc-100">
      <AppSidebar />
      <SidebarInset className="h-svh overflow-hidden border border-zinc-800/60 bg-[#09090b] md:rounded-[24px]">
        <DashboardHeader />
        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      </SidebarInset>
    </SidebarProvider>
    // </OrganizationGuard>
  );
}
