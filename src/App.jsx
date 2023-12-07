import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import css from './Container.module.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isDuplicate = contacts.some(
      ({ name }) => newContact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactObj = {
      id: nanoid(),
      ...newContact,
    };
    setContacts(prev => [...prev, contactObj]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Provider store={store}>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilter} />
        <ContactList
          contacts={filterContacts()}
          deleteContact={deleteContact}
        />
      </div>
    </Provider>
  );
};

export default App;
