import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from './redux/store';
import { currentUserThunk } from './redux/userStore/userThunks';

import Main from './components/BookStore/MainLayout/MainLayout';
import ProtectedRoute from './Protected';
import Loading from './components/components/Loading';

const BookStore = lazy(() => import('./components/BookStore'));
const SignUp = lazy(() => import('./components/BookStore/Auth/SignUp'));
const Cart = lazy(() => import('./components/BookStore/Cart'));
const LogIn = lazy(() => import('./components/BookStore/Auth/LogIn/Login'));
const UserProfile = lazy(() => import('./components/BookStore/UserProfile/UserProfile'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.userRoot.user?.email);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(currentUserThunk());
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) {
    return (<Loading />);
  }

  return (
    <>
      <ToastContainer />
      <Main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<BookStore />} />
            {!isAuth ? (
              <>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/log-in" element={<LogIn />} />
              </>
            ) : (
              <Route path="/" element={<BookStore />} />
            )}

            <Route
              path="/cart"
              element={
                (<ProtectedRoute>
                  <Cart />
                 </ProtectedRoute>)
              }
            />
            <Route
              path="/profile"
              element={
                (<ProtectedRoute>
                  <UserProfile />
                 </ProtectedRoute>)
              }
            />
          </Routes>
        </Suspense>
      </Main>
    </>
  );
};

export default App;
