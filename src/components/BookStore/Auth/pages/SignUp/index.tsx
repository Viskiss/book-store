import { useFormik } from 'formik';
import Styles from './SignUp.styles';
import mail from '../../images/Mail.svg';
import eye from '../../images/Hide.svg';
import men from '../../images/men.svg';
import men2 from '../../images/men2.svg';
import Input from '../../../../auxiliaryComponents/Input/Input';
import Button from '../../../../auxiliaryComponents/Button/Button.styles';
import { useAppDispatch } from '../../../../../redux/store';
import { createUserThunk } from '../../../../../redux/bookStore/bookStoreThunks';
import { singUpSchema } from '../../../../../validation/schemas';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: singUpSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await dispatch(createUserThunk({ email, password }));
    },
  });

  return (
    <Styles>
      <div className="signup_container">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h1>Sign Up</h1>
          <Input
            img={mail}
            placeholder="Email"
            label="Enter your email"
            type="email"
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
          <Input
            img={eye}
            placeholder="Password replay"
            label="Repeat your password"
            type="password"
            errors={formik.errors.repeatPassword}
            touched={formik.touched.repeatPassword}
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
