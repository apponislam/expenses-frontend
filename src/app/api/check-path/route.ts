import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const pathname = searchParams.get("pathname");

    const fullscreenPaths = ["/dashboard/user/changename", "/dashboard/user/changephoto"];

    return NextResponse.json({
        isFullscreen: fullscreenPaths.includes(pathname || ""),
    });
}
