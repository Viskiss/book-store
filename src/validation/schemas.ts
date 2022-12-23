import * as Yup from 'yup';

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

export const changeUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .min(5)
    .required(),
  fullName: Yup.string()
    .min(5, 'The fullName is too short(min 5)'),

});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required(),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please retype your password.'),
});

export const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .min(5)
    .required(),
  password: Yup.string()
    .required(),
});

// export const updateUserSchema = {
//   body: {
//     fullName: yupValidData.fullName,
//     email: yupValidData.email,
//     dob: yupValidData.dob,
//   },
//   params: { userId: sharedValidation.requiredParamsId },
// };

// export const passwordSchema = {
//   body: {
//     password: yupValidData.password,
//   },
//   params: { userId: sharedValidation.requiredParamsId },
// };

// export const deleteUserSchema = {
//   params: { userId: sharedValidation.requiredParamsId },
// };
