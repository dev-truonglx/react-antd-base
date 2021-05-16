import { createSlice } from '@reduxjs/toolkit';

interface CollapsedState {
  isCollapsed: boolean;
}

const initialState: CollapsedState = {
  isCollapsed: false,
};

export const collapsedSlice = createSlice({
  name: 'collapsed',
  initialState,
  reducers: {
    setIsCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

const { actions, reducer } = collapsedSlice;
export const { setIsCollapsed } = actions;
export default reducer;
