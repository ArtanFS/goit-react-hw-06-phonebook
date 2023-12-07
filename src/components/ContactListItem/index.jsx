import css from './ContactListItem.module.css';

const ContactListItem = ({ contacts, deleteContact }) => {
  return (
    <li className={css.list_item}>
      <div className={css.list_item_wrapper}>
        <p>
          {contacts.name}: {contacts.number}
        </p>
        <button onClick={() => deleteContact(contacts.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ContactListItem;
