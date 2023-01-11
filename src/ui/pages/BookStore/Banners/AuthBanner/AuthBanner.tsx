import TextBlock from '../../../../components/TextBlock/TextBlock';

import StyledAuthBanner from './AuthBanner.styles';

import fairy from './images/fairy.svg';
import fairy2 from './images/fairy2.svg';
import fairy3 from './images/fairy3.svg';
import castle from './images/castle.svg';

const AuthBanner: React.FC = () => {
  return (
    <StyledAuthBanner>
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
    </StyledAuthBanner>
  );
};

export default AuthBanner;
