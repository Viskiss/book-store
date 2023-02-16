export type UserType = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
};

export type ChangeUserType = {
  email: UserType['email'];
  fullName: UserType['fullName'];
  id: UserType['id'];
};

export type AvatarUserType = {
  avatar: string;
};

export type ChangePasswordType = {
  password: UserType['password'];
  newPassword: string;
  id: UserType['id'];
};

export type ErrorType = Array<{ key: string; path: string; message: string }>;
