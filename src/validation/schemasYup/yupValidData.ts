import * as Yup from 'yup';

const paramsId = Yup.number().integer().min(1);
const requiredParamsId = paramsId.required();
export const sharedValidation = {
  paramsId, requiredParamsId,
};

export const yupValidData = {
  fullName: Yup
    .string()
    .trim()
    .min(5, 'The fullName is too short(min 5)'),

  password: Yup
    .string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .max(15, 'Too long password(max 15)')
    .trim()
    .required('Password required'),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please retype your password.'),

  email: Yup
    .string()
    .lowercase()
    .email('email must be a valid email')
    .min(10, 'Min 10 length, Ex: 123@mail.ru')
    .max(30, 'Max 30 length, Ex: 123@mail.ru')
    .trim(),

  dob: Yup
    .date(),
};
