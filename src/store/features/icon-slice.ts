import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import txinfoType from '@/types/txinfo';
type DataType = {
  data: txinfoType | null;
};
// Define the initial state using that type
const initialState: DataType = {
  data: null,
};

// create a slice
export const iconslice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    iconMoon: (state, action: PayloadAction<txinfoType>) => {
      state.data = action.payload;
    },
    iconSun: (state, action: PayloadAction<txinfoType>) => {
      state.data = action.payload;
    },
  },
});

export const { iconMoon, iconSun } = iconslice.actions;
export default iconslice.reducer;
