import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactForm() {
  const dispatch = useDispatch();

  const items = useSelector(contactsSelectors.getAllContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (items.find((contact) => contact.name.toLowerCase() === name)) {
        return alert("Этот контакт уже добавлен");
      } else {
        dispatch(contactsOperations.addContact({ name, number }));

        setName("");
        setNumber("");
      }
    },
    [dispatch, name, number, items]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="text"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
