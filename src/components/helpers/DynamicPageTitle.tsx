"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
    "/dashboard": "Overview",
    "/dashboard/user": "USER",
    "/dashboard/subscriptions": "SUBSCRIPTIONS",
    "/dashboard/advertising": "ADVERTISING",
    "/dashboard/feedback": "FEEDBACK",
    "/dashboard/terms": "TERMS & CONDITIONS",
    "/dashboard/notifications": "NOTIFICATIONS",
};

export default function DynamicPageTitle() {
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? "Overview";

    return <p className="inter-regular md:text-2xl">{title}</p>;
}
