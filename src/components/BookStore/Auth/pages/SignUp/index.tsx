import { useFormik } from 'formik';
import { useState } from 'react';
import Styles from './SignUp.styles';
import mail from '../../../../images/auth/Mail.svg';
import eye from '../../../../images/auth/Hide.svg';
import men from '../../../../images/auth/men.svg';
import Input from '../../../../Input/Input';
import Button from '../../../../Button/Button.styles';
import { useAppDispatch } from '../../../../../redux/store';
import { createUserThunk } from '../../../../../redux/bookStore/bookStoreThunks';
import { singUpSchema } from '../../../../../validation/schemasYup/schemasAuth';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState('');
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email,
      password,
      repeatPassword,
    },
    validationSchema: singUpSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      // eslint-disable-next-line no-console
      console.log(values);
      const req = await dispatch(createUserThunk({ email, password }));
      // eslint-disable-next-line no-console
      console.log(req);
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
            errors={formik.errors.email}
            touched={formik.touched.email}
            {...formik.getFieldProps('email')}
          />
          <Input
            img={eye}
            placeholder="Password"
            label="Enter your password"
            errors={formik.errors.password}
            touched={formik.touched.password}
            {...formik.getFieldProps('password')}
          />
          <Input
            img={eye}
            placeholder="Password replay"
            label="Repeat your password"
            errors={formik.errors.repeatPassword}
            touched={formik.touched.repeatPassword}
            {...formik.getFieldProps('repeatPassword')}
          />
          <Button type="submit">Sing Up</Button>
        </form>
        <img src={men} alt="" />
      </div>
    </Styles>
  );
};

export default SignUp;
