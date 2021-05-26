import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
