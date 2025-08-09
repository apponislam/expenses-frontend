// import Image from "next/image";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import UsersTable from "@/components/user-table";

// const page = () => {
//     return (
//         <div className="mt-3 md:mt-6 mx-3">
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-8 mb-3 md:mb-6">
//                 <div className="bg-white py-5 px-[10px] rounded-[12px]">
//                     <div className="flex items-center justify-between mb-3">
//                         <Image src="/userpicture.svg" height={44} width={44} alt="user picture"></Image>
//                         <h2 className="inter-regular text-2xl">Total User</h2>
//                     </div>
//                     <p className="text-right inter-medium text-[28px]">2,547</p>
//                 </div>
//                 <div className="bg-white py-5 px-[10px] rounded-[12px]">
//                     <div className="flex items-center justify-between mb-3">
//                         <Image src="/userpicture.svg" height={44} width={44} alt="user picture"></Image>
//                         <h2 className="inter-regular text-2xl">Pro User</h2>
//                     </div>
//                     <p className="text-right inter-medium text-[28px]">420</p>
//                 </div>
//                 <div className="bg-white py-5 px-[10px] rounded-[12px]">
//                     <div className="flex items-center justify-between mb-3">
//                         <Image src="/userpicture.svg" height={44} width={44} alt="user picture"></Image>
//                         <h2 className="inter-regular text-2xl">Normal User</h2>
//                     </div>
//                     <p className="text-right inter-medium text-[28px]">830</p>
//                 </div>
//             </div>
//             <div className="bg-white p-[10px] rounded-[12px]">
//                 <div className="flex items-center gap-4 mb-[14px] flex-wrap">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
//                                 <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} className="text-black"></Image>
//                                 Filters
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem>Profile</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Billing</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Team</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Subscription</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
//                                 All status
//                                 <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} className="text-black"></Image>
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem>Profile</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Billing</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Team</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Subscription</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
//                                 All Account Type
//                                 <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} className="text-black"></Image>
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem>Pro</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>Free</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>
//                 <div>
//                     <UsersTable></UsersTable>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default page;

"use client";

import Image from "next/image";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import UsersTable from "@/components/user-table";

const Page = () => {
    const [accountType, setAccountType] = useState<"All" | "Pro" | "Free">("All");

    return (
        <div className="mt-3 md:mt-6 mx-3">
            {/* Top Stats */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-8 mb-3 md:mb-6">
                {[
                    { label: "Total User", value: "2,547" },
                    { label: "Pro User", value: "420" },
                    { label: "Normal User", value: "830" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white py-5 px-[10px] rounded-[12px]">
                        <div className="flex items-center justify-between mb-3">
                            <Image src="/userpicture.svg" height={44} width={44} alt="user picture" />
                            <h2 className="inter-regular text-2xl">{stat.label}</h2>
                        </div>
                        <p className="text-right inter-medium text-[28px]">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Table + Filters */}
            <div className="bg-white p-[10px] rounded-[12px] mb-3">
                <div className="flex items-center gap-4 mb-[14px] flex-wrap">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
                                <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} />
                                Filters
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>All</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Pro</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Free</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
                                All status
                                <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>All</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Pro</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Free</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border border-[#454B6066] p-[10px] roboto-regular">
                                {accountType === "All" ? "All Account Type" : accountType}
                                <Image alt="downarrow" src="/downarrowblack.svg" height={12} width={12} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setAccountType("All")}>All</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setAccountType("Pro")}>Pro</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setAccountType("Free")}>Free</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Users Table */}
                {/* <UsersTable /> */}
                <UsersTable accountType={accountType} />
            </div>
        </div>
    );
};

export default Page;
