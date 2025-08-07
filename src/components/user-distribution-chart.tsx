"use client";

import { Pie, PieChart, Cell } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "Pro vs Free User Donut Chart";

const chartData = [
    { userType: "Pro User", users: 35, fill: "#4A90E2" },
    { userType: "Free User", users: 120, fill: "#D9D9D9" },
];

const chartConfig = {
    users: { label: "Users" },
    "Pro User": { label: "Pro User", color: "#4A90E2" },
    "Free User": { label: "Free User", color: "#D9D9D9" },
} satisfies ChartConfig;

export function ChartPieDonut() {
    return (
        <CardContent className="flex-1 pb-0 px-0">
            <ChartContainer config={chartConfig} className="mx-auto h-[250px] w-[250px]">
                <PieChart width={250} height={250}>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Pie data={chartData} dataKey="users" nameKey="userType" innerRadius={65} outerRadius={90} paddingAngle={0}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
        </CardContent>
    );
}
