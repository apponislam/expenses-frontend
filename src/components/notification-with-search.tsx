"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NotificationItem {
    icon: string;
    isRead: boolean;
    text: string;
    date: string;
}

interface Props {
    notifications: NotificationItem[];
}

function timeAgo(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 1000 / 60);

    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    const hours = Math.floor(diffMin / 60);
    if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
}

export default function Notifications({ notifications }: Props) {
    const [search, setSearch] = useState("");
    const [localData, setLocalData] = useState([...notifications]);

    const filtered = localData.filter((n) => n.text.toLowerCase().includes(search.toLowerCase()));

    const markAsRead = (index: number) => {
        const updated = [...localData];
        updated[index].isRead = true;
        setLocalData(updated);
    };

    const markAllAsRead = () => {
        setLocalData((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="roboto-regular text-[#454B60] text-[28px]">Notifications</h1>
                <button onClick={markAllAsRead} className="text-sm text-[#0032E6] hover:underline">
                    Mark all as read
                </button>
            </div>
            <div className="flex items-center border border-[#454B6066] rounded-[4px] px-[10px] w-full mb-3 md:mb-6">
                <Search className="text-[#454B60] w-5 h-5" />
                <Input type="search" placeholder="Search notification..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-grow ml-2 p-0 bg-transparent placeholder:text-[#454B60] text-[#454B60] border-none focus:outline-none focus:ring-0 focus-visible:ring-0 shadow-none" />
            </div>

            <div>
                {filtered.map((n, i) => (
                    <div key={i} onClick={() => markAsRead(i)} className={`cursor-pointer border-b border-[#454B6066] flex items-center px-[10px] py-[20px] gap-3 md:gap-6 ${n.isRead ? "bg-white" : "bg-[#E5EBFF]"}`}>
                        <Image src={`/notifications/${n.icon}.svg`} alt="notification" width={24} height={24} />
                        <div>
                            <p className="inter-medium text-[18px]">{n.text}</p>
                            <p className="inter-regular text-[14px] text-[#454B60]">{timeAgo(n.date)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
