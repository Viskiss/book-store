import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import Lottie from 'lottie-react';

import options from 'utils/lottieOptions';
import constants from 'utils/constants';
import loader from 'ui/assets/lottieFiles/9329-loading.json';

import SelectBook from 'ui/pages/BookStore/SelectBookPage';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { currentUserThunk } from 'redux/userStore/thunks/authUser';

import MainLayoutStyled from '../MainLayout.styles';

const BookStore = lazy(() => import('../../pages/BookStore'));
const SignUp = lazy(() => import('../../pages/Auth/SignUp'));
const Cart = lazy(() => import('../../pages/BookStore/Cart'));
const LokesBooks = lazy(() => import('../../pages/BookStore/LikesBooks'));
const LogIn = lazy(() => import('../../pages/Auth/LogIn'));
const UserProfile = lazy(() => import('../../pages/UserProfile'));

const Navigation: React.FC = () => {
  const { routesLink } = constants;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userStore.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) {
        return;
      }
      await dispatch(currentUserThunk());
    })();
  }, [isAuthenticated, dispatch]);

  if (isAuthenticated && !user) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <MainLayoutStyled>
      <Suspense fallback={
      <Lottie style={options.loadingStyles} animationData={loader} />}
>
        <Routes>
          <Route path={routesLink.home} element={<BookStore />} />
          <Route path={routesLink.bookId} element={<SelectBook />} />

          {!user && (
            <>
              <Route path={routesLink.signUp} element={<SignUp />} />
              <Route path={routesLink.login} element={<LogIn />} />
            </>
          )}

          {user && (
            <>
              <Route path={routesLink.cart} element={<Cart />} />
              <Route path={routesLink.likes} element={<LokesBooks />} />
              <Route path={routesLink.profile} element={<UserProfile />} />
            </>
          )}
        </Routes>
      </Suspense>
    </MainLayoutStyled>
  );
};

export default Navigation;
