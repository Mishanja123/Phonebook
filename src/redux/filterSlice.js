import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  value: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
      setFilter: (state, action) => {
        return {...state, value: action.payload}
      },
    },
  });

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;