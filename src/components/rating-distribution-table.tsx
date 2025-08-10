"use client";

import React, { useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search } from "lucide-react";

type MessageData = {
    user: string;
    message: string;
    registrationDate: string; // Format: "DD/MM/YYYY"
};

export default function MessagesTableWithControls({ data }: { data: MessageData[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    const filteredData = useMemo(() => {
        return data.filter((item) => item.user.toLowerCase().includes(searchTerm.toLowerCase()) || item.message.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [data, searchTerm]);

    const sortedData = useMemo(() => {
        const sorted = [...filteredData].sort((a, b) => {
            const [dayA, monthA, yearA] = a.registrationDate.split("/").map(Number);
            const [dayB, monthB, yearB] = b.registrationDate.split("/").map(Number);

            const dateA = new Date(yearA, monthA - 1, dayA).getTime();
            const dateB = new Date(yearB, monthB - 1, dayB).getTime();

            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

        return sorted;
    }, [filteredData, sortOrder]);

    return (
        <div className="bg-white p-[10px] rounded-[12px]">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <p className="inter-regular text-[18px]">Rating Distribution</p>
                <div className="flex items-stretch gap-3 md:gap-7">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-11 text-[#454B60] bg-white rounded-sm hover:text-[#454B60] hover:bg-white border border-[#454B6066] focus:outline-none focus-visible:outline-none focus-visible:ring-0">
                                <Image src="/feedback/sorticon1.svg" width={24} height={24} alt="Downarrow" />
                                Sort by
                                <Image src="/feedback/sorticon2.svg" width={12} height={12} alt="Downarrow" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {[
                                { label: "Register Date (Newest)", value: "newest" },
                                { label: "Register Date (Oldest)", value: "oldest" },
                            ].map(({ label, value }) => (
                                <DropdownMenuItem key={value} className="text-[#454B60] text-[14px] roboto-regular cursor-pointer" onClick={() => setSortOrder(value as "newest" | "oldest")}>
                                    {label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex items-center border border-[#454B6066] rounded-[4px] px-[20px] w-[400px] max-w-md">
                        <Search className="text-[#454B60] w-5 h-5" />
                        <Input type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-grow ml-2 p-0 py-0 bg-transparent placeholder:text-[#454B60] text-[#454B60] border-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 shadow-none" />
                    </div>
                </div>
            </div>

            <div className="rounded-[4px] overflow-hidden border border-[#454B6066] inter-regular">
                <Table className="xl:table-fixed w-full">
                    <TableHeader>
                        <TableRow className="bg-[#EAEAEA]">
                            {["User", "Message", "Registration Date"].map((head, i) => (
                                <TableHead key={i} className="border-b border-[#454B6066] text-left md:w-1/4 px-6 py-4">
                                    {head}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="p-6 text-center text-[#454B60]">
                                    No data here
                                </TableCell>
                            </TableRow>
                        ) : (
                            sortedData.map((item, idx) => (
                                <TableRow key={idx} className="inter-regular text-[14px]">
                                    <TableCell className={`text-left px-6 py-4 ${idx !== sortedData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{item.user}</TableCell>
                                    <TableCell className={`text-left px-6 py-4 ${idx !== sortedData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{item.message}</TableCell>
                                    <TableCell className={`text-left px-6 py-4 ${idx !== sortedData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{item.registrationDate}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
