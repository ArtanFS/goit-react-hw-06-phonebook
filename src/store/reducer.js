import { initialState } from './initialState';
import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };

    default:
      return state;
  }
};
