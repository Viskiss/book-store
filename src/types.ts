export type UserType = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
};

export type UserCreateType = {
  email: UserType['email'];
  password: UserType['password'];
};

export type ChangeUserType = {
  email: UserType['email'];
  fullName: UserType['fullName'];
  id: UserType['id'];
};

export type AvatarUserType = {
  avatar: File;
};

export type ChangePasswordType = {
  password: UserType['password'];
  newPassword: string;
  id: UserType['id'];
};

export type CartType = {
  id: string;
};

export type AutReqType = {
  token?: string;
  user: UserType;
};
