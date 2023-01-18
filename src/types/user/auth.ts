import type { UserType } from './update';

export type UserCreateType = {
  email: UserType['email'];
  password: UserType['password'];
};
