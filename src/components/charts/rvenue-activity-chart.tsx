"use client";

import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { overviewMonthlyData } from "@/types/overview";

export const description = "Bar + Two Lines Chart (Revenue Overview)";

// Config for labels & colors
const chartConfig = {
    revenue: {
        label: "Total Revenue",
        color: "#86B5EC",
    },
    subscriptions: {
        label: "Subscriptions Revenue",
        color: "#FACC15",
    },
    advertisements: {
        label: "Advertisement Revenue",
        color: "#22C55E",
    },
} satisfies ChartConfig;

export function ChartBarWithLines() {
    const [chartData, setChartData] = useState<overviewMonthlyData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/overview/revenue-data.json")
            .then((res) => res.json())
            .then((res) => {
                if (res.status === "success" && Array.isArray(res.data)) {
                    setChartData(res.data);
                    setError(null);
                } else {
                    setError("Invalid data format");
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading chart data...</div>;
    if (error) return <div>Error loading data: {error}</div>;

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
