export type RevenueItem = {
    month: string;
    revenue: number;
};

export type RevenueData = {
    week: RevenueItem[];
    monthly: RevenueItem[];
    lifetime: RevenueItem[];
};

export type ApiResponse = {
    status: string;
    message: string;
    data: RevenueData;
};

export type Subscription = {
    user: string;
    plan: string;
    date: string;
    reason: string;
    admin: string;
};

export type SubscriptionApiResponse = {
    status: string;
    message: string;
    data: {
        week: Subscription[];
        monthly: Subscription[];
        lifetime: Subscription[];
    };
};
