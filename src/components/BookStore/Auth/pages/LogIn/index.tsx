import { useFormik } from 'formik';
import Styles from './LogIn.styles';
import mail from '../../images/Mail.svg';
import eye from '../../images/Hide.svg';
import men from '../../images/men.svg';
import men2 from '../../images/men2.svg';
import Input from '../../../../auxiliaryComponents/Input/Input';
import Button from '../../../../auxiliaryComponents/Button/Button.styles';
import { useAppDispatch } from '../../../../../redux/store';
import { logInUserThunk } from '../../../../../redux/bookStore/bookStoreThunks';
import { logInSchema } from '../../../../../validation/schemas';

const LogIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await dispatch(logInUserThunk({ email, password }));
    },
  });

  return (
    <Styles>
      <div className="login_container">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h1>Log In</h1>
          <Input
            img={mail}
            placeholder="Email"
            type="email"
            label="Enter your email"
            errors={formik.errors.email}
            touched={formik.touched.email}
            {...formik.getFieldProps('email')}
          />
          <Input
            img={eye}
            placeholder="Password"
            label="Enter your password"
            type="password"
            errors={formik.errors.password}
            touched={formik.touched.password}
            {...formik.getFieldProps('password')}
          />
          <Button className="simple-button" type="submit">
            Log In
          </Button>
        </form>
        <picture>
          <source media="(max-width:834px)" srcSet={men2} />
          <img className="men-pick" src={men} alt="" />
        </picture>
      </div>
    </Styles>
  );
};

export default LogIn;
