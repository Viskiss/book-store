import Styles from './Auth.styles';
import fairy from '../../images/auth/fairy.svg';
import castle from '../../images/auth/castle.svg';
import TextBlock from '../TextBlock';

const Auth: React.FC = () => {
  return (
    <Styles>
      <div className="auth_container">
        <TextBlock
          h1="Authorize now"
          p="Authorize now and discover the fabulous world of books"
          title="Log In/ Sing Up"
          img={fairy}
          link="/signup"
        />
        <div className="castle-block">
          <img className="img_castle" src={castle} alt="" />
        </div>
      </div>
    </Styles>
  );
};

export default Auth;
