export type Notification = {
    icon: string;
    isRead: boolean;
    text: string;
    date: string;
};

export type ApiResponse<T> = {
    status?: string;
    success?: string;
    message: string;
    data: T;
};
