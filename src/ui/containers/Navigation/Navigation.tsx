import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import constants from 'src/utils/constants';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { currentUserThunk } from 'src/redux/userStore/thunks/authUser';

import NavigationStyled from './Navigation.styles';

const SignIn = lazy(() => import('src/ui/pages/Authorization/SignIn/SignIn'));
const SignUp = lazy(() => import('src/ui/pages/Authorization/SignUp/SignUp'));

const BookStore = lazy(() => import('src/ui/pages/BookStoreMain'));
const Cart = lazy(() => import('src/ui/pages/Cart'));
const FavoriteBooks = lazy(() => import('src/ui/pages/FavoritesBooks'));
const CurrentBook = lazy(() => import('src/ui/pages/CurrentBook'));

const UserProfile = lazy(() => import('src/ui/pages/UserProfile'));

const Navigation: React.FC = () => {
  const { routesLink } = constants;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userStore.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <NavigationStyled>
      <Suspense
        fallback={
          <Lottie style={options.loadingStyles} animationData={loader} />
        }
      >
        <Routes>
          <Route path={routesLink.home} element={<BookStore />} />
          <Route path={routesLink.bookId} element={<CurrentBook />} />

          {!user && (
            <>
              <Route path={routesLink.signUp} element={<SignUp />} />
              <Route path={routesLink.signIn} element={<SignIn />} />
            </>
          )}

          {user && (
            <>
              <Route path={routesLink.cart} element={<Cart />} />
              <Route path={routesLink.favorite} element={<FavoriteBooks />} />
              <Route path={routesLink.profile} element={<UserProfile />} />
            </>
          )}
        </Routes>
      </Suspense>
    </NavigationStyled>
  );
};

export default Navigation;
