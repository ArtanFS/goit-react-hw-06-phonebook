import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <div className={css.contact_form_item}>
        <label htmlFor="inputName">Name</label>
        <input
          name="name"
          type="text"
          id="inputName"
          value={name}
          onChange={handleChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </div>
      <div className={css.contact_form_item}>
        <label htmlFor="inputNumber">Number</label>
        <input
          name="number"
          type="tel"
          id="inputNumber"
          value={number}
          onChange={handleChange}
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
