import { ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Navigation from './ui/containers/Navigation';
import Footer from './ui/containers/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
    <ToastContainer />
    <Header />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
