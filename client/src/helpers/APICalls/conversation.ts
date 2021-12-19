import axios from 'axios';
import { ConversationApiData } from '../../interface/Conversation';

export const postConversation = (inputs: []): Promise<ConversationApiData> => {
    return axios.post('/conversation', inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' },
            }));
};

export const getConversations = (): Promise<ConversationApiData> => {
    return axios.get('/conversation/')
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' },
            }));
};

