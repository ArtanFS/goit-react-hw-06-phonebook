import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.list}>
      {filterContacts().map(el => (
        <ContactListItem key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
