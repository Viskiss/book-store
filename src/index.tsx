import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'src/ui/containers/GlobalStyles';
import store from 'src/redux/store';

import App from './App';

import reportWebVitals from './reportWebVitals';
import { theme } from './ui/containers/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();
