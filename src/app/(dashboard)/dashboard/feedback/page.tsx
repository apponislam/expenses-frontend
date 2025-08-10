import MessagesTableWithControls from "@/components/rating-distribution-table";
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div></div>
            </div>
        </div>
    );
};

export default page;
