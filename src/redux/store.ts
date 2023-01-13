import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import userReduser from './userStore/userSlice';
import bookReduser from '../ui/pages/BookStore/redux/bookStoreSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    userRoot: userReduser,
    bookStore: bookReduser,
  },
});

type AppDispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
