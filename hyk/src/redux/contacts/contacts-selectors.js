import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getVisibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

  
export default {
  getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
