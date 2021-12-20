export interface Imessage {
    conversation: string;
    sender: string | undefined;
    text: string;
};

export interface MessageApiData {
    success?: Imessage;
    error?: { message: string }
};
