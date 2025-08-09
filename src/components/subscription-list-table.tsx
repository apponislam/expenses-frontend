"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Subscription = {
    user: string;
    plan: string;
    date: string;
    reason: string;
    admin: string;
};

export default function SubscriptionsTable({ data }: { data: Subscription[] }) {
    return (
        <div className="rounded-[4px] overflow-hidden border border-[#454B6066] inter-regular">
            <Table className="xl:table-fixed w-full">
                <TableHeader>
                    <TableRow className="bg-[#EAEAEA]">
                        {["User", "Plan", "Date", "Reason", "Admin"].map((head, i) => (
                            <TableHead key={i} className="border-b border-[#454B6066] text-left md:w-1/6 px-6 py-4">
                                {head}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((sub, idx) => (
                        <TableRow key={idx} className="inter-regular text-[14px]">
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{sub.user}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{sub.plan}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{sub.date}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{sub.reason}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{sub.admin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
