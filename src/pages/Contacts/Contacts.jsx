import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from '@mui/material/Container';


import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";


import { ContactsForm } from '../../components/ContactsForm/ContactsForm';
import { ContactList } from '../../components/ContactList/ContactList';

export default function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container 
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        justifyContent: 'center',
        gap: 1,
        paddingBottom: "50px",
      }}
    >
      <ContactsForm/>
      <ContactList
        isLoading={isLoading}
        error={error}
      />
    </Container>
  );
};


