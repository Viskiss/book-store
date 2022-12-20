// import { useState } from 'react';
// import LogIn from './Auth/pages/LogIn';
import SignUp from './Auth/pages/SignUp';
import Styles from './BookStore.styles';
// import Invit from './Invit';

const BookStore: React.FC = () => {
  // if (!store.isAuth) {
  //   return (
  //     <BookStoreStyles>
  //   auth
  //     </BookStoreStyles>
  //   );
  // }

  return (
  <Styles>
    {/* <LogIn /> */}
    <SignUp />
  </Styles>
  );
};

export default BookStore;
