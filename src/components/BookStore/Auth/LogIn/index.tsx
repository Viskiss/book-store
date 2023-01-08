import { useFormik } from 'formik';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from '../../../outherComponents/Input';
import Button from '../../../outherComponents/Button/Button.styles';

import { useAppDispatch } from '../../../../redux/store';
import { logInUserThunk } from '../../../../redux/userStore/userThunks';

import mailIcon from '../images/Mail.svg';
import eyeIcon from '../images/Hide.svg';
import menPicture from '../images/men.svg';

import Styles from './LogIn.styles';

const LogIn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email must be a valid email')
        .min(10, 'Min 10 length, Ex: 123@mail.ru')
        .required(),
      password: Yup.string()
        .lowercase()
        .min(5, 'The password is too short(min 5)')
        .trim()
        .required('Password required'),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      await dispatch(logInUserThunk({ email, password }))
        .unwrap()
        .then(
          () => {
            navigate(`${!location.state}` ? '/log-in' : `${location.state.from.pathname}`);
          },
        )
        .catch(
          (error: {
            error: Array<{ key: string; path: string; message: string }>;
            message: string;
          }) => {
            if (error?.error && error.message === 'ValidationError') {
              const errors = error.error.reduce((acc: {[key: string]: string}, curr) => {
                acc[curr.key] = curr.message;
                return acc;
              }, {});

              formik.setErrors(errors);
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
    <Styles>
      <div className="login_container">
        <div>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">Log In</h1>

            <Input
              img={mailIcon}
              classStyles={stylesInputEmail}
              placeholder="Email"
              type="email"
              label="Enter your email"
              errors={formik.errors.email || ''}
              touched={`${formik.touched.email}` || undefined}
              {...formik.getFieldProps('email')}
            />
            <Input
              img={eyeIcon}
              classStyles={stylesInputPassword}
              placeholder="Password"
              label="Enter your password"
              type="password"
              errors={formik.errors.password || ''}
              touched={`${formik.touched.password}` || undefined}
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
    </Styles>
  );
};

export default LogIn;
