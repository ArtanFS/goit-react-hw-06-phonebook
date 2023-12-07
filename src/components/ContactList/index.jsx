import ContactListItem from '../ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(el => (
        <ContactListItem
          key={el.id}
          contacts={el}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
