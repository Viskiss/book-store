import { useFormik } from 'formik';
import { useState } from 'react';

import Styles from './PasswordProfile.styles';

import { changePasswordThunk } from '../../../../redux/userStore/userThunks';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { changePasswordSchema } from '../../../../validation/schemas';

import Input from '../../../auxiliaryComponents/Input';
import Button from '../../../auxiliaryComponents/Button/Button.styles';

import eye from '../images/Hide.svg';

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
  };

  const dataPassword = useFormik({
    initialValues: {
      password: userPassword || '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      const { password, newPassword } = values;
      await dispatch(changePasswordThunk({
        password,
        id: userId,
        newPassword,
      }));
    },
  });

  return (
    <Styles>
      <form className="user-password" onSubmit={dataPassword.handleSubmit}>
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
              classStyles="search-input"
              type="password"
              placeholder="***********"
              {...dataPassword.getFieldProps('password')}
            />
          </div>
        ) : (
          <>
            <>
              <div className="data-box">
                <label>Old password</label>
                <Input
                  img={eye}
                  classStyles="search-input"
                  type="password"
                  placeholder="***********"
                  label="Old password"
                  {...dataPassword.getFieldProps('password')}
                />
              </div>
              <Input
                img={eye}
                classStyles="search-input"
                placeholder="New password"
                label="Enter your password"
                type="password"
                errors={dataPassword.errors.password}
                touched={dataPassword.touched.password}
                {...dataPassword.getFieldProps('newPassword')}
              />
              <Input
              classStyles="search-input"
                img={eye}
                placeholder="Password replay"
                label="Repeat your password without errors"
                type="password"
                errors={dataPassword.errors.repeatPassword}
                touched={dataPassword.touched.repeatPassword}
                {...dataPassword.getFieldProps('repeatPassword')}
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
