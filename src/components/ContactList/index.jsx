import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { selectFilter } from 'store/filter/filterSelectors';
import { selectContacts } from 'store/contacts/contactSelectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
