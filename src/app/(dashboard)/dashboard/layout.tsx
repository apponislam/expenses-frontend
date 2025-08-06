import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width-icon": "58px",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <main>
                <SidebarTrigger className="md:hidden" />
                {children}
            </main>
        </SidebarProvider>
    );
}
