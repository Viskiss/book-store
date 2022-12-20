import Styles from './SignUp.styles';
import mail from '../../../../images/auth/Mail.svg';
import eye from '../../../../images/auth/Hide.svg';
import men from '../../../../images/auth/men.svg';
import Input from '../../../../Input/Input';
import Button from '../../../../Button/Button';

const SignUp: React.FC = () => {
  return (
    <Styles>
      <div className="signup_container">
        <form className="login-form">
          <h1>Sign Up</h1>
          <Input img={mail} placeholder="Email" />
          <label>Enter your email</label>
          <Input img={eye} placeholder="Password" />
          <label>Enter your password</label>
          <Input img={eye} placeholder="Password replay" />
          <label>Repeat your password without errors</label>
          <Button>Sing Up</Button>
        </form>
        <img src={men} alt="" />
      </div>
    </Styles>
  );
};

export default SignUp;
