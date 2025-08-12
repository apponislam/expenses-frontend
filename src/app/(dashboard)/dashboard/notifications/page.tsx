import Notifications from "@/components/notification-with-search";
import { ApiResponse, Notification } from "@/types/notifications";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Notifications - Expenses Client",
    description: "View your latest notifications and alerts in Expenses Client.",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchNotifications(): Promise<Notification[] | null> {
    try {
        const res = await fetch(`${baseUrl}/notifications/notifications.json`, {
            cache: "no-store",
        });

        if (!res.ok) return null;

        const json: ApiResponse<Notification[]> = await res.json();

        // Works for both "status" and "success"
        const statusValue = json.status || json.success;

        if (statusValue === "success") {
            return json.data;
        }

        return null;
    } catch (err) {
        console.error("Error fetching notifications:", err);
        return null;
    }
}

const page = async () => {
    const notifications = await fetchNotifications();

    console.log(notifications);

    if (!notifications) {
        return <div>Failed to load notifications</div>;
    }
    return (
        <div className="p-3 mt-0 md:mt-6 md:p-0">
            <div className="bg-white rounded-[4px] p-[10px]">
                <Notifications notifications={notifications} />
            </div>
        </div>
    );
};

export default page;
