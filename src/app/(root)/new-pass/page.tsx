import ResetPasswordForm from "@/components/forms/Reset-pass-form";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="bg-[#EDF1F4] h-screen flex justify-center items-center">
            <div className="max-w-[715px] w-full bg-white p-5 border border-[#D4D4D4] rounded-[12px] m-3">
                <div className="flex justify-center mb-[30px]">
                    <Image src="/formlogo.svg" alt="Form Logo" width={400} height={295} className="rounded-[12px] w-[400px] h-[295px] max-w-full max-h-full sm:w-auto sm:h-auto" />
                </div>
                <ResetPasswordForm></ResetPasswordForm>
            </div>
        </div>
    );
};

export default page;
