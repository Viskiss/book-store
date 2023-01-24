import { useFormik } from 'formik';
import classNames from 'classnames';
import type { ToastContent } from 'react-toastify';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { logInUserThunk } from 'src/redux/userStore/thunks/authUser';
import { fieldsValidation } from 'src/utils/validationFields';
import {
  handleApiValidationError,
  validationError,
} from 'src/utils/handleApiValidationError';

import constants from 'src/utils/constants';

import mailIcon from 'src/ui/assets/images/Mail.svg';
import eyeIcon from 'src/ui/assets/images/Hide.svg';
import menPicture from 'src/ui/assets/images/men.svg';

import StyledLogin from './SignIn.styles';

const SignIn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const success = useAppSelector((store) => store.userStore.user);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: fieldsValidation.email,
      password: fieldsValidation.password,
    }),
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        await dispatch(logInUserThunk({ email, password }))
          .unwrap()
          .then(() => {
            navigate(`${success}` ? `${constants.routesLink.home}` : `${location.state.from.pathname}`);
          });
      } catch (error) {
        if (validationError(error)) {
          handleApiValidationError(
            error as { key: string; path: string; message: string }[],
            formik.setErrors,
          );
        }
        toast.error(error as ToastContent<unknown>);
      }
    },
  });

  return (
    <StyledLogin>
      <div className="login_container">
        <div>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">Sign In</h1>

            <Input
              img={mailIcon}
              classStyles={classNames({
                'form-input': true,
                'error-input': formik.touched.email
                  ? formik.errors.email
                  : undefined,
              })}
              placeholder="Email"
              label="Enter your email"
              errors={formik.touched.email ? formik.errors.email : undefined}
              touched={formik.touched.email || ''}
              {...formik.getFieldProps('email')}
            />
            <Input
              img={eyeIcon}
              classStyles={classNames({
                'form-input': true,
                'error-input': formik.touched.password
                  ? formik.errors.password
                  : undefined,
              })}
              placeholder="Password"
              label="Enter your password"
              type="password"
              errors={
                formik.touched.password ? formik.errors.password : undefined
              }
              touched={formik.touched.password || ''}
              {...formik.getFieldProps('password')}
            />

            <Button className="simple-button" type="submit">
              Log In
            </Button>
          </form>
        </div>
        <div className="image-box">
          <img className="men-pick" src={menPicture} alt="" />
        </div>
      </div>
    </StyledLogin>
  );
};

export default SignIn;
