import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBarWithLines } from "@/components/revenue-overview-chart";
import SubscriptionsTable from "@/components/subscription-list-table";

const page = () => {
    const tabClass = "px-4 py-[6px] text-black hover:bg-gray-100 text-[10px] inter-regular " + "data-[state=active]:!bg-[#4A90E2] data-[state=active]:!text-white";

    const weekData = [
        { month: "Mon", revenue: 120000 },
        { month: "Tue", revenue: 150000 },
        { month: "Wed", revenue: 110000 },
        { month: "Thu", revenue: 180000 },
        { month: "Fri", revenue: 90000 },
        { month: "Sat", revenue: 160000 },
        { month: "Sun", revenue: 140000 },
    ];

    const monthlyData = [
        { month: "Jan", revenue: 470000 },
        { month: "Feb", revenue: 460000 },
        { month: "Mar", revenue: 400000 },
        { month: "Apr", revenue: 350000 },
        { month: "May", revenue: 420000 },
        { month: "Jun", revenue: 450000 },
        { month: "Jul", revenue: 430000 },
        { month: "Aug", revenue: 470000 },
        { month: "Sep", revenue: 520000 },
        { month: "Oct", revenue: 580000 },
        { month: "Nov", revenue: 590000 },
        { month: "Dec", revenue: 540000 },
    ];

    const lifetimeData = [
        { month: "2019", revenue: 250000 },
        { month: "2020", revenue: 310000 },
        { month: "2021", revenue: 420000 },
        { month: "2022", revenue: 480000 },
        { month: "2023", revenue: 500000 },
    ];

    type Subscription = {
        user: string;
        plan: string;
        date: string;
        reason: string;
        admin: string;
    };

    const weekData2: Subscription[] = [
        { user: "Fatima Noor", plan: "Education", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Md. Appon Islam", plan: "Basic", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Sara Khan", plan: "Pro", date: "06/07/2025", reason: "06/07/2025", admin: "Admin User" },
        { user: "Imran Hossain", plan: "Free", date: "05/07/2025", reason: "05/07/2025", admin: "Admin User" },
        { user: "Nadia Rahman", plan: "Education", date: "04/07/2025", reason: "04/07/2025", admin: "Admin User" },
    ];

    const monthlyData2: Subscription[] = [
        { user: "Sara Ahmed", plan: "Pro", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "John Doe", plan: "Education", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Alice Green", plan: "Basic", date: "01/07/2025", reason: "01/07/2025", admin: "Admin User" },
        { user: "Michael Scott", plan: "Pro", date: "02/07/2025", reason: "02/07/2025", admin: "Admin User" },
        { user: "Jessica Lee", plan: "Education", date: "03/07/2025", reason: "03/07/2025", admin: "Admin User" },
    ];

    const lifetimeData2: Subscription[] = [
        { user: "Lina Rahman", plan: "Basic", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Alex Kim", plan: "Pro", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "David Brown", plan: "Education", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Emma Watson", plan: "Basic", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
        { user: "Chris Evans", plan: "Pro", date: "07/07/2025", reason: "07/07/2025", admin: "Admin User" },
    ];

    return (
        <div className="mt-3 md:mt-6 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mb-3 md:mb-6">
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/icons/icon1.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">182</h2>
                    <h5 className="roboto-regular text-[14px]">Active Users</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/icons/icon2.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">164</h2>
                    <h5 className="roboto-regular text-[14px]">Expiring in 30 days</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/icons/icon3.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">89</h2>
                    <h5 className="roboto-regular text-[14px]">This Month</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/icons/icon4.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">24.8%</h2>
                    <h5 className="roboto-regular text-[14px]">Free to pro</h5>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 xl:gap-8 mb-3 md:mb-6 xl:mb-8">
                <div className="bg-white p-5 rounded-[12px]">
                    <Tabs defaultValue="monthly" className="w-full">
                        <div className="flex items-center justify-between">
                            <p className="inter-semibold">Revenue Overview</p>
                            <TabsList className="bg-transparent p-0 border-none shadow-none gap-2">
                                <TabsTrigger value="week" className={tabClass}>
                                    Week
                                </TabsTrigger>
                                <TabsTrigger value="monthly" className={tabClass}>
                                    Monthly
                                </TabsTrigger>
                                <TabsTrigger value="lifetime" className={tabClass}>
                                    Lifetime
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="week">
                            <div className="w-full h-[230px] overflow-hidden">
                                <ChartBarWithLines data={weekData} />
                            </div>
                        </TabsContent>

                        <TabsContent value="monthly">
                            <div className="w-full h-[230px] overflow-hidden">
                                <ChartBarWithLines data={monthlyData} />
                            </div>
                        </TabsContent>

                        <TabsContent value="lifetime">
                            <div className="w-full h-[230px] overflow-hidden">
                                <ChartBarWithLines data={lifetimeData} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="flex flex-col gap-3 md:gap-6 xl:gap-8">
                    <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                        <div className="flex justify-between mb-6">
                            <Image src="/icons/icon3.svg" alt="Subscription icons" width={44} height={44}></Image>
                            <p className="roboto-regular text-[14px] ">12%</p>
                        </div>
                        <h2 className="roboto-semibold text-[32px]">$47,892</h2>
                        <h5 className="roboto-regular text-[14px]">Monthly Revenue</h5>
                    </div>
                    <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                        <div className="flex justify-between mb-6">
                            <Image src="/icons/icon4.svg" alt="Subscription icons" width={44} height={44}></Image>
                            <p className="roboto-regular text-[14px] ">12%</p>
                        </div>
                        <h2 className="roboto-semibold text-[32px]">$47,892</h2>
                        <h5 className="roboto-regular text-[14px]">Annual Revenue</h5>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-[12px] mb-3 md:mb-6">
                <Tabs defaultValue="week2" className="w-full">
                    <div className="flex items-center justify-between">
                        <p className="inter-regular">Subscriptions List</p>
                        <TabsList className="bg-transparent p-0 border-none shadow-none gap-2">
                            <TabsTrigger value="week2" className={tabClass}>
                                Week
                            </TabsTrigger>
                            <TabsTrigger value="monthly2" className={tabClass}>
                                Monthly
                            </TabsTrigger>
                            <TabsTrigger value="lifetime2" className={tabClass}>
                                Lifetime
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="week2">
                        <SubscriptionsTable data={weekData2} />
                    </TabsContent>

                    <TabsContent value="monthly2">
                        <SubscriptionsTable data={monthlyData2} />
                    </TabsContent>

                    <TabsContent value="lifetime2">
                        <SubscriptionsTable data={lifetimeData2} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default page;
