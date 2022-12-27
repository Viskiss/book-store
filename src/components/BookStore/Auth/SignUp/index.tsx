import { useFormik } from 'formik';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import Styles from './SignUp.styles';
import mail from '../images/Mail.svg';
import eye from '../images/Hide.svg';
import men from '../images/men.svg';
import men2 from '../images/men2.svg';
import Input from '../../../auxiliaryComponents/Input';
import Button from '../../../auxiliaryComponents/Button/Button.styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { createUserThunk } from '../../../../redux/userStore/userThunks';
import { singUpSchema } from '../../../../validation/schemas';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const success = useAppSelector((store) => store.bookData.success);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: singUpSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      await dispatch(createUserThunk({ email, password }))
        .unwrap()
        .catch((error) => toast.error(error.message));
      resetForm();
    },
  });

  const stylesInputEmail = classNames({
    'search-input': true,
    'error-input': formik.errors.email?.length,
    'success-input': success,
  });

  const stylesInputPassword = classNames({
    'search-input': true,
    'error-input': formik.errors.password?.length,
    'success-input': success,
  });

  return (
    <Styles>
      <div className="signup_container">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h1>Sign Up</h1>
          <Input
            img={mail}
            classStyles={stylesInputEmail}
            placeholder="Email"
            label="Enter your email"
            type="email"
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
          <Input
            img={eye}
            classStyles={stylesInputPassword}
            placeholder="Password replay"
            label="Repeat your password"
            type="password"
            errors={formik.errors.repeatPassword}
            touched={`${formik.touched.repeatPassword}` || ''}
            {...formik.getFieldProps('repeatPassword')}
          />
          <Button className="simple-button" type="submit">Sing Up</Button>
        </form>
        <picture>
          <source media="(max-width:834px)" srcSet={men2} />
        <img className="men-pick" src={men} alt="" />
        </picture>
      </div>
    </Styles>
  );
};

export default SignUp;
