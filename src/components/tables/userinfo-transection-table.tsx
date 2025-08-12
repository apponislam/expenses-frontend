"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Transaction = {
    transactionId: string;
    planTitle: string;
    email: string;
    amount: number;
    joinDate: string;
    endDate: string;
};

export default function TransactionsTable({ data }: { data: Transaction[] }) {
    return (
        <div className="rounded-[4px] overflow-hidden border border-[#454B6066] inter-regular">
            <Table className="xl:table-fixed w-full">
                <TableHeader>
                    <TableRow className="bg-[#EAEAEA]">
                        {["Transaction ID", "Plan", "Email", "Amount", "Join Date", "End Date"].map((head, i) => (
                            <TableHead key={i} className="border-b border-[#454B6066] text-left md:w-1/6 px-6 py-4">
                                {head}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((txn, idx) => (
                        <TableRow key={idx} className="inter-regular text-[14px]">
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{txn.transactionId}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{txn.planTitle}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{txn.email}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>${txn.amount.toFixed(2)}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{txn.joinDate}</TableCell>
                            <TableCell className={`text-left px-6 py-4 ${idx !== data.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{txn.endDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
