import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
// import { createLogger } from 'redux-logger';

import userReduser from './userStore/userSlice';
import bookReduser from '../ui/pages/BookStore/redux/bookStoreSlice';
import { isDev } from '../utils/config';

// const logger = createLogger({
//   // ...options https://github.com/LogRocket/redux-logger
// });

const store = configureStore({
  devTools: isDev,
  // applyMiddleware(logger)
  reducer: {
    userStore: userReduser,
    bookStore: bookReduser,
  },
});

type AppDispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
