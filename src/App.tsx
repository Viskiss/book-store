import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from 'src/ui/containers/Header';
import Navigation from 'src/ui/containers/Navigation';
import Footer from 'src/ui/containers/Footer';
import { ThemeProvider } from 'styled-components';
import LottieLoading from './ui/components/LottieLoading';

import { useAppDispatch, useAppSelector } from './redux/store';
import { currentUserThunk } from './redux/userStore/thunks/authUser';
import Theme from './ui/components/ThemeSelect/ThemeSelect';
import GlobalStyles from './ui/containers/GlobalStyles';

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.userStore.theme);

  useEffect(() => {
    (async () => {
      await dispatch(currentUserThunk());
      setIsAuthorized(true);
    })();
  }, [dispatch, setIsAuthorized]);

  if (!isAuthorized) {
    return <LottieLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <Header />
      <Navigation />
      <Theme />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
