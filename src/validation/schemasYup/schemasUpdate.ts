import { yupValidData, sharedValidation } from './yupValidData';

export const updateUserSchema = {
  body: {
    fullName: yupValidData.fullName,
    email: yupValidData.email,
    dob: yupValidData.dob,
  },
  params: { userId: sharedValidation.requiredParamsId },
};

export const passwordSchema = {
  body: {
    password: yupValidData.password,
  },
  params: { userId: sharedValidation.requiredParamsId },
};

export const deleteUserSchema = {
  params: { userId: sharedValidation.requiredParamsId },
};
