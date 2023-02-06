import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import constants from 'src/utils/constants';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import SelectBook from 'src/ui/pages/SelectBook';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { currentUserThunk } from 'src/redux/userStore/thunks/authUser';

import MainLayoutStyled from '../MainLayout.styles';

const SignIn = lazy(() => import('src/ui/pages/Auth/SignIn'));
const SignUp = lazy(() => import('src/ui/pages/Auth/SignUp'));
const BookStore = lazy(() => import('src/ui/pages/BookStore'));
const Cart = lazy(() => import('src/ui/pages/Cart'));
const LikedBooks = lazy(() => import('src/ui/pages/LikedBooks'));
const UserProfile = lazy(() => import('src/ui/pages/UserProfile'));

const Navigation: React.FC = () => {
  const { routesLink } = constants;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userStore.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(currentUserThunk());
    }
  }, [dispatch, isAuthenticated, user]);

  if (isAuthenticated && !user) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <MainLayoutStyled>
      <Suspense
        fallback={
          <Lottie style={options.loadingStyles} animationData={loader} />
        }
      >
        <Routes>
          <Route path={routesLink.home} element={<BookStore />} />
          <Route path={routesLink.bookId} element={<SelectBook />} />

          {!user && (
            <>
              <Route path={routesLink.signUp} element={<SignUp />} />
              <Route path={routesLink.signIn} element={<SignIn />} />
            </>
          )}

          {user && (
            <>
              <Route path={routesLink.cart} element={<Cart />} />
              <Route path={routesLink.liked} element={<LikedBooks />} />
              <Route path={routesLink.profile} element={<UserProfile />} />
            </>
          )}
        </Routes>
      </Suspense>
    </MainLayoutStyled>
  );
};

export default Navigation;
