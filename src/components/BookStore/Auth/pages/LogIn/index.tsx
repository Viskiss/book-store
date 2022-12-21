// import { useState } from 'react';
import Styles from './LogIn.styles';
// import mail from '../../../../images/auth/Mail.svg';
// import eye from '../../../../images/auth/Hide.svg';
// import men from '../../../../images/auth/men.svg';
// import Input from '../../../../Input/Input';
// import Button from '../../../../Button/Button';

const LogIn: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const formik = useFormik({
  //   initialValues: {
  //     email,
  //     password,
  //   },
  //   onSubmit: (values) => {
  //     const { email, password } = values;
  //     dispatch(
  //       createUserThunk({ email, password }),
  //     );
  //   },
  // });
  return (
    <Styles>
      {/* <div className="login_container">
        <form className="login-form">
          <h1>Log In</h1>
          <Input name="email" value={email} img={mail} placeholder="Email" />
          <label>Enter your email</label>
          <Input value={password} img={eye} placeholder="Password" />
          <label>Enter your password</label>
          <Button>Log In</Button>
        </form>
        <img src={men} alt="" />
      </div> */}
    </Styles>
  );
};

export default LogIn;
