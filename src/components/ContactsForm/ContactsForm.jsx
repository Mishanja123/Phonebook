import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations'

import { nanoid } from 'nanoid';

import css  from "./ContactsForm.module.css";


export const ContactsForm = () => {

  const dispatch = useDispatch() 



  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target
    const createdAt = new Date()
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const newContact = {
      createdAt: createdAt,
      name: name,
      phone: number,
      id: nanoid(),
    }
    dispatch(addContact(newContact));
    form.reset()
  }



    return (
      <form className= {css.form} action="add contact" onSubmit={onFormSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input 
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
        </label>
        <button type="submit" className={css.btn} >Add contact</button>
    </form>
  )
}
