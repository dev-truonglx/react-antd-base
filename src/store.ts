import { configureStore } from '@reduxjs/toolkit';
import authenticateSlice from './features/auth/authenticate';

export const store = configureStore({
  reducer: {
    authenticate: authenticateSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
