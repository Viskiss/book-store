import * as Yup from 'yup';

export const fieldsValidation = {
  email: Yup.string()
    .email('Email must be a valid email')
    .min(10, 'Min 10 length, Ex: 123@mail.ru')
    .required(),
  password: Yup.string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('Password required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please retype your password.'),
  fullName: Yup.string().trim().min(5, 'The fullName is too short(min 5)'),
  newPassword: Yup.string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('Password required'),
  repeatPasswordProfile: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please retype your password.'),

};
