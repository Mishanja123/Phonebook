import { NavLink } from 'react-router-dom';
import css from './HomeFalse.module.css';

export const HomeFalse = () => {
    return (
      <div className={css.homeBox}>
        <p className={css.username}>Hello! Please</p>
        <NavLink className={css.link} to="/login">
          Log-In
        </NavLink>
        <p className={css.username}>to continue.</p>
      </div>
    )
}