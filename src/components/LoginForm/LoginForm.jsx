import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';

import Container from '@mui/material/Container';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'
import Email from '@mui/icons-material/Email';
import Key from '@mui/icons-material/Key';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <Input type="email" placeholder="yourname@example.com" name="email" startDecorator={<Email />} />
        </label>
        <label className={css.label}>
          Password
          <Input autoComplete='' type="password" placeholder="Enter your password" name="password" startDecorator={<Key />} />
        </label>
        <Button type="submit">Log In</Button>
      </form>
      <NavLink className={css.link} to="/register">
        Don't have an account? Sign Up
      </NavLink>
    </Container>
  );
};
