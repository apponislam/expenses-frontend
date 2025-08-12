import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
    return (
        <div className="p-3 mt-3 md:mt-6">
            <div className="bg-white rounded-[8px] p-[10px] mb-4 md:mb-9">
                <h1 className="inter-medium text-2xl mb-3">User Information</h1>
                <div className="py-4 md:py-10 md:px-[10px] flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                    <div className="block mx-auto">
                        <Image src="/userinfo/userpicture.svg" alt="User Picture" width={166} height={166} className="rounded-full "></Image>
                    </div>
                    <div className="flex-1 w-full flex justify-between">
                        <div className="flex-1">
                            <div className="mb-4 md:mb-6">
                                <h1 className="inter-medium text-[20px] mb-3">User Name</h1>
                                <p>John Doe</p>
                            </div>
                            <div className="mb-4 md:mb-6">
                                <h1 className="inter-medium text-[20px] mb-3">User ID</h1>
                                <p>#001</p>
                            </div>
                            <div>
                                <h2 className="inter-medium text-[20px] mb-3">Account Status</h2>
                                <span className="px-[10px] py-[5px] bg-[#A0D4AD] text-[#167730] rounded-[72px]">Active</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mb-4 md:mb-6">
                                <h1 className="inter-medium text-[20px] mb-3">Email</h1>
                                <p>Example@gmail.com</p>
                            </div>
                            <div className="mb-4 md:mb-6">
                                <h1 className="inter-medium text-[20px] mb-3">Joining Date</h1>
                                <p>02/05/2025</p>
                            </div>
                            <div>
                                <h2 className="inter-medium text-[20px] mb-3">Account Type</h2>
                                <button className="px-[10px] py-[5px] bg-[#FFF39A] text-[#C0AA00] rounded-[72px] flex items-center gap-2">
                                    <Image src="/userinfo/proicon.svg" alt="Pro Icon" width={24} height={24}></Image>
                                    Active
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[8px] p-[10px] mb-4 md:mb-9">
                <h1 className="inter-medium text-2xl mb-3">Payment History</h1>
            </div>
            <div className="bg-white rounded-[8px] p-[10px] mb-4 md:mb-9">
                <h1 className="inter-medium text-2xl mb-3">Admin Actions</h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-6">
                    <Button>Unblock User</Button>
                    <Button>Assign As Pro</Button>
                    <Button>Block User</Button>
                </div>
            </div>
        </div>
    );
};

export default page;
