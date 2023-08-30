import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsAddLoading = state => state.contacts.isAddLoading
export const selectIsDeleteLoading = state => state.contacts.isDeleteLoading
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;



  export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  );