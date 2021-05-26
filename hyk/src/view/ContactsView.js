import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import ContactForm from "../components/ContactForm/ContactForm";

import Filter from "../components/Filter";
import ContactList from "../components/ContactList/ContactList";

export default function App() {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && <h1>Загружаем...</h1>}
      <ContactList />
    </>
  );
}
