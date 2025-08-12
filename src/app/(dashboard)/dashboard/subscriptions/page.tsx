import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBarWithLines } from "@/components/charts/revenue-overview-chart";
import SubscriptionsTable from "@/components/tables/subscription-list-table";
import { ApiResponse, RevenueData, SubscriptionApiResponse } from "@/types/subscription";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function fetchRevenueData(): Promise<RevenueData | null> {
    try {
        const res = await fetch(`${baseUrl}/subscription/revenueData.json`, {
            cache: "no-store", // ensure fresh data on every request, adjust if needed
        });

        console.log(res);

        const json: ApiResponse = await res.json();
        if (json.status === "success") {
            return json.data;
        }
        return null;
    } catch {
        return null;
    }
}

async function fetchSubscriptionData(): Promise<SubscriptionApiResponse["data"] | null> {
    try {
        const res = await fetch(`${baseUrl}/subscription/subscriptionData.json`, {
            cache: "no-store",
        });

        if (!res.ok) return null;

        const json: SubscriptionApiResponse = await res.json();

        if (json.status === "success") {
            return json.data;
        }
        return null;
    } catch {
        return null;
    }
}

const page = async () => {
    const tabClass = "px-4 py-[6px] text-black hover:bg-gray-100 text-[10px] inter-regular " + "data-[state=active]:!bg-[#4A90E2] data-[state=active]:!text-white";

    const revenueData = await fetchRevenueData();

    if (!revenueData) {
        return <p className="p-5">Failed to load revenue data.</p>;
    }

    const subscriptionData = await fetchSubscriptionData();

    if (!subscriptionData) {
        return <p className="p-5">Failed to load subscription data.</p>;
    }

    return (
        <div className="mt-3 md:mt-6 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mb-3 md:mb-6">
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/subscription/icon1.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">182</h2>
                    <h5 className="roboto-regular text-[14px]">Active Users</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/subscription/icon2.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">164</h2>
                    <h5 className="roboto-regular text-[14px]">Expiring in 30 days</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/subscription/icon3.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">89</h2>
                    <h5 className="roboto-regular text-[14px]">This Month</h5>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                    <div className="flex justify-between mb-6">
                        <Image src="/subscription/icon4.svg" alt="Subscription icons" width={44} height={44}></Image>
                        <p className="roboto-regular text-[14px] ">12%</p>
                    </div>
                    <h2 className="roboto-semibold text-[32px]">24.8%</h2>
                    <h5 className="roboto-regular text-[14px]">Free to pro</h5>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 xl:gap-8 mb-3 md:mb-6 xl:mb-8">
                <div className="bg-white p-5 rounded-[12px]">
                    <Tabs defaultValue="monthly" className="w-full">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
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
                                <ChartBarWithLines data={revenueData.week} />
                            </div>
                        </TabsContent>

                        <TabsContent value="monthly">
                            <div className="w-full h-[230px] overflow-hidden">
                                <ChartBarWithLines data={revenueData.monthly} />
                            </div>
                        </TabsContent>

                        <TabsContent value="lifetime">
                            <div className="w-full h-[230px] overflow-hidden">
                                <ChartBarWithLines data={revenueData.lifetime} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 xl:gap-8">
                    <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                        <div className="flex justify-between mb-6">
                            <Image src="/subscription/icon3.svg" alt="Subscription icons" width={44} height={44}></Image>
                            <p className="roboto-regular text-[14px] ">12%</p>
                        </div>
                        <h2 className="roboto-semibold text-[32px]">$47,892</h2>
                        <h5 className="roboto-regular text-[14px]">Monthly Revenue</h5>
                    </div>
                    <div className="bg-white p-[10px] rounded-[12px] text-[#454B60]">
                        <div className="flex justify-between mb-6">
                            <Image src="/subscription/icon4.svg" alt="Subscription icons" width={44} height={44}></Image>
                            <p className="roboto-regular text-[14px] ">12%</p>
                        </div>
                        <h2 className="roboto-semibold text-[32px]">$47,892</h2>
                        <h5 className="roboto-regular text-[14px]">Annual Revenue</h5>
                    </div>
                </div>
            </div>

            <div className="bg-white p-5 rounded-[12px] mb-3 md:mb-6">
                <Tabs defaultValue="week2" className="w-full">
                    <div className="flex items-center justify-between flex-wrap gap-2">
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
                        <SubscriptionsTable data={subscriptionData.week} />
                    </TabsContent>

                    <TabsContent value="monthly2">
                        <SubscriptionsTable data={subscriptionData.monthly} />
                    </TabsContent>

                    <TabsContent value="lifetime2">
                        <SubscriptionsTable data={subscriptionData.lifetime} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default page;
