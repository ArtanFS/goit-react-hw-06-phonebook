import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    item: '',
  },
  reducers: {
    setFilterAction: (state, action) => {
      return {
        ...state,
        item: action.payload,
      };
    },
  },
});

export const { setFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
