"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type AccountType = "All" | "Pro" | "Free";
type UserAccount = "Pro" | "Free";

type User = {
    name: string;
    email: string;
    accountType: UserAccount;
    registerDate: string; // DD/MM/YYYY
};

const sampleData: User[] = [
    { name: "Sophia Bennett", email: "sophia.bennett@example.com", accountType: "Pro", registerDate: "14/02/2023" },
    { name: "Liam Carter", email: "liam.carter@example.com", accountType: "Free", registerDate: "03/07/2024" },
    { name: "Olivia Hughes", email: "olivia.hughes@example.com", accountType: "Pro", registerDate: "20/11/2022" },
    { name: "Ethan Reed", email: "ethan.reed@example.com", accountType: "Free", registerDate: "29/05/2024" },
    { name: "Isabella Morris", email: "isabella.morris@example.com", accountType: "Pro", registerDate: "12/09/2023" },
    { name: "Noah Turner", email: "noah.turner@example.com", accountType: "Free", registerDate: "06/01/2024" },
    { name: "Ava Richardson", email: "ava.richardson@example.com", accountType: "Pro", registerDate: "18/06/2022" },
    { name: "Mason Wright", email: "mason.wright@example.com", accountType: "Free", registerDate: "09/03/2024" },
    { name: "Charlotte Foster", email: "charlotte.foster@example.com", accountType: "Pro", registerDate: "27/08/2023" },
    { name: "James Parker", email: "james.parker@example.com", accountType: "Free", registerDate: "15/04/2024" },
];

export default function UsersTable({
    data,
    accountType,
}: {
    data?: User[];
    accountType?: AccountType; // Optional filter ("All" | "Pro" | "Free")
}) {
    const tableData = data ?? sampleData;
    const filteredData = accountType && accountType !== "All" ? tableData.filter((user) => user.accountType === accountType) : tableData;

    return (
        <div className="rounded-[4px] overflow-hidden border border-[#454B6066] inter-regular">
            <Table className="xl:table-fixed w-full">
                <TableHeader>
                    <TableRow className="bg-[#EAEAEA]">
                        {["Name", "Email", "Account Type", "Registration Date", "Actions"].map((head, i) => (
                            <TableHead key={i} className="border-b border-[#454B6066] text-left md:w-1/5 px-6 py-4">
                                {head}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((user, idx) => (
                        <TableRow key={idx} className="inter-regular text-[14px]">
                            {/* Name */}
                            <TableCell className={`text-left px-6 py-4 ${idx !== filteredData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.name}</TableCell>

                            {/* Email */}
                            <TableCell className={`text-left px-6 py-4 ${idx !== filteredData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.email}</TableCell>

                            {/* Account Type */}
                            <TableCell className={`text-left px-6 py-4 ${idx !== filteredData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>
                                <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${user.accountType === "Pro" ? "bg-[#C7E1FF] text-[#0066DD]" : "bg-[#F1F1F1] text-[#757575]"}`}>{user.accountType}</span>
                            </TableCell>

                            {/* Registration Date */}
                            <TableCell className={`text-left px-6 py-4 ${idx !== filteredData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.registerDate}</TableCell>

                            {/* Actions */}
                            <TableCell className={`text-left px-6 py-4 ${idx !== filteredData.length - 1 ? "border-b border-[#454B6066]" : ""}`}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="p-0 rounded-[8px] border-0 border-b border-[#454B6066]">
                                        <DropdownMenuItem className="p-[10px] roboto-regular text-[14px] border-none">
                                            <Link href="/dashboard/user/userinfo" className="flex items-center gap-3">
                                                <Image alt="blueeye" width={24} height={24} src="/blueeye.svg" />
                                                View Profile
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
