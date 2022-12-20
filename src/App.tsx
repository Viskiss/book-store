import BookStore from './components/BookStore/BookStore';
import AppStyles from './App.styles';
import Main from './components/BookStore/Main/Main';

const App = () => {
  return (
    <AppStyles>
    <Main>
      <div className="container">
        <BookStore />
      </div>
    </Main>
    </AppStyles>
  );
};

export default App;
