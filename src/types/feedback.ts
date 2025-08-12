export type MessageData = {
    user: string;
    message: string;
    registrationDate: string;
};

export type ApiResponse<T> = {
    status: string;
    message: string;
    data: T;
};

export type RatingItem = {
    rating: number;
    percent: number;
};

export type FeedbackItem = {
    name: string;
    rating: number;
    date: string;
};
