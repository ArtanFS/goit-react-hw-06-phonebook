import { deleteContactAction } from 'store/contacts/contactSlice';
import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item}>
      <div className={css.list_item_wrapper}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button onClick={() => dispatch(deleteContactAction(contact.id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
