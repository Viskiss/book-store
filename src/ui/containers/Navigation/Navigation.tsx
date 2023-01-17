import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { currentUserThunk } from '../../../redux/userStore/thunks/authUser';

import Loading from './components/Loading';

import MainLayoutStyles from '../MainLayout.styles';
import SelectBook from '../../pages/BookStore/SelectBookPage/SelectBookPage';

const BookStore = lazy(() => import('../../pages/BookStore'));
const SignUp = lazy(() => import('../../pages/Auth/SignUp'));
const Cart = lazy(() => import('../../pages/BookStore/Cart/Cart'));
const LogIn = lazy(() => import('../../pages/Auth/LogIn'));
const UserProfile = lazy(() => import('../../pages/UserProfile'));

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.userRoot.user);
  const isUnauth = useAppSelector((state) => state.userRoot.error);
  const isAuthenticated = useAppSelector(
    (state) => state.userRoot.isAuthenticated,
  );

  if (isUnauth) {
    toast.error(isUnauth);
  }

  useEffect(() => {
    (async () => {
      await dispatch(currentUserThunk()).catch((error: { message: string }) => {
        if (error.message) {
          toast.error(error.message);
        }
      });
    })();
  }, [isAuthenticated, dispatch]);

  return (
    <MainLayoutStyles>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/book/:bookId" element={<SelectBook />} />

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
