import persistReducer from 'redux-persist/es/persistReducer';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
