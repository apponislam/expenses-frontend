import MessagesTableWithControls from "@/components/rating-distribution-table";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
    const sampleMessages = [
        {
            user: "Sophia Bennett",
            message: "Looking forward to the new update!",
            registrationDate: "14/02/2023",
        },
        {
            user: "Liam Carter",
            message: "Having trouble with login, please assist.",
            registrationDate: "03/07/2024",
        },
        {
            user: "Olivia Hughes",
            message: "Feature request: Dark mode support.",
            registrationDate: "20/11/2022",
        },
        {
            user: "Ethan Reed",
            message: "Thanks for the quick response!",
            registrationDate: "29/05/2024",
        },
        {
            user: "Isabella Morris",
            message: "App crashes sometimes when uploading files.",
            registrationDate: "12/09/2023",
        },
        {
            user: "Noah Turner",
            message: "How do I reset my password?",
            registrationDate: "06/01/2024",
        },
        {
            user: "Ava Richardson",
            message: "Great interface and smooth experience.",
            registrationDate: "18/06/2022",
        },
        {
            user: "Mason Wright",
            message: "Waiting for your reply on the billing issue.",
            registrationDate: "09/03/2024",
        },
        {
            user: "Charlotte Foster",
            message: "Can you add multi-language support?",
            registrationDate: "27/08/2023",
        },
        {
            user: "James Parker",
            message: "Bug report: Notifications not showing.",
            registrationDate: "15/04/2024",
        },
    ];

    const ratingsData = [
        { rating: 5, percent: 42 },
        { rating: 4, percent: 27 },
        { rating: 3, percent: 15 },
        { rating: 2, percent: 9 },
        { rating: 1, percent: 7 },
    ];

    const feedbackData = [
        { name: "John Doe", rating: 5, date: "04/07/2025" },
        { name: "Jane Smith", rating: 4, date: "12/06/2025" },
        { name: "Michael Johnson", rating: 3, date: "28/05/2025" },
    ];

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

            <MessagesTableWithControls data={sampleMessages}></MessagesTableWithControls>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
                <div className="bg-white p-[10px]  rounded-[12px] gap-3 md:gap-6">
                    <div>
                        <p className="inter-regular text-[18px] mb-3">Rating Distribution</p>
                        <div className="space-y-4">
                            {ratingsData.map((item) => (
                                <div key={item.rating} className="flex items-center gap-4">
                                    {/* Left side: Star + rating */}
                                    <div className="flex items-center gap-1 w-28">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} className={`w-5 h-5 ${idx < item.rating ? "text-[#FFE101] fill-[#FFE101]" : "text-[#FFE101]"}`} />
                                        ))}
                                    </div>

                                    {/* Right side: Progress bar */}
                                    <div className="flex-1">
                                        <Progress value={item.percent} className="h-3 bg-[#D4D4D4] [&>div]:bg-[#FFE101]" />
                                    </div>

                                    {/* Percentage text */}
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
