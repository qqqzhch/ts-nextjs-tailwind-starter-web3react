import { createSlice } from '@reduxjs/toolkit';

type DataType = {
  icon: string;
};
// Define the initial state using that type
const initialState: DataType = {
  icon: 'moon',
};

// create a slice
export const iconslice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    iconMoon: (state) => {
      state.icon = 'moon';
    },
    iconSun: (state) => {
      state.icon = 'sun';
    },
  },
});
