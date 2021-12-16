import { User } from './User';

export interface AuthApiDataSuccess {
    user: User
    token: string
}

export interface AuthApiData {
    success?: AuthApiDataSuccess;
    error?: { message: string } 
}