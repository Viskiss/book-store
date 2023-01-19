import type { UserType } from './updateUser';

export type UserCreateType = {
  email: UserType['email'];
  password: UserType['password'];
};
