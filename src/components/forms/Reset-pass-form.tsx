"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

const resetPasswordSchema = z
    .object({
        password: z.string().min(6, { message: "Password must be at least 6 characters" }),
        confirmPassword: z.string().min(6, { message: "Please confirm your password" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = (data: ResetPasswordFormData) => {
        console.log("Reset Password Data:", data);
        // TODO: send reset to API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="inter-regular text-[14px]">
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-[10px]">
                    New Password
                </label>
                <div className="relative">
                    <input id="password" type={showPassword ? "text" : "password"} {...register("password")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-4 pr-10 focus:outline-none placeholder:text-black" placeholder="********" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-[10px]">
                    Confirm New Password
                </label>
                <div className="relative">
                    <input id="confirmPassword" type={showConfirm ? "text" : "password"} {...register("confirmPassword")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-4 pr-10 focus:outline-none placeholder:text-black" placeholder="********" />
                    <button type="button" onClick={() => setShowConfirm((prev) => !prev)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                        {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                </div>
            </div>

            <Button type="submit" className="w-full bg-[#4A90E2] text-white py-2 px-4 rounded-sm transition duration-200">
                Reset Password
            </Button>
        </form>
    );
};

export default ResetPasswordForm;
