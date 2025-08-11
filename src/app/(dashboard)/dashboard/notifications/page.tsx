import Notifications from "@/components/notification-with-search";
import React from "react";

const page = () => {
    const notifications = [
        { icon: "user", isRead: false, text: "New user registered: John Doe", date: "2025-07-07T08:30:00" },
        { icon: "error", isRead: true, text: "Failed to sync data with the server.", date: "2025-07-07T09:10:00" },
        { icon: "flag", isRead: false, text: "Post by @alex flagged for review.", date: "2025-07-07T09:45:00" },
        { icon: "greencheck", isRead: true, text: "Settings saved successfully.", date: "2025-07-07T10:00:00" },
        { icon: "user", isRead: false, text: "Emma joined your workspace.", date: "2025-07-07T10:20:00" },
    ];

    return (
        <div className="p-3 mt-0 md:mt-6 md:p-0">
            <div className="bg-white rounded-[4px] p-[10px]">
                <Notifications notifications={notifications} />
            </div>
        </div>
    );
};

export default page;
