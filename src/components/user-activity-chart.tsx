"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
    { month: "January", desktop: 4700, mobile: 800 },
    { month: "February", desktop: 3050, mobile: 2000 },
    { month: "March", desktop: 2370, mobile: 1200 },
    { month: "April", desktop: 730, mobile: 1900 },
    { month: "May", desktop: 2090, mobile: 1300 },
    { month: "June", desktop: 2140, mobile: 1400 },
    { month: "July", desktop: 1980, mobile: 1600 },
    { month: "August", desktop: 2250, mobile: 1500 },
    { month: "September", desktop: 2450, mobile: 1800 },
    { month: "October", desktop: 2750, mobile: 2100 },
    { month: "November", desktop: 3000, mobile: 1900 },
    { month: "December", desktop: 2600, mobile: 1700 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#86B5EC",
    },
    mobile: {
        label: "Mobile",
        color: "#AFDBBB",
    },
} satisfies ChartConfig;

export function ChartBarMultiple() {
    return (
        <ChartContainer config={chartConfig}>
            <div className="h-[264px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barCategoryGap={45} barGap={0} barSize={20}>
                        {/* <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0 0" /> */}
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => value.slice(0, 3)} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} ticks={[0, 1500, 3000, 4500, 6000]} domain={[0, 6000]} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
