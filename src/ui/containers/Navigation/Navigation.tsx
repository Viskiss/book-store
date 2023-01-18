import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
// import { toast } from 'react-toastify';

import Loading from './components/Loading';
import SelectBook from '../../pages/BookStore/SelectBookPage/SelectBookPage';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { currentUserThunk } from '../../../redux/userStore/thunks/authUser';

import constants from '../../../utils/constants';

import MainLayoutStyled from '../MainLayout.styles';
import tokenHelper from '../../../utils/tokenHelper';

const BookStore = lazy(() => import('../../pages/BookStore'));
const SignUp = lazy(() => import('../../pages/Auth/SignUp'));
const Cart = lazy(() => import('../../pages/BookStore/Cart/Cart'));
const LogIn = lazy(() => import('../../pages/Auth/LogIn'));
const UserProfile = lazy(() => import('../../pages/UserProfile'));

const Navigation: React.FC = () => {
  const { routesLink } = constants;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userStore.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  // eslint-disable-next-line no-console
  console.log(tokenHelper.token.get());

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-constant-condition
      // if (!) {
      //   return;
      // }
      await dispatch(currentUserThunk());
    })();
  }, [isAuthenticated, dispatch]);

  return (
    <MainLayoutStyled>
      <Suspense fallback={<Loading />}>
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

              <Route path={routesLink.profile} element={<UserProfile />} />
            </>
          )}
        </Routes>
      </Suspense>
    </MainLayoutStyled>
  );
};

export default Navigation;
