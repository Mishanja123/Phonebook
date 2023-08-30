import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';


import Container from '@mui/material/Container';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button'
import Key from '@mui/icons-material/Key';
import Email from '@mui/icons-material/Email';
import Badge from '@mui/icons-material/Badge';



export const RegisterForm = () => {
  const [value, setValue] = useState('');
  const minLength = 12;



    const dispatch = useDispatch();
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 


    const handleChange = ({ target: {name, value} }) => {
        switch(name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                setValue(value)
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({name, email, password}))
        setName('');
        setEmail('');
        setPassword('');
    };

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
        <form onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Username
            <Input type="text" placeholder="Username" name="name" value={name} onChange={handleChange} startDecorator={<Badge />}/>
          </label>
          <label className={css.label}>
            Email
            <Input type="email" placeholder="yourname@example.com"  name="email" value={email} onChange={handleChange} startDecorator={<Email />}/>
          </label>
          <Stack
                  spacing={0.5}
                  sx={{
                    '--hue': Math.min(value.length * 10, 120),
                  }}
          >
            Password
            <Input type="password" autoComplete='' placeholder="Create your password" name="password" value={password} onChange={handleChange} startDecorator={<Key />}/>
            <LinearProgress
              determinate
              size="sm"
              value={Math.min((value.length * 100) / minLength, 100)}
              sx={{
                bgcolor: 'background.level3',
                color: 'hsl(var(--hue) 80% 40%)',
              }}
            />
            <Typography
              level="body-xs"
              sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
            >
              {value.length < 3 && 'Very weak'}
              {value.length >= 3 && value.length < 6 && 'Weak'}
              {value.length >= 6 && value.length < 10 && 'Strong'}
              {value.length >= 10 && 'Very strong'}
            </Typography>
          </Stack>
          <Button type="submit">Register</Button>
        </form>
        <NavLink className={css.link} to="/login">
          Already have an account? Log In
        </NavLink>
    </Container>
  );
};






