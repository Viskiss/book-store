import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import develop from 'src/ui/assets/lottieFiles/process.json';

import StyledLikesBooks from './LikesBooks.styles';

const LikesBooks: React.FC = () => {
  return (
    <StyledLikesBooks>
      <Lottie style={options.loadingStyles} animationData={develop} />
    </StyledLikesBooks>
  );
};

export default LikesBooks;
