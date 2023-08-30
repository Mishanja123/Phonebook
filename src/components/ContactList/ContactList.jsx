import React from "react";
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "../../redux/contacts/selectors";

import { Filter } from "../Filter/Filter";
import { Contact } from "../Contact/Contact";

import Container from '@mui/material/Container';



export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts)

    return (
        <Container 
          component="main"
          maxWidth="xs"
          sx={{
            padding: 2,
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            maxHeight: '500px',
            overflow: 'auto',
          }}
        >
          <Filter/>
              <Contact contacts={contacts}/>
        </Container>
    );
};
