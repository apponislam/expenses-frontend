import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import Image from "next/image";

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
            <main className="bg-[#edf1f4] w-full">
                <div className="flex items-center justify-between border-b border-[#F1F1F1] px-2 py-4 md:px-5 md:py-8 bg-white">
                    <div className="flex gap-2 items-center  w-full">
                        <SidebarTrigger className="md:hidden" />
                        <p className="inter-regular md:text-2xl">Overview</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-8  w-full justify-end">
                        <Bell />
                        <div className="flex items-center gap-3">
                            <Image src="/people.svg" alt="User Photo" width={58} height={58} className="w-[30px] h-[30px] md:w-[58px] md:h-[58px]" />
                            <div>
                                <p className="text-2xl mb-2">John Doe</p>
                                <h6 className="text-[14px]">Admin</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1>hiiiii</h1>
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
