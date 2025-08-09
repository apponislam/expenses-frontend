import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartArea } from "@/components/revenue-trends-chart";

const page = () => {
    const tabClass = "px-4 py-[6px] text-black hover:bg-gray-100 text-[10px] inter-regular " + "data-[state=active]:!bg-[#4A90E2] data-[state=active]:!text-white";

    type RevenueData = {
        month: string;
        revenue: number;
    };

    const weekData: RevenueData[] = [
        { month: "Mon", revenue: 3200 },
        { month: "Tue", revenue: 1500 },
        { month: "Wed", revenue: 4000 },
        { month: "Thu", revenue: 2500 },
        { month: "Fri", revenue: 5000 },
        { month: "Sat", revenue: 3000 },
        { month: "Sun", revenue: 4500 },
    ];

    const monthData: RevenueData[] = [
        { month: "Jan", revenue: 4500 },
        { month: "Feb", revenue: 3200 },
        { month: "Mar", revenue: 5200 },
        { month: "Apr", revenue: 3800 },
        { month: "May", revenue: 5800 },
        { month: "Jun", revenue: 2700 },
        { month: "Jul", revenue: 6000 },
        { month: "Aug", revenue: 2000 },
        { month: "Sep", revenue: 5500 },
        { month: "Oct", revenue: 3200 },
        { month: "Nov", revenue: 4800 },
        { month: "Dec", revenue: 4300 },
    ];

    return (
        <div className="mt-3 md:mt-6 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-6">
                <div className="bg-white p-[10px] rounded-[12px]">
                    <p className="text-[20px] inter-medium mb-3 text-[#535353]">Total Ad Revenue (This Month) </p>
                    <h2 className="inter-medium mb-4 text-[32px]">24,582</h2>
                    <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                </div>
                <div className="bg-white p-[10px] rounded-[12px]">
                    <p className="text-[20px] inter-medium mb-3 text-[#535353]">Todays Revenue</p>
                    <h2 className="inter-medium mb-4 text-[32px]">$842.15</h2>
                    <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                </div>
                <div className="bg-white p-[10px] rounded-[12px]">
                    <p className="text-[20px] inter-medium mb-3 text-[#535353]">Lifetime Revenue</p>
                    <h2 className="inter-medium mb-4 text-[32px]">$158,945.67</h2>
                    <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                </div>
            </div>
            <div className="bg-white p-5 rounded-[12px]">
                <Tabs defaultValue="monthly" className="w-full">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="inter-regular">Subscriptions List</p>
                        <TabsList className="bg-transparent p-0 border-none shadow-none gap-2">
                            <TabsTrigger value="week" className={tabClass}>
                                Week
                            </TabsTrigger>
                            <TabsTrigger value="monthly" className={tabClass}>
                                Monthly
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="week">
                        <ChartArea data={weekData}></ChartArea>
                    </TabsContent>

                    <TabsContent value="monthly">
                        <ChartArea data={monthData}></ChartArea>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default page;
