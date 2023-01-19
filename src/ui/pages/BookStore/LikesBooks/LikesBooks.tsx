import Lottie from 'lottie-react';

import options from 'utils/lottieOptions';
import develop from 'ui/assets/lottieFiles/web-address-registration.json';

import StyledLikesBooks from './LikesBooks.styles';

const LikesBooks: React.FC = () => {
  return (
    <StyledLikesBooks>
      <Lottie style={options.loadingStyles} animationData={develop} />
    </StyledLikesBooks>
  );
};

export default LikesBooks;
