"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { UserActivity } from "@/types/overview";

export const description = "A multiple bar chart";

const chartConfig = {
    prouser: {
        label: "prouser",
        color: "#86B5EC",
    },
    freeuser: {
        label: "freeuser",
        color: "#AFDBBB",
    },
} satisfies ChartConfig;

export function ChartBarMultiple() {
    const [chartData, setChartData] = useState<UserActivity[]>([]);

    useEffect(() => {
        fetch("/overview/useractivity.json")
            .then((res) => res.json())
            .then((res) => {
                if (res.status === "success" && Array.isArray(res.data)) {
                    setChartData(res.data);
                } else {
                    console.error("Invalid response format:", res);
                }
            })
            .catch((err) => console.error("Error fetching chart data:", err));
    }, []);

    return (
        <ChartContainer config={chartConfig}>
            <div className="h-[264px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barCategoryGap={45} barGap={0} barSize={20}>
                        {/* <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0 0" /> */}
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => value.slice(0, 3)} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} ticks={[0, 1500, 3000, 4500, 6000]} domain={[0, 6000]} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        <Bar dataKey="prouser" fill="var(--color-prouser)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="freeuser" fill="var(--color-freeuser)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    );
}
