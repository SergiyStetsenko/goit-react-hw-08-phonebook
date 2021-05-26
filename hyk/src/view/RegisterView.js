import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../auth";

const style = {
  form: {
    width: 300,
    paddingLeft: 20,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  button: {
    border: " black",
    borderRadius: 10,
    padding: 10,
    marginLeft: 67,
  },
  formeReg: {
    paddingLeft: 60,
    color: "#E84A5F",
  },
};
export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(authOperations.register({ name, email, password }));

      setName("");
      setEmail("");
      setPassword("");
    },
    [dispatch, name, email, password]
  );

  return (
    <>
      <h2 style={style.formeReg}>Форма регистрации</h2>
      <form autoComplete="on" style={style.form} onSubmit={handleSubmit}>
        <label style={style.label}>
          Имя :
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label style={style.label}>
          Почта :
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={style.label}>
          Пароль :
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button style={style.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}
