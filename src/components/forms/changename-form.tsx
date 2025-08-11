"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

// Zod Schema
const nameSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
});

type NameFormData = z.infer<typeof nameSchema>;

const ChangeNameForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NameFormData>({
        resolver: zodResolver(nameSchema),
    });

    const onSubmit = (data: NameFormData) => {
        console.log("Change Name Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="roboto-regular text-[14px]">
            {/* First Name */}
            <div className="mb-3 md:mb-6">
                <label htmlFor="firstName" className="block text-sm font-medium mb-[10px]">
                    First Name
                </label>
                <input id="firstName" type="text" {...register("firstName")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-3 md:py-4 focus:outline-none placeholder:text-black" placeholder="" />
                {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div className="mb-3 md:mb-6">
                <label htmlFor="lastName" className="block text-sm font-medium mb-[10px]">
                    Last Name
                </label>
                <input id="lastName" type="text" {...register("lastName")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-3 md:py-4 focus:outline-none placeholder:text-black" placeholder="" />
                {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#4A90E2] text-white py-2 px-4 rounded-sm transition duration-200">
                Change Name
            </Button>
        </form>
    );
};

export default ChangeNameForm;
