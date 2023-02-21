import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from 'src/ui/containers/Header';
import Navigation from 'src/ui/containers/Navigation';
import Footer from 'src/ui/containers/Footer';
import LottieLoading from './ui/components/LottieLoading';

import { useAppDispatch } from './redux/store';
import { currentUserThunk } from './redux/userStore/thunks/authUser';
import Theme from './ui/components/ThemeSelect/ThemeSelect';

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useAppDispatch();

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
    <>
      <ToastContainer />
      <Header />
      <Navigation />
      <Theme />
      <Footer />
    </>
  );
};

export default App;
