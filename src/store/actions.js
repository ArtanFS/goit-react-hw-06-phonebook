import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';

export const deleteContactAction = id => {
  return { type: DELETE_CONTACT, payload: id };
};

export const addContactAction = contact => {
  const newContact = {
    id: nanoid(),
    ...contact,
  };
  return { type: ADD_CONTACT, payload: newContact };
};

export const setFiltertAction = filter => {
  return { type: SET_FILTER, payload: filter };
};
