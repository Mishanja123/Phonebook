import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

import Button from '@mui/joy/Button'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const contacts = useSelector(selectContacts)

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <PersonIcon/>
          <p className={css.username}>{user.name}</p>
        </li>
        <li className={css.item}>
          <MailIcon/>
          <p className={css.username}>{user.email}</p>
        </li>
        <li className={css.item}>
          <p className={css.contacts}>Contacts: <span className={css.contactsSpan}>{contacts.length}</span></p>
        </li>
      </ul>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log-out
      </Button>
    </div>
  );
};
