export type UserType = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  dob: string | Date;
};

export type AutReqType = {
token: string;
user: UserType;
};

export type UserCreateType = {
  email: string;
  password: string;
};
