import LoginForm from "@/components/forms/Login-form";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "Login - Expenses Client",
    description: "Securely login to your Expenses Client account.",
};

const page = () => {
    return (
        <div className="bg-[#EDF1F4] h-screen flex justify-center items-center">
            <div className="max-w-[715px] w-full bg-white p-5 border border-[#D4D4D4] rounded-[12px] m-3">
                <div className="flex justify-center mb-[30px]">
                    <Image src="/formlogo.svg" alt="Form Logo" width={400} height={295} className="rounded-[12px] w-full md:w-[400px]  max-w-full max-h-full sm:w-auto sm:h-auto" />
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default page;
