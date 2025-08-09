"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

export const description = "Area Chart (Revenue Overview)";

const chartConfig = {
    revenue: {
        label: "Total Revenue",
        color: "#18A0FB",
    },
} satisfies ChartConfig;

type RevenueData = {
    month: string;
    revenue: number;
};

export function ChartArea({ data }: { data: RevenueData[] }) {
    return (
        <ChartContainer config={chartConfig} className="!h-[230px] min-h-0 w-full">
            <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 6000]} ticks={[0, 1500, 3000, 4500, 6000]} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        <Area type="monotone" dataKey="revenue" stroke={chartConfig.revenue.color} fill={chartConfig.revenue.color} fillOpacity={0.05} strokeWidth={2} radius={4} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
