import { useFormik } from 'formik';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import Input from '../../../auxiliaryComponents/Input';
import Button from '../../../auxiliaryComponents/Button/Button.styles';

import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { logInUserThunk } from '../../../../redux/userStore/userThunks';

import mail from '../images/Mail.svg';
import eye from '../images/Hide.svg';
import men from '../images/men.svg';
import men2 from '../images/men2.svg';
import { logInSchema } from '../../../../validation/schemas';

import Styles from './LogIn.styles';

const LogIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const success = useAppSelector((store) => store.userRoot.success);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await dispatch(logInUserThunk({ email, password }))
        .unwrap()
        .catch((error) => toast.error(error.message));
    },
  });

  const stylesInputEmail = classNames({
    'form-input': true,
    'error-input': formik.errors.email?.length,
    'success-input': success,
  });

  const stylesInputPassword = classNames({
    'form-input': true,
    'error-input': formik.errors.password?.length,
    'success-input': success,
  });

  return (
    <Styles>
      <div className="login_container">
        <div>
           <form onSubmit={formik.handleSubmit} className="login-form">
          <h1 className="title">Log In</h1>

          <Input
            img={mail}
            classStyles={stylesInputEmail}
            placeholder="Email"
            type="email"
            label="Enter your email"
            errors={formik.errors.email}
            touched={`${formik.touched.email}` || ''}
            {...formik.getFieldProps('email')}
          />
          <Input
            img={eye}
            classStyles={stylesInputPassword}
            placeholder="Password"
            label="Enter your password"
            type="password"
            errors={formik.errors.password}
            touched={`${formik.touched.password}` || ''}
            {...formik.getFieldProps('password')}
          />

          <Button className="simple-button" type="submit">
            Log In
          </Button>
           </form>
        </div>
        <div className="image-box">
          <picture>
          <source media="(max-width:834px)" srcSet={men2} />
          <img className="men-pick" src={men} alt="" height={522} />
          </picture>
        </div>
      </div>
    </Styles>
  );
};

export default LogIn;
