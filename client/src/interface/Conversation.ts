import { User } from './User';

export interface Iconversation {
    _id: string;
    members: User[];
    createdAt: Date;
    updatedAt: string;
}

interface ConversationApiDataSuccess {
    conversations: Iconversation[];
}


export interface ConversationApiData {
    success?: ConversationApiDataSuccess;
    error?: { message: string }
}