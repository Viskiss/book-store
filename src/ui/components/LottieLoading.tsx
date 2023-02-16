import Lottie from 'lottie-react';

import loader from 'src/ui/assets/lottieFiles/loading.json';

const loadingStyles = {
  display: 'block',
  margin: '0 auto',
};
const LottieLoading: React.FC = () => {
  return <Lottie style={loadingStyles} animationData={loader} />;
};

export default LottieLoading;
