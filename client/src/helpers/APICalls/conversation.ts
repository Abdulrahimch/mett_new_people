import axios from 'axios';
import { ConversationApiData } from '../../interface/Conversation';

export const postConversation = async (inputs: []): Promise<ConversationApiData> => {
    return await axios.post('/conversation', inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' },
            }));
};

export const getConversations = async (): Promise<ConversationApiData> => {
    return await axios.get('/conversation/')
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' },
            }));
};

