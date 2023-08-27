import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/filterSlice'
import { selectFilter } from '../../redux/selectors';

import css  from "./Filter.module.css";


export const Filter = () => {

  const dispatch = useDispatch() 
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    dispatch(setFilter(filterValue));
  };

    return (
        <form className={css.form}>
        <label className= {css.lable}>
          Find contacts by name
        <input
         className={css.input}
         htmlFor="filter"
         type="text"
         name="filter"
         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         placeholder="Enter contact Name"
         onChange={handleFilterChange}
         value={filter.value}
        />
      </label>
      </form>
  );
};