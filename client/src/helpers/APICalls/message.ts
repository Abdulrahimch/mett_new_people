import axios from 'axios';
import { Imessage, MessageApiData } from '../../interface/Message';

export const postMessage = async (inputs: Imessage): Promise<MessageApiData> => {
    return await axios.post('/message/', inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' },
        }));
};

