import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from 'src/ui/containers/Header';
import Navigation from 'src/ui/containers/Navigation';
import Footer from 'src/ui/containers/Footer';
import LottieLoading from './ui/components/LottieLoading';

import { useAppDispatch, useAppSelector } from './redux/store';
import { currentUserThunk } from './redux/userStore/thunks/authUser';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  if (!isAuthenticated) {
    return <LottieLoading />;
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
