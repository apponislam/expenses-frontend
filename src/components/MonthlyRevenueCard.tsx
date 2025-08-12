"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ApiResponse2, RevenueData } from "@/types/overview";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function MonthlyRevenueCard() {
    const [selectedMonth, setSelectedMonth] = useState("June");
    const [data, setData] = useState<RevenueData | null>(null);
    const [loading, setLoading] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/overview/monthlyRevenue.json")
            .then((res) => res.json())
            .then((res: ApiResponse2) => {
                if (res.status === "success") {
                    setData(res.data[selectedMonth] ?? null);
                } else {
                    setData(null);
                }
            })
            .catch(() => setData(null))
            .finally(() => setLoading(false));
    }, [selectedMonth]);

    function handleMonthSelect(e: React.MouseEvent, month: string) {
        e.preventDefault();
        setSelectedMonth(month);
        setDropdownOpen(false); // CLOSE dropdown on select
    }

    return (
        <div className="bg-white p-[10px] rounded-[12px] md:col-span-2 xl:col-span-6">
            <div className="flex items-center justify-between mb-3 md:mb-8">
                <p className="text-[20px] inter-medium mb-3">Monthly Revenue</p>
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="text-white bg-[#4A90E2] rounded-[8px] hover:text-white hover:bg-[#4A90E2]" type="button">
                            {selectedMonth}
                            <Image src="/overview/downarrow.svg" width={24} height={24} alt="Downarrow" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {months.map((month) => (
                            <DropdownMenuItem asChild key={month}>
                                <button type="button" onClick={(e) => handleMonthSelect(e, month)} className="w-full text-left px-4 py-2">
                                    {month}
                                </button>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex items-center justify-between">
                {loading ? (
                    <p>Loading...</p>
                ) : data ? (
                    <>
                        <h2 className="inter-medium text-[32px]">{data.amount.toLocaleString()}</h2>
                        <h6 className={`text-right inter-regular text-[14px] mb-3 ${data.changePercent >= 0 ? "text-[#00A62C]" : "text-[#FF0000]"}`}>
                            {data.changePercent >= 0 ? "+" : ""}
                            {data.changePercent}% this month
                        </h6>
                    </>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}
