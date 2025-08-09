"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
    "/dashboard": "Overview",
    "/dashboard/user": "User",
    "/dashboard/subscriptions": "Subscriptions",
    "/dashboard/advertising": "Advertising",
    "/dashboard/feedback": "Feedback",
    "/dashboard/terms": "Terms & Conditions",
};

export default function DynamicPageTitle() {
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? "Overview";

    return <p className="inter-regular md:text-2xl">{title}</p>;
}
