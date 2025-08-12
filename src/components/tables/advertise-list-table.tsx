"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Metrics = {
    date: string;
    impression: number;
    click: number;
    revenue: number;
};

export default function MetricsTable({ data }: { data: Metrics[] }) {
    return (
        <div className="rounded-[4px] overflow-hidden border border-[#454B6066] inter-regular">
            <Table className="xl:table-fixed w-full">
                <TableHeader>
                    <TableRow className="bg-[#EAEAEA]">
                        {["Date", "Impression", "Click", "Revenue"].map((head, i) => (
                            <TableHead key={i} className="border-b border-[#454B6066] text-left md:w-1/6 px-6 py-4">
                                {head}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx} className="inter-regular text-[14px]">
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{row.date}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{row.impression.toLocaleString()}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{row.click.toLocaleString()}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>${row.revenue.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
