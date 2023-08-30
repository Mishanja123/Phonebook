import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const contactsInitialState = {
    items: [],
    isLoading: false,
    isDeleteLoading: false,
    isAddLoading: false,
    error: null
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending](state) {
      state.isAddLoading = true;
    },
    [addContact.rejected](state, action) {
      state.isAddLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isDeleteLoading = true;
    },
    [deleteContact.rejected](state, action) {
      state.isDeleteLoading = false;
      state.error = action.payload;
    },

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isAddLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isDeleteLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
        
      );
      state.items.splice(index, 1);
    },
  },
});


export const contactsReducer = contactsSlice.reducer;