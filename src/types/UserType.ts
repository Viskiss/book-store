export type UserType = {
  id: string | number;
  fullName: string | null;
  email: string;
  password: string;
  dob: string | Date | null;
};

export type AutReqType = {
  token: string;
  user: UserType;
};

export type UserCreateType = {
  email: string;
  password: string;
};
