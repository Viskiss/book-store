import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import store from 'src/redux/store';

import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Provider store={store}>

      <App />

    </Provider>
  </BrowserRouter>,
);

reportWebVitals();
