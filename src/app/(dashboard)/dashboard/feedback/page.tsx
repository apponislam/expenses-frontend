import MessagesTableWithControls from "@/components/tables/rating-distribution-table";
import { Progress } from "@/components/ui/progress";
import { ApiResponse, FeedbackItem, MessageData, RatingItem } from "@/types/feedback";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Feedback - Expenses Client",
    description: "Read and submit feedback about Expenses Client.",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function fetchMessages(): Promise<MessageData[] | null> {
    try {
        const res = await fetch(`${baseUrl}/feedback/sampleMessages.json`, {
            cache: "no-store",
        });
        if (!res.ok) return null;

        const json: ApiResponse<MessageData[]> = await res.json();
        if (json.status === "success") {
            return json.data;
        }
        return null;
    } catch {
        return null;
    }
}

async function fetchRatings(): Promise<RatingItem[]> {
    const res = await fetch(`${baseUrl}/feedback/ratings.json`, { cache: "no-store" });
    const json: ApiResponse<RatingItem[]> = await res.json();
    if (json.status === "success") return json.data;
    return [];
}

async function fetchFeedback(): Promise<FeedbackItem[]> {
    const res = await fetch(`${baseUrl}/feedback//feedback.json`, { cache: "no-store" });
    const json: ApiResponse<FeedbackItem[]> = await res.json();
    if (json.status === "success") return json.data;
    return [];
}

const page = async () => {
    const messages = await fetchMessages();
    if (!messages) return <p className="p-5">Failed to load messages.</p>;

    const ratingsData = await fetchRatings();

    if (ratingsData.length === 0) return <p>No ratings found</p>;

    const feedbackData = await fetchFeedback();

    if (feedbackData.length === 0) return <p>No feedback available.</p>;

    // const feedbackData = [
    //     { name: "John Doe", rating: 5, date: "04/07/2025" },
    //     { name: "Jane Smith", rating: 4, date: "12/06/2025" },
    //     { name: "Michael Johnson", rating: 3, date: "28/05/2025" },
    // ];

    return (
        <div className="mt-3 md:mt-6 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-7">
                <div className="bg-white px-[10px] py-[18px] rounded-[12px]">
                    <div className="flex items-center justify-between mb-3">
                        <Image alt="Feedback page" src="/feedback/icon1.svg" height={44} width={44}></Image>
                        <p className="inter-regular text-[24px]">Total Massages</p>
                    </div>
                    <p className="text-right text-[28px] inter-medium">247</p>
                </div>
                <div className="bg-white px-[10px] py-[18px] rounded-[12px]">
                    <div className="flex items-center justify-between mb-3">
                        <Image alt="Feedback page" src="/feedback/icon2.svg" height={44} width={44}></Image>
                        <p className="inter-regular text-[24px]">Average Rating</p>
                    </div>
                    <p className="text-right text-[28px] inter-medium">4.2</p>
                </div>
                <div className="bg-white px-[10px] py-[18px] rounded-[12px]">
                    <div className="flex items-center justify-between mb-3">
                        <Image alt="Feedback page" src="/feedback/icon3.svg" height={44} width={44}></Image>
                        <p className="inter-regular text-[24px]">Pending Reviews</p>
                    </div>
                    <p className="text-right text-[28px] inter-medium">28</p>
                </div>
            </div>

            <MessagesTableWithControls data={messages}></MessagesTableWithControls>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
                <div className="bg-white p-[10px]  rounded-[12px] gap-3 md:gap-6">
                    <div>
                        <p className="inter-regular text-[18px] mb-3">Rating Distribution</p>
                        <div className="space-y-4">
                            {ratingsData.map((item) => (
                                <div key={item.rating} className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 w-28">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} className={`w-5 h-5 ${idx < item.rating ? "text-[#FFE101] fill-[#FFE101]" : "text-[#FFE101]"}`} />
                                        ))}
                                    </div>

                                    <div className="flex-1">
                                        <Progress value={item.percent} className="h-3 bg-[#D4D4D4] [&>div]:bg-[#FFE101]" />
                                    </div>

                                    <span className="text-sm font-medium w-10 text-left inter-regular text-[12px]">{item.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white p-[10px]  rounded-[12px] gap-3 md:gap-6">
                    <p className="inter-regular text-[18px] mb-3">Recent Rating</p>
                    <div className="space-y-3">
                        {feedbackData.map((user, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                {/* Left: Image + Name/Rating */}
                                <div className="flex items-center gap-3">
                                    <Image src="/people.svg" alt="User" width={58} height={58} className="rounded-full" />
                                    <div>
                                        <p className="inter-regular text-[18px] mb-[10px]">{user.name}</p>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < user.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Date */}
                                <p className="inter-regular text-[18px]">{user.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
