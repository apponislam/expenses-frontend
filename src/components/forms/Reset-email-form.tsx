"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const resetSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

type ResetFormData = z.infer<typeof resetSchema>;

const ResetPasswordEmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetFormData>({
        resolver: zodResolver(resetSchema),
    });

    const onSubmit = (data: ResetFormData) => {
        console.log("Reset email submitted:", data);
        // TODO: send reset request to API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="inter-regular text-[14px]">
            <div className="mb-[30px]">
                <label htmlFor="email" className="block text-sm font-medium mb-[10px]">
                    Enter your email to reset password
                </label>
                <input id="email" type="email" {...register("email")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-4 focus:outline-none placeholder:text-black" placeholder="example@gmail.com" />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-[#4A90E2] text-white py-2 px-4 rounded-sm transition duration-200">
                Send Reset Link
            </Button>
        </form>
    );
};

export default ResetPasswordEmailForm;
