import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth';
import commonSlice from './common';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    common: commonSlice,
  },
})