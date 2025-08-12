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

export type Transaction = {
    transactionId: string;
    planTitle: string;
    email: string;
    amount: number;
    joinDate: string;
    endDate: string;
};

export type ApiResponse2 = {
    status: string;
    message: string;
    data: Transaction[];
};
