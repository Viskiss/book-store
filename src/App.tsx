import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import AppStyles from './App.styles';
import Main from './components/BookStore/MainLayout/MainLayout';
import LogIn from './components/BookStore/Auth/pages/LogIn';
import { useAppDispatch } from './redux/store';
import { currentUserThunk } from './redux/bookStore/bookStoreThunks';
import UserProfile from './components/BookStore/UserProfile';

const BookStore = lazy(() => import('./components/BookStore/BookStore'));
const SignUp = lazy(() => import('./components/BookStore/Auth/pages/SignUp'));
const Cart = lazy(() => import('./components/BookStore/Cart'));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <AppStyles>
      <Main>
      <Suspense fallback={null}>
        <div className="container">
          <Routes>
            <Route path="/" element={<BookStore />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
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
