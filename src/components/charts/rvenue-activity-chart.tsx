"use client";

import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

export const description = "Bar + Two Lines Chart (Revenue Overview)";

// Updated Data
const chartData = [
    { month: "Jan", revenue: 470000, subscriptions: 0, advertisements: 0 },
    { month: "Feb", revenue: 460000, subscriptions: 305000, advertisements: 450000 },
    { month: "Mar", revenue: 400000, subscriptions: 237000, advertisements: 357000 },
    { month: "Apr", revenue: 350000, subscriptions: 73000, advertisements: 263000 },
    { month: "May", revenue: 420000, subscriptions: 209000, advertisements: 339000 },
    { month: "Jun", revenue: 450000, subscriptions: 214000, advertisements: 354000 },
    { month: "Jul", revenue: 430000, subscriptions: 198000, advertisements: 358000 },
    { month: "Aug", revenue: 470000, subscriptions: 225000, advertisements: 375000 },
    { month: "Sep", revenue: 520000, subscriptions: 245000, advertisements: 425000 },
    { month: "Oct", revenue: 580000, subscriptions: 275000, advertisements: 485000 },
    { month: "Nov", revenue: 590000, subscriptions: 300000, advertisements: 490000 },
    { month: "Dec", revenue: 540000, subscriptions: 260000, advertisements: 430000 },
];

// Config for labels & colors
const chartConfig = {
    revenue: {
        label: "Total Revenue",
        color: "#86B5EC", // Indigo bar
    },
    subscriptions: {
        label: "Subscriptions Revenue",
        color: "#FACC15", // Yellow line
    },
    advertisements: {
        label: "Advertisement Revenue",
        color: "#22C55E", // Green line
    },
} satisfies ChartConfig;

export function ChartBarWithLines() {
    return (
        <ChartContainer config={chartConfig}>
            <div className="h-[190px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} barSize={24} barGap={4}>
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 600000]} ticks={[0, 150000, 300000, 450000, 600000]} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />

                        {/* Bar: Total Revenue */}
                        <Bar dataKey="revenue" fill={chartConfig.revenue.color} radius={[4, 4, 0, 0]} />

                        {/* Line: Subscriptions Revenue */}
                        <Line
                            type="monotone"
                            dataKey="subscriptions"
                            stroke={chartConfig.subscriptions.color}
                            strokeWidth={1}
                            dot={({ cx, cy, index }) => {
                                return <circle key={`dot-${index}`} cx={cx} cy={cy} r={4} fill="#7CB78B" stroke="#FFFFFF" strokeWidth={2} />;
                            }}
                            activeDot={{ r: 5 }}
                        />

                        {/* Line: Advertisement Revenue */}
                        <Line
                            type="monotone"
                            dataKey="advertisements"
                            stroke={chartConfig.advertisements.color}
                            strokeWidth={1}
                            dot={({ cx, cy, index }) => {
                                return <circle key={`dot-${index}`} cx={cx} cy={cy} r={4} fill="#7CB78B" stroke="#FFFFFF" strokeWidth={2} />;
                            }}
                            activeDot={{ r: 5 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
