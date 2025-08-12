export type AccountType = "All" | "Pro" | "Free";
export type UserAccount = "Pro" | "Free";

export type User = {
    name: string;
    email: string;
    accountType: UserAccount;
    registerDate: string;
};

export type ApiResponse = {
    status: string;
    message: string;
    data: User[];
};
