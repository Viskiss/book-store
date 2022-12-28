import fairy from './images/fairy.svg';
import fairy2 from './images/fairy2.svg';
import fairy3 from './images/fairy3.svg';
import castle from './images/castle.svg';

import TextBlock from '../../auxiliaryComponents/TextBlock';

import Styles from './Auth.styles';

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
