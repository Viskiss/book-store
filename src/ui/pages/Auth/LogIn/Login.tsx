import { useFormik } from 'formik';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from 'ui/components/Input';
import Button from 'ui/components/Button/Button.styles';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { logInUserThunk } from 'redux/userStore/thunks/authUser';
import handleApiValidationError from 'utils/handleApiValidationError';
import { validFields } from 'utils/yupValid';

import mailIcon from 'ui/assets/images/Mail.svg';
import eyeIcon from 'ui/assets/images/Hide.svg';
import menPicture from 'ui/assets/images/men.svg';

import StyledLogin from './Login.styles';

const Login: React.FC = () => {
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
      email: validFields.email,
      password: validFields.password,
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      await dispatch(logInUserThunk({ email, password }))
        .unwrap()
        .then(() => {
          navigate(`${success}` ? '/' : `${location.state.from.pathname}`);
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

  const stylesInputEmail = classNames({
    'form-input': true,
    'error-input': formik.touched.email ? formik.errors.email : undefined,
  });

  const stylesInputPassword = classNames({
    'form-input': true,
    'error-input': formik.touched.password ? formik.errors.password : undefined,
  });

  return (
    <StyledLogin>
      <div className="login_container">
        <div>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">Log In</h1>

            <Input
              img={mailIcon}
              classStyles={stylesInputEmail}
              placeholder="Email"
              label="Enter your email"
              errors={formik.touched.email ? formik.errors.email : undefined}
              touched={`${formik.touched.email}` || ''}
              {...formik.getFieldProps('email')}
            />
            <Input
              img={eyeIcon}
              classStyles={stylesInputPassword}
              placeholder="Password"
              label="Enter your password"
              type="password"
              errors={formik.touched.password ? formik.errors.password : undefined}
              touched={`${formik.touched.password}` || ''}
              {...formik.getFieldProps('password')}
            />

            <Button className="simple-button" type="submit">
              Log In
            </Button>
          </form>
        </div>
        <div className="image-box">
          <img className="men-pick" src={menPicture} alt="" height={522} />
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
