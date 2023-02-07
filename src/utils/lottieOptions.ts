import loading from 'src/ui/assets/lottieFiles/loading.json';
import develop from 'src/ui/assets/lottieFiles/process.json';

const defaultOptionsLoading = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const loadingStyles = {
  display: 'block',
  margin: '0 auto',
};

const defaultOptionsDevelop = {
  loop: true,
  autoplay: true,
  animationData: develop,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default {
  defaultOptionsLoading,
  loadingStyles,
  defaultOptionsDevelop,
};
