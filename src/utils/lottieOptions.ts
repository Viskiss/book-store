import loading from '../ui/assets/lottieFiles/9329-loading.json';
import develop from '../ui/assets/lottieFiles/web-address-registration.json';

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
  defaultOptionsLoading, loadingStyles, defaultOptionsDevelop,
};
