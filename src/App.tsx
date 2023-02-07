import { ToastContainer } from 'react-toastify';

import Header from 'src/ui/containers/Header';
import Navigation from 'src/ui/containers/Navigation';
import Footer from 'src/ui/containers/Footer';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <div className="container">
      <Header />
      </div>
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
