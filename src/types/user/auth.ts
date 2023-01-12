import type { UserType } from './update';

export type UserCreateType = {
  email: UserType['email'];
  password: UserType['password'];
};

export type AutReqType = {
  token?: string;
  user: UserType;
};
