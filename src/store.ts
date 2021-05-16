import loadingSlice from './features/loading/loading';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authenticateSlice from './features/auth/authenticate';
import collapsedSlice from './features/collapsedMenu/collapsedMenu';
export const store = configureStore({
  reducer: {
    collapsed: collapsedSlice,
    user: authenticateSlice,
    loading: loadingSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
