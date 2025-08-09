import { ChartBarWithLines } from "@/components/rvenue-activity-chart";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChartBarMultiple } from "@/components/user-activity-chart";
import { ChartPieDonut } from "@/components/user-distribution-chart";
import Image from "next/image";

const page = () => {
    return (
        <div className="mt-3 md:mt-6 mx-3">
            {/* <div className="flex items-center gap-8">
                <div className="bg-white p-[10px] rounded-[12px] w-1/2">
                    <h1>hii</h1>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] w-1/2">
                    <h1>hii</h1>
                </div>
                <div className="bg-white p-[10px] rounded-[12px] w-full">
                    <h1>hii</h1>
                </div>
            </div> */}
            <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-12 mb-3 md:mb-6">
                <div className="bg-white p-[10px] rounded-[12px] xl:col-span-3">
                    <p className="text-[20px] inter-medium mb-3">Total Users</p>
                    <h2 className="inter-medium mb-4 text-[32px]">24,582</h2>
                    <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                </div>

                <div className="bg-white p-[10px] rounded-[12px] xl:col-span-3">
                    <p className="text-[20px] inter-medium mb-3">Pro Users</p>
                    <h2 className="inter-medium mb-4 text-[32px]">24,582</h2>
                    <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                </div>

                <div className="bg-white p-[10px] rounded-[12px] md:col-span-2 xl:col-span-6">
                    <div className="flex items-center justify-between mb-3 md:mb-8">
                        <p className="text-[20px] inter-medium mb-3">Pro Users</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="text-white bg-[#4A90E2] rounded-[8px] hover:text-white hover:bg-[#4A90E2]">
                                    Monthly
                                    <Image src="/downarrow.svg" width={24} height={24} alt="Downarrow" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                                    <DropdownMenuItem key={month}>{month}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="inter-medium text-[32px]">24,582</h2>
                        <h6 className="text-right text-[#00A62C] inter-regular text-[14px] mb-3">+12% this month</h6>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-[12px] mb-3 md:mb-8">
                <div className=" md:flex justify-between items-center mb-[14px]">
                    <p className="inter-medium text-[14px] text-[#454B60] mb-3 md:mb-0">User Activity</p>
                    <div className="flex items-center gap-3 md:gap-[14px]">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-[#4A90E2]"></div>
                            <p className="inter-regular text-[14px]">Pro User</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-[#AFDBBB]"></div>
                            <p className="inter-regular text-[14px]">Free User</p>
                        </div>
                    </div>
                </div>

                <div className="h-[264px] overflow-hidden mb-3 md:mb-8">
                    <ChartBarMultiple></ChartBarMultiple>
                </div>
            </div>
            <div className="md:flex items-stretch gap-3 md:gap-5 mb-3 md:mb-6">
                <div className="bg-white p-4 md:p-5 rounded-[12px] flex-1 mb-3">
                    <div className="md:flex justify-between items-center mb-3 md:mb-[14px]">
                        <p className="inter-medium text-[14px] text-[#454B60] mb-3 md:mb-0">Revenue</p>
                        <div className="md:flex items-center gap-3 md:gap-[14px]">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#00A62C]"></div>
                                <p className="inter-regular text-[12px]">Subscriptions Revenue</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#FFE100]"></div>
                                <p className="inter-regular text-[12px]">Advertisement Revenue</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[190px] overflow-hidden mb-3 md:mb-8">
                        <ChartBarWithLines></ChartBarWithLines>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-[12px] md:w-[350px] flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-between">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[20px] inter-medium">Pro Users</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="text-white bg-[#4A90E2] rounded-[8px] hover:text-white hover:bg-[#4A90E2]">
                                        Monthly
                                        <Image src="/downarrow.svg" width={24} height={24} alt="Downarrow" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                                        <DropdownMenuItem key={month}>{month}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="w-full">
                            <ChartPieDonut></ChartPieDonut>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-[#4A90E2]"></div>
                                <p className="inter-regular text-[14px]">Pro User</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-[#AFDBBB]"></div>
                                <p className="inter-regular text-[14px]">Free User</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
