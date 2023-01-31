import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { changePasswordThunk } from 'src/redux/userStore/thunks/updateUser';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { fieldsValidation } from 'src/utils/validationFields';
import {
  handleApiValidationError,
  matchError,
} from 'src/utils/handleApiValidationError';

import eye from 'src/ui/assets/images/icon/Hide.svg';

const PasswordProfile: React.FC = () => {
  const [changePassword, setChangePassword] = useState(false);

  const disabledInput = true;
  let userId = 0;
  let userPassword = '';

  const user = useAppSelector((store) => store.userStore.user);

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
      password: fieldsValidation.password,
      newPassword: fieldsValidation.newPassword,
      repeatPassword: fieldsValidation.repeatPasswordProfile,
    }),
    onSubmit: async (values) => {
      try {
        const { password, newPassword } = values;
        await dispatch(
          changePasswordThunk({ password, id: userId, newPassword }),
        ).unwrap();
      } catch (error) {
        if (matchError(error)) {
          handleApiValidationError(error.error, formik.setErrors);
          return;
        }
        toast.error('Unexpected server error');
      }
    },
  });

  const stylesInputPassword = classNames({
    'form-input': true,
    'error-input': formik.touched.password ? formik.errors.password : undefined,
  });

  return (
    <div>
      <form className="user-password" onSubmit={formik.handleSubmit}>
        <div className="user-change-preview">
          <h3 className="user-change-preview__title">Password</h3>
          <a className="user-change-preview__link" onClick={(e) => changeDataHandler('password', e)} href="">
            Change password
          </a>
        </div>
        {!changePassword ? (
          <div className="data-box">
            <label>Old password</label>
            <Input
              disabled={disabledInput}
              img={eye}
              className="form-input"
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
                  className={stylesInputPassword}
                  type="password"
                  placeholder="***********"
                  label="Old password"
                  errors={
                    formik.touched.password ? formik.errors.password : undefined
                  }
                  touched={formik.touched.password || ''}
                  {...formik.getFieldProps('password')}
                />
              </div>
              <Input
                img={eye}
                className={stylesInputPassword}
                placeholder="New password"
                label="Enter your password"
                type="password"
                errors={
                  formik.touched.newPassword
                    ? formik.errors.newPassword
                    : undefined
                }
                touched={formik.touched.newPassword || ''}
                {...formik.getFieldProps('newPassword')}
              />
              <Input
                className={stylesInputPassword}
                img={eye}
                placeholder="Password replay"
                label="Repeat your password without errors"
                type="password"
                errors={
                  formik.touched.repeatPassword
                    ? formik.errors.repeatPassword
                    : undefined
                }
                touched={formik.touched.repeatPassword || ''}
                {...formik.getFieldProps('repeatPassword')}
              />
            </>
            <Button className="simple-button" type="submit">
              Confirm
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default PasswordProfile;
