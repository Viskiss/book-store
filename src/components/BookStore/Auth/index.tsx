import Styles from './Auth.styles';
import fairy from '../../images/auth/fairy.svg';
import fairy2 from '../../images/auth/fairy2.svg';
import fairy3 from '../../images/auth/fairy3.svg';
import castle from '../../images/auth/castle.svg';
import TextBlock from '../../auxiliaryComponents/TextBlock/TextBlock';

const Auth: React.FC = () => {
  return (
    <Styles>
      <div className="auth_container">
        <TextBlock
          h1="Authorize now"
          p="Authorize now and discover the fabulous world of books"
          title="Log In/ Sing Up"
          img={fairy}
          img2={fairy2}
          img3={fairy3}
          link="/logIn"
          className="auth-button"
        />
        <div className="castle-block">
          <img className="img_castle" src={castle} alt="" />
        </div>
      </div>
    </Styles>
  );
};

export default Auth;
