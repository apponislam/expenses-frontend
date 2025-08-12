"use client";

import React, { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChartPieDonut } from "./charts/user-distribution-chart";
import { ApiResponse, UserDistributionData } from "@/types/overview";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function UserDistribution() {
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [chartData, setChartData] = useState<UserDistributionData[]>([]);
    const [loading, setLoading] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setLoading(true);
        fetch("/overview/userDistribution.json")
            .then((res) => res.json())
            .then((res: ApiResponse) => {
                if (res.status === "success") {
                    setChartData(res.data[selectedMonth] ?? []);
                } else {
                    setChartData([]);
                }
            })
            .catch(() => setChartData([]))
            .finally(() => setLoading(false));
    }, [selectedMonth]);

    function handleSelectMonth(e: React.MouseEvent, month: string) {
        e.preventDefault();
        e.stopPropagation();
        setSelectedMonth(month);
    }

    return (
        <div className="bg-white p-5 rounded-[12px] md:w-[350px] flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-between">
                <div className="flex justify-between items-center w-full">
                    <p className="text-[20px] inter-medium">User Distributions</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button ref={buttonRef} variant="outline" className="text-white bg-[#4A90E2] rounded-[8px] hover:text-white hover:bg-[#4A90E2]" type="button">
                                {selectedMonth}
                                <Image src="/overview/downarrow.svg" width={24} height={24} alt="Downarrow" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {months.map((month) => (
                                <DropdownMenuItem asChild key={month}>
                                    <button type="button" onClick={(e) => handleSelectMonth(e, month)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "0.5rem 1rem", cursor: "pointer" }}>
                                        {month}
                                    </button>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="w-full">{loading ? <p>Loading chart...</p> : <ChartPieDonut data={chartData} />}</div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#4A90E2]"></div>
                        <p className="inter-regular text-[14px]">Pro User</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#D9D9D9]"></div>
                        <p className="inter-regular text-[14px]">Free User</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
