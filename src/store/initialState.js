export const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};
