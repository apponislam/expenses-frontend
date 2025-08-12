"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AccountType, ApiResponse, User } from "@/types/users";

export default function UsersTable({ accountType = "All" }: { accountType?: AccountType }) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/user/users.json")
            .then((res) => res.json())
            .then((res: ApiResponse) => {
                if (res.status === "success" && Array.isArray(res.data)) {
                    setUsers(res.data);
                } else {
                    setUsers([]);
                }
            })
            .catch(() => {
                setUsers([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const filteredUsers = accountType === "All" ? users : users.filter((user) => user.accountType === accountType);

    if (loading) return <p>Loading users...</p>;

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
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, idx) => (
                            <TableRow key={idx} className="inter-regular text-[14px]">
                                <TableCell className={`text-left px-6 py-4 ${idx !== filteredUsers.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.name}</TableCell>
                                <TableCell className={`text-left px-6 py-4 ${idx !== filteredUsers.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.email}</TableCell>
                                <TableCell className={`text-left px-6 py-4 ${idx !== filteredUsers.length - 1 ? "border-b border-[#454B6066]" : ""}`}>
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${user.accountType === "Pro" ? "bg-[#C7E1FF] text-[#0066DD]" : "bg-[#F1F1F1] text-[#757575]"}`}>{user.accountType}</span>
                                </TableCell>
                                <TableCell className={`text-left px-6 py-4 ${idx !== filteredUsers.length - 1 ? "border-b border-[#454B6066]" : ""}`}>{user.registerDate}</TableCell>
                                <TableCell className={`text-left px-6 py-4 ${idx !== filteredUsers.length - 1 ? "border-b border-[#454B6066]" : ""}`}>
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
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                                No users found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
