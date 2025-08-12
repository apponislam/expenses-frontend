import UsersPage from "@/components/UsersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users - Expenses Client",
    description: "Manage users and apply filters in the Expenses Client dashboard.",
};

const Page = async () => {
    return (
        <div>
            <UsersPage />
        </div>
    );
};

export default Page;
