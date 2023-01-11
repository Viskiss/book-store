import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { currentUserThunk } from '../../../redux/userStore/thunks/authUser';

import Loading from './components/Loading';

import MainLayoutStyles from '../MainLayout.styles';

const BookStore = lazy(() => import('../../pages/BookStore'));
const SignUp = lazy(() => import('../../pages/Auth/SignUp'));
const Cart = lazy(() => import('../../pages/Cart'));
const LogIn = lazy(() => import('../../pages/Auth/LogIn'));
const UserProfile = lazy(() => import('../../pages/UserProfile'));

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.userRoot.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userRoot.isAuthenticated,
  );

  useEffect(() => {
    (async () => {
      await dispatch(currentUserThunk());
    })();
  }, [isAuthenticated, dispatch]);

  // if (!isAuthenticated) {
  //   return <Loading />;
  // }

  return (
    <MainLayoutStyles>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<BookStore />} />

          {!isAuth && (
            <>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </>
          )}

          {isAuth && (
            <>
              <Route path="/cart" element={<Cart />} />

              <Route path="/profile" element={<UserProfile />} />
            </>
          )}
        </Routes>
      </Suspense>
    </MainLayoutStyles>
  );
};

export default Navigation;
