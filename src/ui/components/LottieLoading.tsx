import Lottie from 'lottie-react';

import loader from 'src/ui/assets/lottieFiles/loader.json';

const LottieLoading: React.FC = () => {
  return (
    <Lottie
      animationData={loader}
    />
  );
};

export default LottieLoading;
