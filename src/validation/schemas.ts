import * as Yup from 'yup';

const yupValidData = {
  fullName: Yup
    .string()
    .trim()
    .min(5, 'The fullName is too short(min 5)'),

  password: Yup
    .string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('Password required'),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please retype your password.'),

  newPassword: Yup
    .string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('New password required'),

  email: Yup.string()
    .email('Email must be a valid email')
    .min(10, 'Min 10 length, Ex: 123@mail.ru')
    .required(),
};

export const singUpSchema = Yup.object().shape({
  email: yupValidData.email,
  password: yupValidData.password,
  repeatPassword: yupValidData.repeatPassword,
});

export const changeUserSchema = Yup.object().shape({
  email: yupValidData.email,
  fullName: yupValidData.fullName,
});

export const changePasswordSchema = Yup.object().shape({
  password: yupValidData.password,
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please retype your password.'),

  newPassword: yupValidData.newPassword,
});

export const logInSchema = Yup.object().shape({
  email: yupValidData.email,
  password: yupValidData.password,
});
