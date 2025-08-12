export type UserActivity = {
    month: string;
    prouser: number;
    freeuser: number;
};

export type overviewMonthlyData = {
    month: string;
    revenue: number;
    subscriptions: number;
    advertisements: number;
};

export type UserDistributionData = {
    userType: string;
    users: number;
    fill: string;
};

export type ApiResponse = {
    status: string;
    message: string;
    data: Record<string, UserDistributionData[]>;
};

export type RevenueData = {
    amount: number;
    changePercent: number;
};

export type ApiResponse2 = {
    status: string;
    message: string;
    data: Record<string, RevenueData>;
};
