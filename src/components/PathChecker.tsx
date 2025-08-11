// components/FullscreenChecker.tsx
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function FullscreenChecker({ normalLayout, fullscreenLayout }: { normalLayout: ReactNode; fullscreenLayout: ReactNode }) {
    const pathname = usePathname();

    const fullscreenPaths = ["/dashboard/user/changename", "/dashboard/user/changephoto", "/dashboard/settings"];

    return fullscreenPaths.includes(pathname) ? fullscreenLayout : normalLayout;
}
