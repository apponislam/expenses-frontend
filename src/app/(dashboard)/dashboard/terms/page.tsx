import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions - Expenses Client",
    description: "Read the terms and conditions of using Expenses Client.",
};

const page = () => {
    return (
        <div className="p-3 md:p-6">
            <h1 className="inter-bold text-2xl mb-4">Manage Terms & Conditions</h1>
            <p className="inter-regular mb-3 md:mb-8 text-[#6A6A6A]">Use this section to write or update the Terms and Conditions for your app. These terms will be displayed to users within the app and must be accepted during registration or major updates.</p>
            <div className="bg-[#DAEEDF] p-[10px] rounded-[12px] flex items-center gap-3 md:gap-6 mb-3 md:mb-6">
                <Image src="/terms/greencheck.svg" alt="greencheck" height={32} width={32}></Image>
                <p className="roboto-medium text-[#00A62C]">Your Terms & Conditions have been successfully updated and will now appear in the app.</p>
            </div>
            <form action="">
                <div className="border border-[#A3A3A3] rounded-[8px] p-[10px] mb-[14px]">
                    <p className="inter-bold text-[20px] text-[#404040] mb-[14px]">Terms & Conditions Editor</p>
                    <textarea name="terms" className="w-full h-[438px] border border-[#A3A3A3] rounded-[8px] p-[10px] placeholder:text-[#535353] text-[#535353] roboto-medium" placeholder="Write or paste your Terms & Conditions here..."></textarea>
                </div>
                <p className="text-[#535353] roboto-medium mb-3 md:mb-6">Last Updated On: January 15, 2024</p>
                <Button variant="default" className="py-[20px] px-[10px] mb-3 md:mb-6 rounded-[12px] flex items-center gap-3 text-[16px] inter-medium bg-[#4A90E2]">
                    <Image src="/terms/termsbtn.svg" alt="Terms and Condition" width={24} height={24}></Image>
                    Save Terms & Conditions
                </Button>
            </form>
        </div>
    );
};

export default page;
