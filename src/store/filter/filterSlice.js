import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterAction: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { setFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
