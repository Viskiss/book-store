import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './ui/containers/GlobalStyles';

import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();
