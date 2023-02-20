import { useFormik } from 'formik';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { useAppDispatch } from 'src/redux/store';
import { logInUserThunk } from 'src/redux/userStore/thunks/authUser';

import { fieldsValidation } from 'src/utils/validationFields';
import {
  handlerApiValidationError,
  matchError,
} from 'src/utils/handleApiValidationError';
import { navigationRoutes } from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';

import mailIcon from 'src/ui/assets/images/icon/Mail.svg';
import eyeIcon from 'src/ui/assets/images/icon/Hide.svg';
import menPicture from 'src/ui/assets/images/men.svg';

import StyledLogin from './SignIn.styles';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const success = tokenHelper.token.get;

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
        await dispatch(logInUserThunk({ email, password })).unwrap();
        if (success !== undefined) {
          navigate(navigationRoutes.home);
        }
      } catch (error) {
        if (matchError(error)) {
          handlerApiValidationError(error.error, formik.setErrors);
          return;
        }
        toast.error('Unexpected server error');
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
              className={classNames({
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
              className={classNames({
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
