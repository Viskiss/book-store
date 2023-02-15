import TextBlock from 'src/ui/components/TextBlock';

import fairy from 'src/ui/assets/images/fairy.svg';
import fairy2 from 'src/ui/assets/images/fairy2.svg';
import fairy3 from 'src/ui/assets/images/fairy3.svg';
import castle from 'src/ui/assets/images/castle.svg';

import StyledAuthBanner from './AuthBanner.styles';

const AuthBanner: React.FC = () => {
  return (
    <StyledAuthBanner>
      <TextBlock
        h1="Authorize now"
        p="Authorize now and discover the fabulous world of books"
        img={fairy}
        img2={fairy2}
        img3={fairy3}
        link=""
        className="auth"
      />
      <div className="castle-block">
        <img className="castle-block__img-castle" src={castle} alt="" />
      </div>
    </StyledAuthBanner>
  );
};

export default AuthBanner;
