import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice'
import { selectFilter } from '../../redux/contacts/selectors';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export const Filter = () => {
  const dispatch = useDispatch() 
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    dispatch(setFilter(filterValue));
  };

    return (
        <>
          <Typography component="h1" variant="h5"
            sx={{
                marginTop: 3,
                textAlign: 'center',
            }}
          >
            Your contacts
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Enter name"
              name="filter"
              type="text"
              placeholder="Jason Statham"
              autoComplete="name"
              value={filter.value}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={handleFilterChange}
            />
          </Box>
        </>
  );
};