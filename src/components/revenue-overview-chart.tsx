"use client";

import { ComposedChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

export const description = "Bar + Two Lines Chart (Revenue Overview)";

const chartConfig = {
    revenue: {
        label: "Total Revenue",
        color: "#86B5EC",
    },
} satisfies ChartConfig;

type RevenueData = {
    month: string;
    revenue: number;
};

export function ChartBarWithLines({ data }: { data: RevenueData[] }) {
    return (
        <ChartContainer config={chartConfig} className="!h-[230px] min-h-0 w-full">
            <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data} barSize={15} barGap={4}>
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 600000]} ticks={[0, 150000, 300000, 450000, 600000]} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        <Bar dataKey="revenue" fill={chartConfig.revenue.color} radius={4} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
