import FileUpload from "@/components/change-photo-upload";
import React from "react";

const page = () => {
    return (
        <div className="flex items-center justify-center bg-[#EDF1F4] p-3 h-screen">
            <div className="relative w-full md:w-[400px] rounded-[12px] p-4">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: "12px" }}>
                    <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)" rx="12" ry="12" fill="none" stroke="#535353" strokeWidth="1" strokeDasharray="20,20" strokeLinecap="square" />
                </svg>

                <FileUpload></FileUpload>
            </div>
        </div>
    );
};

export default page;
