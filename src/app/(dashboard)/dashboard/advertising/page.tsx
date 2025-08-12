import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartArea } from "@/components/charts/revenue-trends-chart";
import MetricsTable from "@/components/tables/advertise-list-table";

const tabClass = "px-4 py-[6px] text-black hover:bg-gray-100 text-[10px] inter-regular " + "data-[state=active]:!bg-[#4A90E2] data-[state=active]:!text-white";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

type RevenueData = {
    month: string;
    revenue: number;
};

type Metrics = {
    date: string;
    impression: number;
    click: number;
    revenue: number;
};

type ApiResponse<T> = {
    status: string;
    message: string;
    data: T;
};

async function fetchRevenueData(): Promise<{ week: RevenueData[]; month: RevenueData[] } | null> {
    try {
        const res = await fetch(`${baseUrl}/advertising/revenue.json`, { cache: "no-store" });
        const json: ApiResponse<{ week: RevenueData[]; month: RevenueData[] }> = await res.json();
        if (json.status === "success") {
            return json.data;
        }
        return null;
    } catch {
        return null;
    }
}

async function fetchMetricsData(): Promise<{ week: Metrics[]; month: Metrics[] } | null> {
    try {
        const res = await fetch(`${baseUrl}/advertising/metrics.json`, { cache: "no-store" });
        const json: ApiResponse<{ week: Metrics[]; month: Metrics[] }> = await res.json();
        if (json.status === "success") {
            return json.data;
        }
        return null;
    } catch {
        return null;
    }
}

const Page = async () => {
    const revenueData = await fetchRevenueData();
    const metricsData = await fetchMetricsData();

    if (!revenueData || !metricsData) {
        return <p className="p-5">Failed to load data.</p>;
    }

    return (
        <div className="mt-3 md:mt-6 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-6">
                <div className="bg-white p-[10px] rounded-[12px]">
                    <p className="text-[20px] inter-medium mb-3 text-[#535353]">Total Ad Revenue (This Month)</p>
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
                        <ChartArea data={revenueData.week} />
                    </TabsContent>

                    <TabsContent value="monthly">
                        <ChartArea data={revenueData.month} />
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
                        <MetricsTable data={metricsData.week} />
                    </TabsContent>

                    <TabsContent value="monthly">
                        <MetricsTable data={metricsData.month} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Page;
