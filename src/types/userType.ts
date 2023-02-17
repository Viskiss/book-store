export type UserType = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
};

export type ErrorType = Array<{ key: string; path: string; message: string }>;
