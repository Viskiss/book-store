import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import classNames from 'classnames';

import { toast } from 'react-toastify';
import Styles from './PasswordProfile.styles';

import { changePasswordThunk } from '../../../../redux/userStore/thunks/updateUser';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button.styles';

import eye from '../images/Hide.svg';
import { handleApiValidationError } from '../../../../utils/apiValidationError';

const PasswordProfile: React.FC = () => {
  const [changePassword, setChangePassword] = useState(false);

  const disabledInput = true;
  let userId = 0;
  let userPassword = '';

  const user = useAppSelector((store) => store.userRoot.user);

  if (user) {
    userId = user.id;
    userPassword = user.password;
  }

  const dispatch = useAppDispatch();

  const changeDataHandler = (
    type: string,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    if (type === 'password') {
      setChangePassword(true);
    }
    if (changePassword === true) {
      setChangePassword(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: userPassword || '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .lowercase()
        .min(5, 'The password is too short(min 5)')
        .trim()
        .required('Password required'),
      newPassword: Yup.string()
        .lowercase()
        .min(5, 'The password is too short(min 5)')
        .trim()
        .required('Password required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Please retype your password.'),
    }),
    onSubmit: async (values) => {
      const { password, newPassword } = values;
      await dispatch(
        changePasswordThunk({
          password,
          id: userId,
          newPassword,
        }),
      )
        .unwrap()
        .then(() => {
          toast.success('Password changed');
        })
        .catch(
          (error: {
            error: Array<{ key: string; path: string; message: string }>;
            message: string;
          }) => {
            if (error?.error && error.message === 'ValidationError') {
              handleApiValidationError(error.error, formik.setErrors);
            } else {
              toast.error(error.message);
            }
          },
        );
    },
  });

  const stylesInputPassword = classNames({
    'form-input': true,
    'error-input': formik.touched.password ? formik.errors.password : undefined,
  });

  return (
    <Styles>
      <form className="user-password" onSubmit={formik.handleSubmit}>
        <div className="user-change_preview">
          <h3>Password</h3>
          <a onClick={(e) => changeDataHandler('password', e)} href="">
            Change password
          </a>
        </div>
        {!changePassword ? (
          <div className="data-box">
            <label>Old password</label>
            <Input
              disabled={disabledInput}
              img={eye}
              classStyles="form-input"
              type="password"
              placeholder="***********"
              {...formik.getFieldProps('password')}
            />
          </div>
        ) : (
          <>
            <>
              <div className="data-box">
                <label>Old password</label>
                <Input
                  img={eye}
                  classStyles={stylesInputPassword}
                  type="password"
                  placeholder="***********"
                  label="Old password"
                  errors={
                    formik.touched.password ? formik.errors.password : undefined
                  }
                  touched={`${formik.touched.password}` || ''}
                  {...formik.getFieldProps('password')}
                />
              </div>
              <Input
                img={eye}
                classStyles={stylesInputPassword}
                placeholder="New password"
                label="Enter your password"
                type="password"
                errors={
                  formik.touched.newPassword
                    ? formik.errors.newPassword
                    : undefined
                }
                touched={`${formik.touched.newPassword}` || ''}
                {...formik.getFieldProps('newPassword')}
              />
              <Input
                classStyles={stylesInputPassword}
                img={eye}
                placeholder="Password replay"
                label="Repeat your password without errors"
                type="password"
                errors={
                  formik.touched.repeatPassword
                    ? formik.errors.repeatPassword
                    : undefined
                }
                touched={`${formik.touched.repeatPassword}` || ''}
                {...formik.getFieldProps('repeatPassword')}
              />
            </>
            <Button className="simple-button" type="submit">
              Confirm
            </Button>
          </>
        )}
      </form>
    </Styles>
  );
};

export default PasswordProfile;
