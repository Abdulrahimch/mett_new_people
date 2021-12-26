export interface Imessage {
    conversation?: string | null | undefined;
    sender: string | undefined;
    text: string;
    createdAt?: Date;
};

export interface MessageApiData {
    success?: { message: Imessage };
    error?: { message: string }
};

export interface GetMessagesApiData {
    success?: { messages: Imessage[] };
    error?: { message: string }
};