"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

// Zod Schema
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Login Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="inter-regular text-[14px]">
            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-[10px]">
                    Email
                </label>
                <input id="email" type="email" {...register("email")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-4 focus:outline-none placeholder:text-black" placeholder="example@gmail.com" />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-6 ">
                <label htmlFor="password" className="block text-sm font-medium mb-[10px]">
                    Password
                </label>
                <div className="relative">
                    <input id="password" type={showPassword ? "text" : "password"} {...register("password")} className="w-full border border-[#454B60] rounded-sm px-[10px] py-4 pr-10 focus:outline-none placeholder:text-black" placeholder="********" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                        {showPassword ? <EyeOff className="w-5 h-5 transition-opacity duration-200 ease-in-out opacity-100" /> : <Eye className="w-5 h-5 transition-opacity duration-200 ease-in-out opacity-100" />}
                    </button>

                    {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
                </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mb-[30px]">
                <label className="flex items-center text-sm text-[#454B6099]">
                    <input type="checkbox" {...register("remember")} className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#454B60] rounded-sm" />
                    Remember Password
                </label>
                <a href="/forgot-password" className="text-[#0038FF] text-sm hover:underline">
                    Forgot password?
                </a>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#4A90E2]  text-white py-2 px-4 rounded-sm transition duration-200">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
