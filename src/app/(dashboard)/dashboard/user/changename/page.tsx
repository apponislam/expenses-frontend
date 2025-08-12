import ChangeNameForm from "@/components/forms/changename-form";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Change User Name - Expenses Client",
    description: "Update your display name on Expenses Client.",
};

const page = () => {
    return (
        <div className="h-screen w-full bg-[#EDF1F4] flex items-center justify-center p-3">
            <div className="bg-white p-3 md:p-5 border border-[#D4D4D4] rounded-[8px] max-w-[715px] w-full">
                <div className="flex justify-center mb-[30px]">
                    <Image src="/formlogo.svg" alt="Form Logo" width={400} height={295} className="rounded-[12px] w-full md:w-[400px] max-w-full max-h-full sm:w-auto sm:h-auto" />
                </div>
                <ChangeNameForm></ChangeNameForm>
            </div>
        </div>
    );
};

export default page;
