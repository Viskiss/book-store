import type { UserType } from '../UserType';

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: UserType;
}
