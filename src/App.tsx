import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from './redux/store';
import { currentUserThunk } from './redux/userStore/userThunks';

import Main from './components/BookStore/MainLayout';

import AppStyles from './App.styles';

const BookStore = lazy(() => import('./components/BookStore'));
const SignUp = lazy(() => import('./components/BookStore/Auth/SignUp'));
const Cart = lazy(() => import('./components/BookStore/Cart'));
const LogIn = lazy(() => import('./components/BookStore/Auth/LogIn'));
const UserProfile = lazy(() => import('./components/BookStore/UserProfile'));

const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.userRoot.user.email);

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch, isAuth]);

  return (
    <AppStyles>
      <ToastContainer />
      <Main>
      <Suspense fallback={null}>
        <div className="container">
          <Routes>
            <Route path="/" element={<BookStore />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Suspense>
      </Main>
    </AppStyles>
  );
};

export default App;
