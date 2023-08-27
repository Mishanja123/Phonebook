import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";


import css from './Contact.module.css';


export const Contact = ({contacts}) => {
    const dispatch = useDispatch();


    return (
        <>
        {contacts.map(({id, name, phone}) => {
            const handleDelete = () => dispatch(deleteContact(id));
            return (
                <li key={id}>
                    <p>{name}: {phone}</p>
                    <button type="button"  className={css.deleteBtn} onClick={handleDelete}>Delete</button>
                </li>
            )
        })}
        </>
    );
};