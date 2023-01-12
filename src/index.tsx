import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import GlobalStyles from './ui/containers/GlobalStyles';

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
