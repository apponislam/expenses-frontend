import { Button } from "@/components/ui/button";
import TransactionsTable from "@/components/tables/userinfo-transection-table";
import Image from "next/image";

const page = () => {
    const transactions = [
        {
            transactionId: "TXN100001",
            planTitle: "3 months",
            email: "john.doe@example.com",
            amount: 59.99,
            joinDate: "07/04/2025",
            endDate: "07/07/2025",
        },
        {
            transactionId: "TXN100002",
            planTitle: "1 month",
            email: "jane.smith@example.com",
            amount: 19.99,
            joinDate: "06/07/2025",
            endDate: "07/07/2025",
        },
        {
            transactionId: "TXN100003",
            planTitle: "3 months",
            email: "alex.jones@example.com",
            amount: 59.99,
            joinDate: "04/07/2025",
            endDate: "07/07/2025",
        },
        {
            transactionId: "TXN100004",
            planTitle: "1 month",
            email: "emma.wilson@example.com",
            amount: 19.99,
            joinDate: "07/06/2025",
            endDate: "07/07/2025",
        },
        {
            transactionId: "TXN100005",
            planTitle: "3 months",
            email: "liam.brown@example.com",
            amount: 59.99,
            joinDate: "07/05/2025",
            endDate: "07/07/2025",
        },
    ];

    console.log(transactions);

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
                <TransactionsTable data={transactions}></TransactionsTable>
            </div>
            <div className="bg-white rounded-[8px] p-[10px] mb-4 md:mb-9">
                <h1 className="inter-medium text-2xl mb-3 md:mb-6">Admin Actions</h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-6">
                    <Button className="p-2 bg-[#00A62C] text-[#FFFFFF] rounded-[4px] flex items-center gap-3 h-auto inter-regular text-[14px]">
                        <Image src="/userinfo/unblockicon.svg" alt="Unblock User" height={24} width={24}></Image>
                        Unblock User
                    </Button>
                    <Button className="p-2 bg-[#4A90E2] text-[#FFFFFF] rounded-[4px] flex items-center gap-3 h-auto inter-regular text-[14px]">
                        <Image src="/userinfo/assignpro.svg" alt="Unblock User" height={24} width={24}></Image>
                        Assign As Pro
                    </Button>
                    <Button className="p-2 bg-[#D00000] text-[#FFFFFF] rounded-[4px] flex items-center gap-3 h-auto inter-regular text-[14px]">
                        <Image src="/userinfo/blcokicon.svg" alt="Unblock User" height={24} width={24}></Image>
                        Block User
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default page;
