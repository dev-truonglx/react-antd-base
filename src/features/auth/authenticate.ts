import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticateState {
  token: string;
  user: Object;
}

const initialState: AuthenticateState = {
  token: '',
  user: {},
};

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = '';
    },
    setUser: (state, action: PayloadAction<Object>) => {
      state.user = action.payload;
    },
  },
});

const { actions, reducer } = authenticateSlice;
export const { setToken, removeToken, setUser } = actions;
export default reducer;
