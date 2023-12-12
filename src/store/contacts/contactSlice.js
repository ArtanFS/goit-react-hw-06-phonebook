import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContactAction: {
      prepare: contact => {
        return { payload: { id: nanoid(), ...contact } };
      },
      reducer: (state, action) => {
        return { ...state, items: [...state.items, action.payload] };
      },
    },
    deleteContactAction: (state, action) => {
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload),
      };
    },
  },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
