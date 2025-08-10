import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartArea } from "@/components/revenue-trends-chart";
import MetricsTable from "@/components/advertise-list-table";

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

    type Metrics = {
        date: string;
        impression: number;
        click: number;
        revenue: number;
    };

    const weekMetricsData: Metrics[] = [
        { date: "07/07/2025", impression: 12345, click: 456, revenue: 7890 },
        { date: "08/07/2025", impression: 15000, click: 500, revenue: 10200 },
        { date: "09/07/2025", impression: 10000, click: 320, revenue: 6700 },
        { date: "10/07/2025", impression: 13000, click: 410, revenue: 8500 },
        { date: "11/07/2025", impression: 11000, click: 380, revenue: 7200 },
        { date: "12/07/2025", impression: 16000, click: 600, revenue: 11500 },
        { date: "13/07/2025", impression: 14000, click: 470, revenue: 9000 },
    ];

    const monthMetricsData: Metrics[] = [
        { date: "Jan 2025", impression: 320000, click: 14500, revenue: 198000 },
        { date: "Feb 2025", impression: 280000, click: 13000, revenue: 176000 },
        { date: "Mar 2025", impression: 350000, click: 16500, revenue: 210000 },
        { date: "Apr 2025", impression: 300000, click: 15000, revenue: 195000 },
        { date: "May 2025", impression: 370000, click: 17500, revenue: 225000 },
        { date: "Jun 2025", impression: 360000, click: 17000, revenue: 220000 },
        { date: "Jul 2025", impression: 400000, click: 18500, revenue: 250000 },
        { date: "Aug 2025", impression: 390000, click: 18000, revenue: 245000 },
        { date: "Sep 2025", impression: 410000, click: 19000, revenue: 260000 },
        { date: "Oct 2025", impression: 420000, click: 20000, revenue: 270000 },
        { date: "Nov 2025", impression: 430000, click: 20500, revenue: 280000 },
        { date: "Dec 2025", impression: 450000, click: 21000, revenue: 290000 },
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
            <div className="bg-white p-5 rounded-[12px] mb-3 md:mb-5">
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
            <div className="bg-white p-5 rounded-[12px] mb-3 md:mb-6">
                <Tabs defaultValue="week" className="w-full">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="inter-regular">Revenue Breakdown</p>
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
                        <MetricsTable data={weekMetricsData} />
                    </TabsContent>

                    <TabsContent value="monthly">
                        <MetricsTable data={monthMetricsData} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default page;
