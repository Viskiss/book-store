import * as Yup from 'yup';
import { yupValidData } from './yupValidData';

export const singUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .min(5)
    .required(),
  password: Yup.string()
    .required(),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please retype your password.'),
});

export const singInSchema = {
  body: {
    password: yupValidData.password,
    email: yupValidData.email,
  },
};
