import axios from 'axios';
import { User } from '../../interfaces/User';
import { AuthApiData } from '../../interfaces/AuthApiData';

export const register = async (inputs: User ): Promise<AuthApiData>=> {
    return axios.post('/auth/register', inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: { message: 'Unable to connect to server. Please try again' },
            }));
};

