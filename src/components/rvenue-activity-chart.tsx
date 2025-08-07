"use client";

import { BarChart, Bar, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

export const description = "Bar and Two Line Chart";

const chartData = [
    { month: "Jan", desktop: 4700, total: 5500, growth: 3200 },
    { month: "Feb", desktop: 3050, total: 5050, growth: 3100 },
    { month: "Mar", desktop: 2370, total: 3570, growth: 2900 },
    { month: "Apr", desktop: 730, total: 2630, growth: 2100 },
    { month: "May", desktop: 2090, total: 3390, growth: 2700 },
    { month: "Jun", desktop: 2140, total: 3540, growth: 3000 },
    { month: "Jul", desktop: 1980, total: 3580, growth: 2800 },
    { month: "Aug", desktop: 2250, total: 3750, growth: 3100 },
    { month: "Sep", desktop: 2450, total: 4250, growth: 3500 },
    { month: "Oct", desktop: 2750, total: 4850, growth: 4100 },
    { month: "Nov", desktop: 3000, total: 4900, growth: 4200 },
    { month: "Dec", desktop: 2600, total: 4300, growth: 3900 },
];

const chartConfig = {
    desktop: {
        label: "Desktop Revenue",
        color: "#4F46E5", // Indigo
    },
    total: {
        label: "Total Revenue",
        color: "#F79009", // Amber
    },
    growth: {
        label: "Growth",
        color: "#10B981", // Emerald
    },
} satisfies ChartConfig;

export function ChartBarWithLine() {
    return (
        <ChartContainer config={chartConfig}>
            <div className="h-[264px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barSize={24} barGap={4}>
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 6000]} ticks={[0, 1500, 3000, 4500, 6000]} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />

                        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={[4, 4, 0, 0]} />

                        <Line type="monotone" dataKey="total" stroke={chartConfig.total.color} strokeWidth={20} dot={{ r: 3 }} activeDot={{ r: 5 }} />

                        <Line type="monotone" dataKey="growth" stroke={chartConfig.growth.color} strokeWidth={20} strokeDasharray="4 2" dot={{ r: 3 }} activeDot={{ r: 5 }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
