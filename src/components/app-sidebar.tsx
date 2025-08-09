"use client";

import { ChartColumnIncreasing, LaptopMinimalCheck, LayoutDashboard, Megaphone, Shield, UserRound } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "User", url: "/dashboard/user", icon: UserRound },
    { title: "Subscriptions", url: "/subscriptions", icon: LaptopMinimalCheck },
    { title: "Advertising", url: "/advertising", icon: Megaphone },
    { title: "Feedback", url: "/feedback", icon: ChartColumnIncreasing },
    { title: "Terms & Conditions", url: "/terms", icon: Shield },
];

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="bg-white"
            style={
                {
                    borderRight: "1px solid #F1F1F1",
                    borderLeft: "none",
                    backgroundColor: "#ffffff",
                    "--sidebar-width-icon": "58px",
                } as React.CSSProperties
            }
        >
            <SidebarContent className="h-full bg-white roboto">
                <SidebarHeader className="sticky top-0 z-10 px-2 py-2 flex items-end justify-end bg-white">
                    <SidebarTrigger className="hidden md:flex w-6 h-6 [&>svg]:!w-6 [&>svg]:!h-6" />
                </SidebarHeader>

                <SidebarGroup className="bg-white">
                    <SidebarGroupContent className="bg-white">
                        <SidebarMenu className="bg-white gap-5">
                            {items.map((item) => {
                                const isActive = pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title} className={`bg-white rounded-[8px] hover:bg-[#4A90E2] hover:text-white ${isActive ? "bg-[#4A90E2] text-white" : ""}`} data-active={isActive}>
                                        <SidebarMenuButton asChild className={`px-[10px] py-[20px] flex hover:bg-[#4A90E2] hover:text-white w-full `}>
                                            <a href={item.url} className="flex items-center gap-2 text-sm [&>*]:!p-0 group-data-[collapsible=icon]:!p-0 w-full">
                                                <item.icon className="md:!w-6 md:!h-6 flex-shrink-0" />
                                                <span className="roboto-medium">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
