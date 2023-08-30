import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import css from "./HomeTrue.module.css";

export const HomeTrue = () => {
    const { user } = useAuth();

    return (
        <div className={css.wrapper}>
        <p className={css.username}>Welcome {user.name}, start creating new contacts now.</p>
        <NavLink className={css.link} to="/contacts">
         Get started
        </NavLink>
      </div>
    )
}