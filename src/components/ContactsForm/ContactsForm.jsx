import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'
import Notiflix from "notiflix";



import { selectIsAddLoading, selectContacts } from "../../redux/contacts/selectors";

import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();

export const ContactsForm = () => {
  const dispatch = useDispatch() 
  const contacts = useSelector(selectContacts)
  const isAddLoading = useSelector(selectIsAddLoading);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const newContact = {
      name: name,
      number: number,
    }
    const isPresentOnList = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberOnList = contacts.find(
      (contact) => contact.number === number
    );
    if (name === "" && number === "") {
      Notiflix.Notify.failure(`Enter contact information`);
    } else if(name === "") {
      Notiflix.Notify.failure(`Enter a valid contact name as in the example`);
    } else if(number === "") {
      Notiflix.Notify.failure(`Enter a valid phone number as in the example`);
    } else if (isPresentOnList && isNumberOnList) {
      Notiflix.Notify.failure(`${name} is already in your contacts.`);
    } else {
      Notiflix.Notify.success(`${name} ADDED to your contact list.`);
      dispatch(addContact(newContact));
      form.reset()
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add contact
          </Typography>
          <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Enter name"
              name="name"
              type="text"
              placeholder="Will Smith"
              autoFocus
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Enter number"
              name="number"
              type="number"
              placeholder="+48 089 123 942"
            />
            <LoadingButton
              endIcon={<SaveIcon />}
              loading={isAddLoading}
              loadingPosition="end"
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              <span>add</span>
            </LoadingButton>
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>
  );
}