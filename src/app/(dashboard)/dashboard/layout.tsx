import { AppSidebar } from "@/components/app-sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Camera, LogOut, SquarePen } from "lucide-react";
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

                        <DropdownMenu>
                            <DropdownMenuTrigger className="border-0 focus:outline-none focus:ring-0">
                                <div className="flex items-center gap-3 text-left">
                                    <Image src="/people.svg" alt="User Photo" width={58} height={58} className="w-[30px] h-[30px] md:w-[58px] md:h-[58px]" />
                                    <div>
                                        <p className="text-2xl mb-2 hidden md:block">John Doe</p>
                                        <h6 className="text-[14px] hidden md:block">Admin</h6>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[180px]">
                                <DropdownMenuItem>
                                    <Camera /> Change Photo
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <SquarePen className="text-[#D9BD7B]" />
                                    Change Name
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="text-[#E40202]" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="container mx-auto">{children}</div>
            </main>
        </SidebarProvider>
    );
}
