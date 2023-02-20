import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

import { navigationRoutes } from 'src/utils/constants';
import { useAppSelector } from 'src/redux/store';

import LottieLoading from 'src/ui/components/LottieLoading';

import NavigationStyled from './Navigation.styles';

const SignIn = lazy(() => import('src/ui/pages/authorization/SignIn/SignIn'));
const SignUp = lazy(() => import('src/ui/pages/authorization/SignUp/SignUp'));

const BookStoreMain = lazy(() => import('src/ui/pages/BookStoreMain'));
const Cart = lazy(() => import('src/ui/pages/Cart'));
const FavoriteBooks = lazy(() => import('src/ui/pages/FavoritesBooks'));
const CurrentBook = lazy(() => import('src/ui/pages/CurrentBook'));

const UserProfile = lazy(() => import('src/ui/pages/UserProfile'));

const Navigation: React.FC = () => {
  const user = useAppSelector((state) => state.userStore.user);

  return (
    <NavigationStyled>
      <Suspense fallback={<LottieLoading />}>
        <Routes>
          <Route path={navigationRoutes.home} element={<BookStoreMain />} />
          <Route
            path={navigationRoutes.currentBook}
            element={<CurrentBook />}
          />

          {user ? (
            <>
              <Route path={navigationRoutes.cart} element={<Cart />} />
              <Route
                path={navigationRoutes.favorite}
                element={<FavoriteBooks />}
              />
              <Route
                path={navigationRoutes.profile}
                element={<UserProfile />}
              />
            </>
          ) : (
            <>
              <Route path={navigationRoutes.signUp} element={<SignUp />} />
              <Route path={navigationRoutes.signIn} element={<SignIn />} />
            </>
          )}
        </Routes>
      </Suspense>
    </NavigationStyled>
  );
};

export default Navigation;
