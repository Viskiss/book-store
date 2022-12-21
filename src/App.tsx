import { Route, Routes } from 'react-router';
import BookStore from './components/BookStore/BookStore';
import AppStyles from './App.styles';
import Main from './components/BookStore/Main/Main';
import SignUp from './components/BookStore/Auth/pages/SignUp';

const App = () => {
  return (
    <AppStyles>
      <Main>
        <div className="container">
          <Routes>
            <Route path="/" element={<BookStore />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </Main>
    </AppStyles>
  );
};

export default App;
