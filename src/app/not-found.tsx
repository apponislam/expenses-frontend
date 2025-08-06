import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-[#EDF1F4] h-screen flex justify-center items-center">
            <div className="max-w-[675px] m-4 w-full text-center">
                <h1 className="text-[128px] text-black mb-72 inter-medium">404</h1>

                <Link href="/">
                    <Button className="bg-[#4A90E2] w-full rounded-[4px] p-[10px]">Go Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
