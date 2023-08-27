import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "../../redux/selectors";


import { Filter } from "../Filter/Filter";
import { Contact } from "../Contact/Contact";

import css  from "./ContactList.module.css";



export const ContactList = () => {

  // const contacts = useSelector(selectContacts)

  const contacts = useSelector(selectVisibleContacts)



  return (
    <>
      <Filter
      />
      <ul className= {css.contactList}>
        <Contact
          contacts={contacts}
        />
      </ul>
    </>
  );
};